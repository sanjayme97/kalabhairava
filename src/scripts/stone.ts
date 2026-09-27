/**
 * The Manakathuru inscription stone in 3D, built from photographs (not a scan).
 * A small oil lamp can be moved across its face: low, raking light is how
 * epigraphers read worn letters, and it makes the carving stand out here too.
 */
import {
  AdditiveBlending,
  AmbientLight,
  Fog,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Color,
  ExtrudeGeometry,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Points,
  SRGBColorSpace,
  Scene,
  Shape,
  ShaderMaterial,
  TextureLoader,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Stone proportions from the photograph (crop is 1380 × 2620 px).
const W = 1.38;
const H = 2.62;
const DEPTH = 0.2;
const BASE_H = 0.34;

/** Points of interest, in texture coordinates (u → right, v → down). */
export const spots = {
  arch: { u: 0.5, v: 0.03 },
  moon: { u: 0.533, v: 0.078 },
  sun: { u: 0.628, v: 0.085 },
  linga: { u: 0.398, v: 0.16 },
  worshipper: { u: 0.194, v: 0.196 },
  cow: { u: 0.778, v: 0.196 },
  text: { u: 0.5, v: 0.55 },
  end: { u: 0.5, v: 0.93 },
} as const;
export type SpotId = keyof typeof spots;

const flameVertex = /* glsl */ `
  uniform float uTime;
  uniform float uScale;
  varying float vFlicker;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uScale / -mv.z;
    vFlicker = 0.82 + 0.12 * sin(uTime * 9.0) + 0.06 * sin(uTime * 23.0);
  }
`;
const flameFrag = /* glsl */ `
  varying float vFlicker;
  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5, 0.62);
    uv.y *= 1.0 + step(0.0, -uv.y) * 0.9;
    uv.x *= 1.0 + max(0.0, -uv.y) * 2.2 * vFlicker;
    float d = length(uv);
    float core = smoothstep(0.14, 0.0, d);
    float body = smoothstep(0.3, 0.05, d);
    float halo = smoothstep(0.5, 0.0, d) * 0.35;
    vec3 col = vec3(1.0, 0.45, 0.1) * body + vec3(1.0, 0.9, 0.6) * core + vec3(1.0, 0.6, 0.25) * halo;
    float a = (body + halo) * vFlicker;
    if (a < 0.01) discard;
    gl_FragColor = vec4(col, a);
  }
`;

export interface StoneHandle {
  focus(id: SpotId): void;
  setMode(mode: 'lamp' | 'turn'): void;
  destroy(): void;
}

export function startStone(
  canvas: HTMLCanvasElement,
  textures: { color: string; normal: string },
  onReady?: () => void,
): StoneHandle | null {
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: 'low-power' });
  } catch {
    return null;
  }
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.outputColorSpace = SRGBColorSpace;

  const scene = new Scene();
  scene.background = new Color(0x0f0b09);
  scene.fog = new Fog(0x0f0b09, 4.5, 9);
  const camera = new PerspectiveCamera(34, 1, 0.1, 50);

  // ── the stone ──
  const shape = new Shape();
  const capBottom = 0.637;
  const spring = 0.836;
  shape.moveTo(0.08, 0);
  shape.lineTo(0.949, 0);
  shape.lineTo(0.949, capBottom);
  shape.lineTo(0.993, capBottom);
  shape.lineTo(0.993, spring);
  shape.absellipse(0.5, spring, 0.493, 0.16, 0, Math.PI, false, 0);
  shape.lineTo(0.007, capBottom);
  shape.lineTo(0.08, capBottom);
  shape.lineTo(0.08, 0);

  const geo = new ExtrudeGeometry(shape, { depth: DEPTH, bevelEnabled: false, curveSegments: 48 });
  geo.translate(-0.5, 0, -DEPTH / 2);

  const loader = new TextureLoader();
  let pending = 2;
  const loaded = () => {
    if (--pending === 0) {
      onReady?.();
      renderOnce();
    }
  };
  const map = loader.load(textures.color, loaded);
  map.colorSpace = SRGBColorSpace;
  map.anisotropy = 4;
  const normalMap = loader.load(textures.normal, loaded);

  const face = new MeshStandardMaterial({
    map,
    normalMap,
    normalScale: new Vector2(1.6, 1.6),
    roughness: 0.93,
    metalness: 0,
    color: 0xd8cfc2,
  });
  const sides = new MeshStandardMaterial({ color: 0x55534c, roughness: 1 });
  const stone = new Mesh(geo, [face, sides]);
  stone.scale.set(W, H, 1);
  stone.position.y = BASE_H;
  scene.add(stone);

  // black granite plinth, as at the temple
  const plinth = new Mesh(
    new BoxGeometry(W * 1.2, BASE_H, 0.75),
    new MeshStandardMaterial({ color: 0x141414, roughness: 0.28, metalness: 0.2 }),
  );
  plinth.position.set(0, BASE_H / 2, 0.12);
  scene.add(plinth);

  const floor = new Mesh(new PlaneGeometry(20, 20), new MeshStandardMaterial({ color: 0x1b1612, roughness: 1 }));
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  scene.add(new AmbientLight(0xfff1dd, 0.2));

  // ── the lamp ──
  const lamp = new PointLight(0xffb066, 3.2, 6, 1.6);
  scene.add(lamp);
  const flameUniforms = { uTime: { value: 0 }, uScale: { value: 60 } };
  const flameGeo = new BufferGeometry();
  flameGeo.setAttribute('position', new BufferAttribute(new Float32Array(3), 3));
  const flameMat = new ShaderMaterial({
    uniforms: flameUniforms,
    vertexShader: flameVertex,
    fragmentShader: flameFrag,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const flame = new Points(flameGeo, flameMat);
  flame.frustumCulled = false;
  scene.add(flame);

  const faceZ = DEPTH / 2;
  const lampPos = new Vector3(-0.5, BASE_H + H * 0.6, faceZ + 0.28);
  const lampGoal = lampPos.clone();
  const toWorld = (u: number, v: number) => new Vector3((u - 0.5) * W, BASE_H + (1 - v) * H, faceZ + 0.28);

  // ── camera & controls ──
  const controls = new OrbitControls(camera, canvas);
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 1.6;
  controls.maxDistance = 7;
  controls.minAzimuthAngle = -0.75;
  controls.maxAzimuthAngle = 0.75;
  controls.minPolarAngle = 1.05;
  controls.maxPolarAngle = 1.72;
  controls.target.set(0, BASE_H + H * 0.46, 0);
  camera.position.set(0.7, BASE_H + H * 0.5, 5.1);
  controls.enabled = false; // lamp mode by default
  const targetGoal = controls.target.clone();
  let camDistGoal: number | null = null;

  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // tall phone screens need a wider lens to fit the whole stone
    camera.fov = w / h < 0.75 ? 50 : w / h < 1.1 ? 44 : 34;
    camera.updateProjectionMatrix();
    flameUniforms.uScale.value = h * renderer.getPixelRatio() * 0.32;
    renderOnce();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  // ── lamp dragging ──
  let mode: 'lamp' | 'turn' = 'lamp';
  let dragging = false;
  let touched = false;
  const ndc = new Vector2();
  const dir = new Vector3();
  const moveLampTo = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    dir.set(ndc.x, ndc.y, 0.5).unproject(camera).sub(camera.position).normalize();
    // intersect with the plane just in front of the stone's face
    const t = (faceZ + 0.28 - camera.position.z) / dir.z;
    if (!(t > 0)) return;
    const p = camera.position.clone().addScaledVector(dir, t);
    lampGoal.set(
      Math.max(-W * 0.9, Math.min(W * 0.9, p.x)),
      Math.max(BASE_H + 0.1, Math.min(BASE_H + H + 0.15, p.y)),
      faceZ + 0.28,
    );
  };
  const onDown = (e: PointerEvent) => {
    touched = true;
    if (mode !== 'lamp') return;
    dragging = true;
    canvas.setPointerCapture(e.pointerId);
    moveLampTo(e);
    wake();
  };
  const onMove = (e: PointerEvent) => {
    if (dragging) {
      moveLampTo(e);
      wake();
    }
  };
  const onUp = () => (dragging = false);
  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerup', onUp);
  canvas.addEventListener('pointercancel', onUp);
  controls.addEventListener('start', () => {
    touched = true;
    wake();
  });
  controls.addEventListener('change', () => wake());

  // ── loop: runs while the stone is on screen ──
  let raf = 0;
  let last = performance.now();
  let visible = true;
  const renderOnce = () => renderer.render(scene, camera);
  const tick = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    flameUniforms.uTime.value += dt;
    if (!touched && !reduce) {
      // an unattended lamp drifts slowly across the stone
      const t = flameUniforms.uTime.value * 0.25;
      lampGoal.set(Math.sin(t) * W * 0.75, BASE_H + H * (0.55 + Math.sin(t * 0.63) * 0.33), faceZ + 0.28);
    }
    lampPos.lerp(lampGoal, reduce ? 1 : 0.12);
    lamp.position.copy(lampPos);
    flame.position.copy(lampPos);
    controls.target.lerp(targetGoal, 0.08);
    if (camDistGoal !== null) {
      const d = camera.position.distanceTo(controls.target);
      const nd = d + (camDistGoal - d) * 0.08;
      camera.position.sub(controls.target).setLength(nd).add(controls.target);
      if (Math.abs(nd - camDistGoal) < 0.01) camDistGoal = null;
    }
    controls.update();
    renderOnce();
    // the flame keeps flickering while the stone is on screen
    raf = visible && !reduce ? requestAnimationFrame(tick) : 0;
  };
  const wake = () => {
    if (reduce) {
      lampPos.copy(lampGoal);
      lamp.position.copy(lampPos);
      flame.position.copy(lampPos);
      controls.update();
      renderOnce();
      return;
    }
    if (!raf && visible) {
      last = performance.now();
      raf = requestAnimationFrame(tick);
    }
  };
  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting && !document.hidden;
    if (visible) wake();
    else {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  });
  io.observe(canvas);
  resize();
  lamp.position.copy(lampPos);
  flame.position.copy(lampPos);
  controls.update();
  wake();

  return {
    focus(id) {
      const s = spots[id];
      touched = true;
      const p = toWorld(s.u, s.v);
      // light from the side so the carving reads
      lampGoal.set(p.x + (s.u < 0.5 ? 0.35 : -0.35), p.y + 0.15, p.z);
      targetGoal.set(p.x * 0.6, p.y, 0);
      camDistGoal = id === 'text' || id === 'end' ? 4.2 : 2.6;
      wake();
    },
    setMode(m) {
      mode = m;
      controls.enabled = m === 'turn';
      canvas.style.cursor = m === 'turn' ? 'grab' : 'crosshair';
      // in lamp mode a vertical swipe still scrolls the page on phones
      canvas.style.touchAction = m === 'turn' ? 'none' : 'pan-y';
    },
    destroy() {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      controls.dispose();
      renderer.dispose();
    },
  };
}
