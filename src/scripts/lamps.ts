/**
 * The aarati procession — thousands of small flames walking up the village street
 * towards the temple, drawn over the real night photograph.
 * Tap anywhere on the scene to light a lamp of your own; it joins the procession.
 */
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  Vector3,
  WebGLRenderer,
} from 'three';

const STREET_LEN = 46; // world units from nearest to farthest lamp
const NEAR_Z = 6;

const vertex = /* glsl */ `
  uniform float uTime;
  uniform float uScale;
  uniform float uWalk;
  attribute vec3 aBase;     // x, y, z-offset
  attribute vec3 aSeed;     // seed, speed, size
  varying float vFlicker;
  varying float vFade;
  void main() {
    float seed = aSeed.x;
    float travelled = mod(aBase.z + uTime * aSeed.y * uWalk, ${STREET_LEN.toFixed(1)});
    float z = ${NEAR_Z.toFixed(1)} - travelled;
    float sway = sin(uTime * 0.7 + seed * 6.2831) * 0.12;
    float bob = sin(uTime * 3.1 + seed * 40.0) * 0.025;
    float far = travelled / ${STREET_LEN.toFixed(1)};
    // the street bends left towards the temple, and narrows as it goes
    float x = aBase.x * (1.0 - far * 0.55) - far * far * 14.0;
    vec3 p = vec3(x + sway, aBase.y + bob, z);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(aSeed.z * uScale / -mv.z, 1.5, 70.0);
    // flicker: two incommensurate sines + a fast shiver
    vFlicker = 0.78 + 0.14 * sin(uTime * 9.0 + seed * 91.0) + 0.08 * sin(uTime * 23.0 + seed * 13.0);
    // fade in at the far end and out as they pass the camera
    vFade = (1.0 - smoothstep(${(STREET_LEN - 12).toFixed(1)}, ${(STREET_LEN - 4).toFixed(1)}, travelled)) * smoothstep(0.0, 3.0, travelled) * mix(1.0, 0.35, far);
  }
`;

const flame = /* glsl */ `
  varying float vFlicker;
  varying float vFade;
  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5, 0.62);
    uv.y *= 1.0 + step(0.0, -uv.y) * 0.9;           // taller above the wick
    uv.x *= 1.0 + max(0.0, -uv.y) * 2.2 * vFlicker; // taper to a tip
    float d = length(uv);
    float core = smoothstep(0.1, 0.0, d);
    float body = smoothstep(0.22, 0.12, d);
    float halo = smoothstep(0.5, 0.05, d) * 0.16;
    vec3 col = vec3(1.0, 0.42, 0.08) * body + vec3(1.0, 0.86, 0.55) * core + vec3(1.0, 0.55, 0.2) * halo;
    float a = (body * 0.9 + halo) * vFlicker * vFade;
    if (a < 0.01) discard;
    gl_FragColor = vec4(col * vFlicker, a);
  }
`;

const emberVertex = /* glsl */ `
  uniform float uTime;
  uniform float uScale;
  attribute vec4 aEmber; // x, z, seed, speed
  varying float vA;
  void main() {
    float life = fract(uTime * aEmber.w * 0.12 + aEmber.z);
    vec3 p = vec3(aEmber.x + sin(life * 6.0 + aEmber.z * 20.0) * 0.4, 1.6 + life * 4.5, aEmber.y);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(0.35 * uScale / -mv.z, 1.0, 5.0);
    vA = (1.0 - life) * smoothstep(0.0, 0.1, life);
  }
`;
const emberFrag = /* glsl */ `
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d) * vA;
    gl_FragColor = vec4(1.0, 0.6, 0.25, a);
  }
`;

// Lamps lit by the visitor: they start where you tap and walk off towards the temple.
const userVertex = /* glsl */ `
  uniform float uTime;
  uniform float uScale;
  attribute vec4 aLit; // x, y, z at birth, birth time
  varying float vFlicker;
  varying float vFade;
  void main() {
    float age = uTime - aLit.w;
    vec3 p = vec3(aLit.x + sin(age * 0.8) * 0.1, aLit.y + sin(age * 3.0) * 0.03, aLit.z - age * 0.9);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float grow = smoothstep(0.0, 0.6, age);
    gl_PointSize = clamp(2.6 * uScale * grow / -mv.z, 0.0, 80.0);
    vFlicker = 0.85 + 0.15 * sin(uTime * 11.0 + aLit.w * 7.0);
    vFade = aLit.w < 0.0 ? 0.0 : (1.0 - smoothstep(30.0, 45.0, age));
  }
`;

export interface LampsHandle {
  destroy(): void;
}

export function startLamps(canvas: HTMLCanvasElement, opts: { onLight?: (count: number) => void } = {}): LampsHandle | null {
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
  } catch {
    return null;
  }
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = matchMedia('(max-width: 700px)').matches;
  const weak = (navigator.hardwareConcurrency ?? 8) <= 4 || ((navigator as { deviceMemory?: number }).deviceMemory ?? 8) <= 3;
  const COUNT = small || weak ? 650 : 1500;

  renderer.setPixelRatio(Math.min(devicePixelRatio, weak ? 1.25 : 1.75));
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(52, 1, 0.1, 100);
  const camBase = new Vector3(1.2, 3.4, 9);
  camera.position.copy(camBase);
  const look = new Vector3(-5, -2.4, -30);
  camera.lookAt(look);

  // ── procession ──
  const base = new Float32Array(COUNT * 3);
  const seed = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    // people walk in a loose river, denser in the middle of the street
    const lane = (Math.random() + Math.random() + Math.random()) / 3 - 0.5;
    base[i * 3] = lane * 7.5;
    base[i * 3 + 1] = 1.45 + Math.random() * 0.35; // lamp carried on the head
    base[i * 3 + 2] = Math.random() * STREET_LEN;
    seed[i * 3] = Math.random();
    seed[i * 3 + 1] = 0.35 + Math.random() * 0.25;
    seed[i * 3 + 2] = 1.3 + Math.random() * 1.1;
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(new Float32Array(COUNT * 3), 3));
  geo.setAttribute('aBase', new BufferAttribute(base, 3));
  geo.setAttribute('aSeed', new BufferAttribute(seed, 3));
  const uniforms = { uTime: { value: 0 }, uScale: { value: 300 }, uWalk: { value: 1 } };
  const mat = new ShaderMaterial({
    uniforms,
    vertexShader: vertex,
    fragmentShader: flame,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const lamps = new Points(geo, mat);
  lamps.frustumCulled = false;
  scene.add(lamps);

  // ── embers ──
  const EMBERS = small ? 90 : 200;
  const ember = new Float32Array(EMBERS * 4);
  for (let i = 0; i < EMBERS; i++) {
    ember[i * 4] = (Math.random() - 0.5) * 7;
    ember[i * 4 + 1] = NEAR_Z - 2 - Math.random() * 30;
    ember[i * 4 + 2] = Math.random();
    ember[i * 4 + 3] = 0.5 + Math.random();
  }
  const eGeo = new BufferGeometry();
  eGeo.setAttribute('position', new BufferAttribute(new Float32Array(EMBERS * 3), 3));
  eGeo.setAttribute('aEmber', new BufferAttribute(ember, 4));
  const eMat = new ShaderMaterial({
    uniforms,
    vertexShader: emberVertex,
    fragmentShader: emberFrag,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const embers = new Points(eGeo, eMat);
  embers.frustumCulled = false;
  scene.add(embers);

  // ── the visitor's lamps ──
  const MAX_LIT = 60;
  const lit = new Float32Array(MAX_LIT * 4).fill(-1);
  const uGeo = new BufferGeometry();
  uGeo.setAttribute('position', new BufferAttribute(new Float32Array(MAX_LIT * 3), 3));
  const litAttr = new BufferAttribute(lit, 4);
  uGeo.setAttribute('aLit', litAttr);
  const uMat = new ShaderMaterial({
    uniforms,
    vertexShader: userVertex,
    fragmentShader: flame,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const userLamps = new Points(uGeo, uMat);
  userLamps.frustumCulled = false;
  scene.add(userLamps);
  let litCount = 0;

  // ── sizing ──
  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // keep the street filling the frame on tall phone screens
    camera.fov = w / h < 0.8 ? 64 : 48;
    camera.updateProjectionMatrix();
    uniforms.uScale.value = h * renderer.getPixelRatio() * 0.2;
  };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  // ── interaction ──
  const pointer = { x: 0, y: 0 };
  const onMove = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    pointer.y = ((e.clientY - r.top) / r.height) * 2 - 1;
  };
  const tmp = new Vector3();
  const onTap = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
    const ny = -((e.clientY - r.top) / r.height) * 2 + 1;
    // cast the tap into the scene and place the lamp at head height
    tmp.set(nx, ny, 0.5).unproject(camera).sub(camera.position).normalize();
    const targetY = 1.6;
    let t = (targetY - camera.position.y) / tmp.y;
    if (!(t > 0) || t > 30) t = 8;
    const p = camera.position.clone().addScaledVector(tmp, t);
    const i = litCount % MAX_LIT;
    lit[i * 4] = Math.max(-5, Math.min(5, p.x));
    lit[i * 4 + 1] = targetY + (Math.random() - 0.5) * 0.15;
    lit[i * 4 + 2] = Math.min(NEAR_Z - 1, p.z);
    lit[i * 4 + 3] = uniforms.uTime.value;
    litAttr.needsUpdate = true;
    litCount++;
    opts.onLight?.(litCount);
    if (reduce) render();
  };
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerdown', onTap);

  // ── loop ──
  let running = false;
  let raf = 0;
  let last = performance.now();
  const render = () => {
    const scroll = Math.min(1, window.scrollY / Math.max(1, canvas.clientHeight));
    camera.position.x += (camBase.x + pointer.x * 0.5 - camera.position.x) * 0.04;
    camera.position.y += (camBase.y - pointer.y * 0.25 - scroll * 0.6 - camera.position.y) * 0.04;
    camera.position.z = camBase.z - scroll * 3;
    camera.lookAt(look);
    renderer.render(scene, camera);
  };
  const tick = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    uniforms.uTime.value += dt;
    render();
    raf = requestAnimationFrame(tick);
  };
  const play = () => {
    if (running || reduce) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(tick);
  };
  const pause = () => {
    running = false;
    cancelAnimationFrame(raf);
  };

  if (reduce) {
    uniforms.uTime.value = 12;
    render();
  }

  const io = new IntersectionObserver(([e]) => (e.isIntersecting && !document.hidden ? play() : pause()));
  io.observe(canvas);
  const onVis = () => (document.hidden ? pause() : canvas.getBoundingClientRect().bottom > 0 && play());
  document.addEventListener('visibilitychange', onVis);

  return {
    destroy() {
      pause();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerdown', onTap);
      geo.dispose();
      eGeo.dispose();
      uGeo.dispose();
      mat.dispose();
      eMat.dispose();
      uMat.dispose();
      renderer.dispose();
    },
  };
}
