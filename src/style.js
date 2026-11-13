// Shared art direction: a warm print palette, toon shading with ink outlines, real shadows.
import * as THREE from 'three';

export const PAL = {
  ink: '#1d1714', paper: '#f5ecd8', paper2: '#e9dcc0', tomato: '#e4472b', mustard: '#f5b83d',
  teal: '#1f8f86', sea: '#2b6c99', leaf: '#5a9e52', wood: '#a8683a', woodDark: '#6e3f22',
  wall: '#efe0c2', wallLow: '#2f6b5e', concrete: '#cfc4b0', sky1: '#ffd9a0', sky2: '#f08a5d', sky3: '#6a5a8c',
};
export const DISPLAY = 'Anton, "Arial Narrow", Impact, sans-serif';

let grad = null;
function gradMap() {
  if (grad) return grad;
  grad = new THREE.DataTexture(Uint8Array.of(150, 205, 255), 3, 1, THREE.RedFormat);
  grad.minFilter = grad.magFilter = THREE.NearestFilter; grad.generateMipmaps = false; grad.needsUpdate = true;
  return grad;
}
const cache = new Map();
/** Cached flat toon material. */
export function toon(color, opt) {
  if (!opt) { const k = String(color); if (cache.has(k)) return cache.get(k); const m = new THREE.MeshToonMaterial({ color, gradientMap: gradMap() }); cache.set(k, m); return m; }
  return new THREE.MeshToonMaterial(Object.assign({ color, gradientMap: gradMap() }, opt));
}
const outlines = new Map();
function outlineMat(t) {
  if (outlines.has(t)) return outlines.get(t);
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide, uniforms: { t: { value: t }, c: { value: new THREE.Color(PAL.ink) } },
    vertexShader: 'uniform float t; void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position + normalize(normal) * t, 1.0); }',
    fragmentShader: 'uniform vec3 c; void main(){ gl_FragColor = vec4(c, 1.0); }',
  });
  outlines.set(t, m); return m;
}
/** Ink outline: the same geometry pushed out along its normals and drawn inside-out. */
export function ink(mesh, t = 0.022) {
  const o = new THREE.Mesh(mesh.geometry, outlineMat(t)); o.userData.outline = true; mesh.add(o); return mesh;
}
/** Mesh helper: toon material, casts and receives shadow, optional outline. */
export function part(geo, mat, outline = 0) {
  const m = new THREE.Mesh(geo, typeof mat === 'string' ? toon(mat) : mat);
  m.castShadow = true; m.receiveShadow = true; if (outline) ink(m, outline); return m;
}
export function canvasTex(w, h) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return { c, x: c.getContext('2d'), t };
}
/** Sun light with a shadow frustum sized to the playable area. */
export function sun(scene, { color = 0xfff1dd, intensity = 2.2, pos = [8, 14, 10], size = 20, depth = 50, map = 2048 } = {}) {
  const dl = new THREE.DirectionalLight(color, intensity); dl.position.set(...pos); dl.castShadow = true;
  const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
  dl.shadow.mapSize.set(coarse ? 1024 : map, coarse ? 1024 : map);
  const c = dl.shadow.camera; c.left = -size; c.right = size; c.top = size; c.bottom = -size; c.near = 1; c.far = depth;
  dl.shadow.bias = -0.0006; dl.shadow.normalBias = 0.03; dl.shadow.radius = 3;
  scene.add(dl); scene.add(dl.target); return dl;
}
/** Vertical gradient backdrop as a big inward-facing cylinder. */
export function skyDome(scene, stops, radius = 70, height = 60, y = -6) {
  const s = canvasTex(8, 256); const g = s.x.createLinearGradient(0, 0, 0, 256);
  stops.forEach(([p, c]) => g.addColorStop(p, c)); s.x.fillStyle = g; s.x.fillRect(0, 0, 8, 256); s.t.needsUpdate = true;
  const m = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, 24, 1, true), new THREE.MeshBasicMaterial({ map: s.t, side: THREE.BackSide, fog: false, depthWrite: false }));
  m.position.y = y + height / 2; m.renderOrder = -10; scene.add(m); return m;
}
/** Painted sign on a plane: display type on a flat colour with an ink border. */
export function sign(text, w, h, { fg = PAL.ink, bg = PAL.mustard, border = PAL.ink, sub = '' } = {}) {
  const s = canvasTex(512, Math.max(32, Math.round(512 * h / w))), x = s.x, H = s.c.height;
  x.fillStyle = border; x.fillRect(0, 0, 512, H); const b = Math.max(5, H * 0.07); x.fillStyle = bg; x.fillRect(b, b, 512 - 2 * b, H - 2 * b);
  x.fillStyle = fg; x.textAlign = 'center'; x.textBaseline = 'middle';
  let fs = H * (sub ? 0.5 : 0.66); x.font = `${fs}px ${DISPLAY}`;
  while (x.measureText(text).width > 512 - 4 * b - 16 && fs > 10) { fs -= 3; x.font = `${fs}px ${DISPLAY}`; }
  x.fillText(text, 256, H * (sub ? 0.4 : 0.54));
  if (sub) { x.font = `700 ${H * 0.17}px Figtree, system-ui, sans-serif`; x.fillText(sub, 256, H * 0.78); }
  s.t.needsUpdate = true;
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: s.t }));
}
