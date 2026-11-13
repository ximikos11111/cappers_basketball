import * as THREE from 'three';
import { clamp, damp, angDamp, shade } from './util.js';
import { PAL, DISPLAY, toon, ink, part, canvasTex } from './style.js';

// ---------- faces: drawn in ink on the skin colour. Photos are a later, opt-in step (look.usePhoto).
const EXPRS = ['neutral', 'happy', 'shock', 'sad'];
const INK = PAL.ink;

/** Eyes, brows, mouth, facial hair and glasses around (cx, cy) with face radius r. */
function features(x, cx, cy, r, def, ex) {
  const L = def.look || {}, hair = L.hair || '#2a1c14';
  const beard = L.beard === true ? 'full' : L.beard;
  const my = cy + r * 0.5;
  // facial hair sits under the mouth and eyes
  if (beard) {
    x.save(); x.fillStyle = hair; x.globalAlpha = beard === 'stubble' ? 0.3 : 1;
    x.beginPath();
    if (beard === 'full' || beard === 'stubble') { x.rect(cx - r * 2, cy + r * 0.2, r * 4, r * 3); x.clip(); x.beginPath(); x.ellipse(cx, cy + r * 0.55, r * 1.6, r * 1.2, 0, 0, 7); x.ellipse(cx, my + r * 0.02, r * 0.33, r * 0.19, 0, 0, 7); x.fill('evenodd'); }
    else if (beard === 'goatee') { x.ellipse(cx, my + r * 0.12, r * 0.46, r * 0.5, 0, 0, 7); x.ellipse(cx, my + r * 0.02, r * 0.27, r * 0.15, 0, 0, 7); x.fill('evenodd'); }
    else if (beard === 'mustache') { x.ellipse(cx - r * 0.17, my - r * 0.2, r * 0.24, r * 0.1, -0.25, 0, 7); x.ellipse(cx + r * 0.17, my - r * 0.2, r * 0.24, r * 0.1, 0.25, 0, 7); x.fill(); }
    x.restore();
  }
  // blush
  x.fillStyle = 'rgba(228,71,43,.16)';
  for (const s of [-1, 1]) { x.beginPath(); x.ellipse(cx + s * r * 0.62, cy + r * 0.3, r * 0.19, r * 0.13, 0, 0, 7); x.fill(); }
  const ey = cy - r * 0.02, ex0 = r * 0.37;
  x.lineCap = 'round'; x.lineJoin = 'round';
  for (const s of [-1, 1]) {
    const px = cx + s * ex0;
    x.fillStyle = INK; x.strokeStyle = INK;
    if (ex === 'happy') { x.lineWidth = r * 0.085; x.beginPath(); x.arc(px, ey + r * 0.1, r * 0.15, Math.PI * 1.12, Math.PI * 1.88); x.stroke(); }
    else if (ex === 'shock') {
      x.fillStyle = '#fff'; x.beginPath(); x.ellipse(px, ey, r * 0.17, r * 0.21, 0, 0, 7); x.fill(); x.lineWidth = r * 0.05; x.stroke();
      x.fillStyle = INK; x.beginPath(); x.arc(px, ey, r * 0.055, 0, 7); x.fill();
    } else {
      const dy = ex === 'sad' ? r * 0.05 : 0;
      x.beginPath(); x.ellipse(px, ey + dy, r * 0.082, r * (L.eyes === 'sleepy' ? 0.075 : 0.125), 0, 0, 7); x.fill();
      x.fillStyle = '#fff'; x.beginPath(); x.arc(px + r * 0.03, ey + dy - r * 0.05, r * 0.028, 0, 7); x.fill();
    }
    // brows
    x.strokeStyle = shade(hair, 0.55); x.lineWidth = r * (L.brows === 'thick' ? 0.105 : 0.075); x.beginPath();
    const by = ey - r * (ex === 'shock' ? 0.4 : 0.27);
    if (ex === 'sad') { x.moveTo(px - s * r * 0.17, by - r * 0.07); x.lineTo(px + s * r * 0.15, by + r * 0.03); }
    else if (ex === 'happy') { x.moveTo(px - r * 0.15, by - r * 0.02); x.quadraticCurveTo(px, by - r * 0.09, px + r * 0.15, by - r * 0.02); }
    else { x.moveTo(px - s * r * 0.16, by + r * 0.035); x.lineTo(px + s * r * 0.16, by - r * 0.03); }
    x.stroke();
  }
  if (L.glasses) {
    x.strokeStyle = INK; x.lineWidth = r * 0.06; x.fillStyle = 'rgba(255,255,255,.22)';
    for (const s of [-1, 1]) { x.beginPath(); x.arc(cx + s * ex0, ey, r * 0.245, 0, 7); x.fill(); x.stroke(); }
    x.beginPath(); x.moveTo(cx - r * 0.125, ey - r * 0.03); x.lineTo(cx + r * 0.125, ey - r * 0.03); x.stroke();
  }
  // mouth
  x.strokeStyle = INK; x.lineWidth = r * 0.065;
  if (ex === 'happy') {
    x.fillStyle = '#5a1418'; x.beginPath(); x.moveTo(cx - r * 0.3, my - r * 0.1); x.quadraticCurveTo(cx, my + r * 0.42, cx + r * 0.3, my - r * 0.1); x.closePath(); x.fill(); x.stroke();
    x.fillStyle = '#fff'; x.beginPath(); x.moveTo(cx - r * 0.24, my - r * 0.075); x.lineTo(cx + r * 0.24, my - r * 0.075); x.lineTo(cx + r * 0.2, my); x.lineTo(cx - r * 0.2, my); x.fill();
  } else if (ex === 'shock') { x.fillStyle = '#5a1418'; x.beginPath(); x.ellipse(cx, my + r * 0.03, r * 0.13, r * 0.19, 0, 0, 7); x.fill(); x.stroke(); }
  else if (ex === 'sad') { x.beginPath(); x.arc(cx, my + r * 0.27, r * 0.24, Math.PI * 1.2, Math.PI * 1.8); x.stroke(); }
  else { x.beginPath(); x.moveTo(cx - r * 0.2, my - r * 0.02); x.quadraticCurveTo(cx + r * 0.02, my + r * 0.13, cx + r * 0.23, my - r * 0.07); x.stroke(); }
}

/** Texture for the 3D head's face patch. */
function drawFaceTex(x, S, def, ex) {
  const L = def.look || {}, cx = S / 2, cy = S / 2, r = S * 0.4;
  x.clearRect(0, 0, S, S); x.fillStyle = L.skin || '#e0b090'; x.fillRect(0, 0, S, S);
  const img = L.usePhoto && def._img && (def._img[ex] || def._img.neutral);
  if (img) {
    const t = document.createElement('canvas'); t.width = t.height = S; const c = t.getContext('2d');
    const sc = Math.max(S / img.width, S / img.height) * 1.06;
    c.drawImage(img, cx - img.width * sc / 2, cy - img.height * sc / 2, img.width * sc, img.height * sc);
    c.globalCompositeOperation = 'destination-in';
    const g = c.createRadialGradient(cx, cy, S * 0.34, cx, cy, S * 0.49); g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = g; c.fillRect(0, 0, S, S); x.drawImage(t, 0, 0); return;
  }
  features(x, cx, cy, r, def, ex);
}

/** Flat ink portrait for menus and the HUD, in the same style as the 3D characters. */
function drawPortrait(x, S, def, ex) {
  const L = def.look || {}, skin = L.skin || '#e0b090', hair = L.hair || '#2a1c14', hs = L.hairStyle || 'short';
  const cx = S / 2, cy = S * 0.52, rx = S * 0.27, ry = S * 0.29, lw = Math.max(2, S * 0.026);
  x.clearRect(0, 0, S, S); x.save(); x.beginPath(); x.arc(S / 2, S / 2, S / 2, 0, 7); x.clip();
  x.fillStyle = def._bg || PAL.mustard; x.fillRect(0, 0, S, S);
  x.lineWidth = lw; x.strokeStyle = INK; x.lineJoin = 'round';
  // shoulders and neck
  x.fillStyle = def._jersey || PAL.sea; x.beginPath(); x.ellipse(cx, S * 1.03, S * 0.44, S * 0.2, 0, 0, 7); x.fill(); x.stroke();
  x.fillStyle = shade(skin, 0.9); x.fillRect(cx - S * 0.075, cy + ry * 0.7, S * 0.15, S * 0.16);
  if (hs === 'afro' || hs === 'curly') { x.fillStyle = hair; x.beginPath(); x.arc(cx, cy - ry * 0.28, rx * (hs === 'afro' ? 1.42 : 1.22), 0, 7); x.fill(); x.stroke(); }
  // ears + head
  x.fillStyle = skin;
  for (const s of [-1, 1]) { x.beginPath(); x.ellipse(cx + s * rx * 0.98, cy + ry * 0.05, rx * 0.16, ry * 0.2, 0, 0, 7); x.fill(); x.stroke(); }
  x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, 7); x.fill();
  x.save(); x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, 7); x.clip();
  features(x, cx, cy + ry * 0.08, rx * 0.98, def, ex);
  // hair inside the head outline
  x.fillStyle = hair;
  const cap = (yy, a = 1) => { x.globalAlpha = a; x.beginPath(); x.moveTo(cx - rx * 1.2, cy - ry * yy); x.quadraticCurveTo(cx - rx * 0.3, cy - ry * (yy + 0.32), cx + rx * 0.1, cy - ry * (yy + 0.1)); x.quadraticCurveTo(cx + rx * 0.7, cy - ry * (yy + 0.2), cx + rx * 1.2, cy - ry * (yy - 0.05)); x.lineTo(cx + rx * 1.2, cy - ry * 1.3); x.lineTo(cx - rx * 1.2, cy - ry * 1.3); x.fill(); x.globalAlpha = 1; };
  if (hs === 'short') cap(0.42); else if (hs === 'buzz') cap(0.5, 0.45); else if (hs === 'flat') x.fillRect(cx - rx * 1.2, cy - ry * 1.3, rx * 2.4, ry * 0.82);
  else if (hs === 'afro' || hs === 'curly') { x.beginPath(); x.ellipse(cx, cy - ry * 0.95, rx * 1.15, ry * 0.5, 0, 0, 7); x.fill(); }
  else if (hs === 'cap') { x.fillStyle = L.capColor || PAL.tomato; x.fillRect(cx - rx * 1.2, cy - ry * 1.3, rx * 2.4, ry * 0.9); }
  if (L.headband) { x.fillStyle = '#fff'; x.fillRect(cx - rx * 1.2, cy - ry * 0.58, rx * 2.4, ry * 0.2); }
  x.restore();
  x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, 7); x.stroke();
  if (hs === 'flat') { x.fillStyle = hair; x.beginPath(); x.roundRect(cx - rx * 0.86, cy - ry * 1.22, rx * 1.72, ry * 0.5, S * 0.03); x.fill(); x.stroke(); }
  if (hs === 'cap' && !L.noBrim) { x.fillStyle = L.capColor || PAL.tomato; x.beginPath(); x.roundRect(cx - rx * 0.2, cy - ry * 0.62, rx * 1.55, ry * 0.2, S * 0.03); x.fill(); x.stroke(); }
  // nose
  x.lineWidth = lw * 0.8; x.strokeStyle = shade(skin, 0.6); x.beginPath(); x.arc(cx, cy + ry * 0.26, rx * 0.09, 0.15, Math.PI - 0.15); x.stroke();
  x.restore();
}

function ensureFaces(def) {
  if (def._faces) return;
  def._faces = {}; def._tex = {};
  for (const ex of EXPRS) {
    const s = canvasTex(256, 256); drawFaceTex(s.x, 256, def, ex);
    def._faces[ex] = s.c; def._tex[ex] = s.t;
  }
}
function redrawFaces(def) {
  if (!def._faces) return;
  for (const ex of EXPRS) { drawFaceTex(def._faces[ex].getContext('2d'), 256, def, ex); def._tex[ex].needsUpdate = true; }
}
/** Loads faces/<id>.png only for players who opted in with look.usePhoto. */
export function loadPhotos(def) {
  if (!(def.look && def.look.usePhoto)) return Promise.resolve(false);
  const base = def.photo || `faces/${def.id}.png`;
  return new Promise((done) => {
    const im = new Image();
    im.onload = () => {
      def._img = { neutral: im }; redrawFaces(def); done(true);
      for (const ex of ['happy', 'shock', 'sad']) {
        const src = (def.photos && def.photos[ex]) || base.replace(/(\.\w+)$/, `_${ex}$1`);
        const e = new Image(); e.onload = () => { def._img[ex] = e; redrawFaces(def); }; e.onerror = () => {}; e.src = src;
      }
    };
    im.onerror = () => done(false);
    im.src = base;
  });
}
/** 2D avatar canvas for menus and cards. */
export function avatar(def, size = 96, ex = 'neutral') {
  const c = document.createElement('canvas'); c.width = c.height = size * 2; c.style.width = c.style.height = size + 'px';
  c.dataset.face = def.id; c.dataset.ex = ex; c.className = 'avatar';
  drawPortrait(c.getContext('2d'), size * 2, def, ex);
  return c;
}

// ---------- shared geometry
const GEO = {};
const seg = (r, L, rs = 10) => { const g = new THREE.CapsuleGeometry(r, L, 4, rs); g.translate(0, -L / 2, 0); return g; };
function geo() {
  if (GEO.head) return GEO;
  GEO.head = new THREE.SphereGeometry(0.4, 32, 22);
  GEO.face = new THREE.SphereGeometry(0.4035, 32, 22, Math.PI / 2 - 1.3, 2.6, 0.38, 2.25);
  GEO.ear = new THREE.SphereGeometry(0.09, 12, 10);
  GEO.nose = new THREE.SphereGeometry(0.058, 12, 10);
  GEO.neck = new THREE.CylinderGeometry(0.085, 0.1, 0.16, 12);
  GEO.thigh = seg(0.092, 0.26); GEO.shin = seg(0.074, 0.24); GEO.uarm = seg(0.066, 0.26); GEO.farm = seg(0.058, 0.24);
  GEO.sleeve = new THREE.CylinderGeometry(0.118, 0.13, 0.25, 14); GEO.sleeve.translate(0, -0.11, 0);
  GEO.sock = new THREE.CylinderGeometry(0.08, 0.078, 0.11, 12);
  GEO.hand = new THREE.SphereGeometry(0.082, 12, 10);
  GEO.shoe = new THREE.SphereGeometry(0.1, 14, 10); GEO.shoe.scale(0.98, 0.64, 1.8);
  GEO.sole = new THREE.CylinderGeometry(0.1, 0.1, 0.035, 14); GEO.sole.scale(0.98, 1, 1.8);
  GEO.pelvis = new THREE.SphereGeometry(0.27, 18, 12); GEO.pelvis.scale(1, 0.62, 0.74);
  const pts = [[0.19, 0], [0.262, 0.05], [0.288, 0.26], [0.292, 0.42], [0.252, 0.52], [0.14, 0.59], [0.001, 0.605]].map(([r, y]) => new THREE.Vector2(r, y));
  GEO.torso = new THREE.LatheGeometry(pts, 22, Math.PI / 2, Math.PI * 2); GEO.torso.scale(1, 1, 0.7); GEO.torso.computeVertexNormals();
  GEO.shadow = new THREE.CircleGeometry(0.42, 20); GEO.shadow.rotateX(-Math.PI / 2);
  GEO.hairTop = new THREE.SphereGeometry(0.425, 28, 14, 0, Math.PI * 2, 0, 1.12);
  GEO.hairBack = new THREE.SphereGeometry(0.418, 22, 14, Math.PI + 0.3, Math.PI - 0.6, 0.35, 1.5);
  GEO.quiff = new THREE.SphereGeometry(0.17, 14, 10); GEO.quiff.scale(1.7, 0.7, 1.05);
  GEO.flat = new THREE.CylinderGeometry(0.34, 0.39, 0.26, 22);
  GEO.afro = new THREE.SphereGeometry(0.5, 22, 16);
  GEO.curl = new THREE.SphereGeometry(0.2, 12, 10);
  GEO.brim = new THREE.CylinderGeometry(0.31, 0.31, 0.035, 18, 1, false, -Math.PI / 2, Math.PI);
  GEO.band = new THREE.TorusGeometry(0.405, 0.04, 8, 28);
  GEO.ring = new THREE.RingGeometry(0.56, 0.7, 36); GEO.ring.rotateX(-Math.PI / 2);
  return GEO;
}
const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.16, depthWrite: false });

// jersey: one wrapped texture with side panels, trim and the number front and back
const jerseyCache = {};
function jerseyMat(color, number, trim = '#ffffff') {
  const k = color + '|' + number + '|' + trim; if (jerseyCache[k]) return jerseyCache[k];
  const s = canvasTex(512, 256), x = s.x;
  x.fillStyle = color; x.fillRect(0, 0, 512, 256);
  for (const u of [0, 256, 512]) { x.fillStyle = shade(color, 0.62); x.fillRect(u - 34, 0, 68, 256); x.fillStyle = trim; x.fillRect(u - 40, 0, 7, 256); x.fillRect(u + 33, 0, 7, 256); }
  x.fillStyle = trim; x.fillRect(0, 0, 512, 16); x.fillRect(0, 236, 512, 6);
  if (number !== undefined && number !== null && number !== '') {
    x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineJoin = 'round';
    const put = (cx, cy, size) => { x.save(); x.translate(cx, cy); x.scale(0.7, 1); x.font = `${size}px ${DISPLAY}`; x.lineWidth = size * 0.14; x.strokeStyle = shade(color, 0.45); x.strokeText(String(number), 0, 0); x.fillStyle = trim; x.fillText(String(number), 0, 0); x.restore(); };
    put(384, 128, 104); put(128, 122, 132);
  }
  s.t.needsUpdate = true;
  return (jerseyCache[k] = toon('#ffffff', { map: s.t }));
}
export function labelSprite(text, color = PAL.ink, bg = PAL.paper) {
  const c = document.createElement('canvas'), x = c.getContext('2d'), F = `34px ${DISPLAY}`;
  x.font = F; const w = Math.ceil(x.measureText(text).width) + 40; c.width = w; c.height = 64;
  x.fillStyle = PAL.ink; x.beginPath(); x.roundRect(0, 0, w, 64, 14); x.fill();
  x.fillStyle = bg; x.beginPath(); x.roundRect(5, 5, w - 10, 54, 10); x.fill();
  x.font = F; x.fillStyle = color; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, w / 2, 35);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true }));
  s.scale.set(w / 64 * 0.36, 0.36, 1); s.renderOrder = 10;
  return s;
}

const OL = 0.02;
/** A toon player: oversized head on a small jointed body. Faces +Z. */
export class Bobble {
  constructor(def, opt = {}) {
    ensureFaces(def);
    this.def = def;
    const g = geo(), L = def.look || {};
    const jersey = opt.jersey || PAL.sea, skin = L.skin || '#e0b090', trim = opt.trim || '#ffffff';
    const skinM = toon(skin), shortsM = toon(shade(jersey, 0.72)), shoeM = toon(opt.shoe || PAL.paper), soleM = toon(PAL.ink), sockM = toon('#ffffff');
    this.group = new THREE.Group();
    this.shadow = new THREE.Mesh(g.shadow, shadowMat); this.shadow.position.y = 0.025; this.group.add(this.shadow);
    this.tilt = new THREE.Group(); this.group.add(this.tilt);
    this.body = new THREE.Group(); this.tilt.add(this.body);
    const ht = L.height || 1, build = L.build || 1;
    this.ht = ht; this.build = build;
    this.body.scale.set(ht * build, ht, ht * build);
    this.legs = [-1, 1].map((s) => {
      const hip = new THREE.Group(); hip.position.set(s * 0.125, 0.64, 0);
      hip.add(part(g.thigh, skinM, OL)); hip.add(part(g.sleeve, shortsM, OL));
      const knee = new THREE.Group(); knee.position.y = -0.28; hip.add(knee);
      knee.add(part(g.shin, skinM, OL));
      const sock = part(g.sock, sockM); sock.position.y = -0.2; knee.add(sock);
      const shoe = part(g.shoe, shoeM, OL); shoe.position.set(0, -0.29, 0.065); knee.add(shoe);
      const sole = part(g.sole, soleM); sole.position.set(0, -0.343, 0.065); knee.add(sole);
      hip.knee = knee; this.body.add(hip); return hip;
    });
    const pelvis = part(g.pelvis, shortsM, OL); pelvis.position.y = 0.69; this.body.add(pelvis);
    this.upper = new THREE.Group(); this.upper.position.y = 0.74; this.body.add(this.upper);
    this.torso = part(g.torso, jerseyMat(jersey, opt.number, trim), OL); this.upper.add(this.torso);
    this.arms = [-1, 1].map((s) => {
      const sh = new THREE.Group(); sh.position.set(s * 0.305, 0.49, 0);
      sh.add(part(g.uarm, skinM, OL));
      const el = new THREE.Group(); el.position.y = -0.27; sh.add(el);
      el.add(part(g.farm, skinM, OL));
      const hand = part(g.hand, skinM, OL); hand.position.y = -0.3; el.add(hand);
      sh.elbow = el; sh.side = s; this.upper.add(sh); return sh;
    });
    // head: stays big whatever the body height
    this.neck = new THREE.Group(); this.neck.position.y = 0.56; this.upper.add(this.neck);
    const nk = part(g.neck, toon(shade(skin, 0.88))); nk.position.y = 0.03; this.neck.add(nk);
    this.head = new THREE.Group(); this.head.position.y = 0.36; this.neck.add(this.head);
    const hs = (opt.headScale || 1) / Math.pow(ht, 0.7);
    this.neck.scale.set(hs / build, hs, hs / build);
    const skull = part(g.head, skinM, 0.024); skull.scale.set(1, 0.95, 0.97); this.head.add(skull);
    this.faceMat = toon('#ffffff', { map: def._tex.neutral });
    const fm = new THREE.Mesh(g.face, this.faceMat); fm.rotation.x = -0.2; fm.scale.set(1, 0.95, 0.97); this.head.add(fm);
    for (const s of [-1, 1]) { const e = part(g.ear, skinM, OL); e.position.set(s * 0.385, -0.03, 0); e.scale.set(0.55, 1, 0.8); this.head.add(e); }
    const nose = part(g.nose, toon(shade(skin, 0.9))); nose.position.set(0, -0.085, 0.385); nose.scale.set(1, 0.85, 0.9); this.head.add(nose);
    this.addHair(L);
    if (L.headband) { const b = part(g.band, '#ffffff'); b.rotation.x = Math.PI / 2 - 0.12; b.position.y = 0.15; this.head.add(b); }
    this.ring = null;
    this.t = Math.random() * 10; this.phase = Math.random() * 6; this.seed = Math.random() * 6;
    this.face = 0; this.faceTarget = 0;
    this.armsUp = 0; this.armsUpT = 0; this.fall = 0; this.fallT = 0; this.laugh = 0; this.y = 0; this.wave = 0;
    this.guard = 0; this.guardAmt = 0; this.drib = -1; this.dribAmt = 0; this.air = 0; this.squash = 0; this.prevY = 0; this.lean = 0;
    this.expr = 'neutral'; this.exprT = 0; this.moveAmt = 0;
  }
  addHair(L) {
    const g = geo(), hs = L.hairStyle || 'short', hm = toon(L.hair || '#2a1c14'), H = this.head;
    const add = (ge, m, o = OL) => { const p = part(ge, m, o); H.add(p); return p; };
    if (hs === 'short') { add(g.hairTop, hm).rotation.x = -0.42; add(g.hairBack, hm); const q = add(g.quiff, hm); q.position.set(0.03, 0.33, 0.17); q.rotation.z = -0.08; }
    else if (hs === 'buzz') { const m = toon(shade(L.hair || '#2a1c14', 1.5)); add(g.hairTop, m, 0).rotation.x = -0.45; add(g.hairBack, m, 0); }
    else if (hs === 'flat') { const m = add(g.flat, hm); m.position.y = 0.36; add(g.hairTop, hm).rotation.x = -0.5; add(g.hairBack, hm); }
    else if (hs === 'afro') { add(g.afro, hm, 0.026).position.set(0, 0.17, -0.1); }
    else if (hs === 'curly') { add(g.hairTop, hm).rotation.x = -0.4; add(g.hairBack, hm); for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2, c = add(g.curl, hm); c.position.set(Math.sin(a) * 0.24, 0.33 + (i % 2) * 0.04, Math.cos(a) * 0.22 - 0.02); } add(g.curl, hm).position.set(0, 0.42, 0); }
    else if (hs === 'cap') {
      const cm = toon(L.capColor || PAL.tomato);
      const m = add(g.hairTop, cm); m.rotation.x = -0.3; m.scale.setScalar(1.035);
      if (!L.noBrim) { const b = add(g.brim, cm); b.position.set(0, 0.21, 0.3); b.rotation.set(0.12, Math.PI / 2, 0); }
      add(g.hairBack, hm);
    }
  }
  setRing(color) {
    if (!color) { if (this.ring) this.ring.visible = false; return; }
    if (!this.ring) { this.ring = new THREE.Mesh(geo().ring, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95, depthWrite: false })); this.ring.position.y = 0.035; this.group.add(this.ring); }
    this.ring.material.color.set(color); this.ring.visible = true;
  }
  setExpr(ex, dur = 1.5) { this.expr = ex; this.exprT = dur; this.faceMat.map = this.def._tex[ex] || this.def._tex.neutral; }
  /** speed in m/s drives the run cycle */
  update(dt, speed = 0) {
    this.t += dt;
    const mv = clamp(speed / 4.6, 0, 1.4);
    const m = (this.moveAmt = damp(this.moveAmt, mv, 10, dt));
    this.phase += dt * (5.5 + speed * 1.8) * (mv > 0.05 ? 1 : 0);
    if (this.exprT > 0) { this.exprT -= dt; if (this.exprT <= 0) this.setExpr('neutral', 0); }
    this.face = angDamp(this.face, this.faceTarget, 12, dt);
    this.group.rotation.y = this.face;
    const au = (this.armsUp = damp(this.armsUp, this.armsUpT, 16, dt));
    this.fall = damp(this.fall, this.fallT, 10, dt);
    const gd = (this.guardAmt = damp(this.guardAmt, this.guard * (1 - au), 9, dt));
    const dr = (this.dribAmt = damp(this.dribAmt, this.drib >= 0 && au < 0.3 ? 1 : 0, 14, dt));
    const air = (this.air = damp(this.air, this.y > 0.06 ? 1 : 0, 18, dt));
    if (this.prevY > 0.08 && this.y <= 0.02) this.squash = 1;
    this.prevY = this.y; this.squash = damp(this.squash, 0, 9, dt);
    const s = Math.sin(this.phase), c = Math.cos(this.phase), t = this.t, lg = this.laugh;
    // legs: thigh swing, knee folds on the recovery, crouch in a guard stance, tuck in the air
    this.legs.forEach((hip, i) => {
      const sg = i ? -1 : 1;
      hip.rotation.x = sg * s * 0.95 * m - gd * 0.55 - air * (i ? 0.75 : 0.1) * (1 - gd);
      hip.rotation.z = (i ? 1 : -1) * gd * 0.3;
      hip.knee.rotation.x = Math.max(0, sg * c) * 1.35 * m + 0.12 * m + gd * 1.0 + air * (i ? 1.2 : 0.35);
    });
    // arms
    this.arms.forEach((sh, i) => {
      const sg = i ? 1 : -1;
      let rx = sg * s * 0.85 * m, rz = sh.side * (0.16 + gd * 0.95 + lg * 0.25), el = -(0.3 + 0.85 * m);
      if (i === 1 && dr > 0) { const b = Math.max(0, this.drib); rx = lerp3(rx, -0.55 - b * 0.35, dr); el = lerp3(el, -0.35 - b * 0.75, dr); rz = lerp3(rz, sh.side * 0.3, dr); }
      rx = lerp3(rx, -2.55, au); el = lerp3(el, -0.35 + Math.sin(t * 20) * 0.03, au); rz = lerp3(rz, sh.side * 0.1, au);
      if (i === 0 && this.wave) { rx = -2.7; rz = -0.4 + Math.sin(t * 9) * 0.35; el = -0.3; }
      if (gd > 0.05) rx += Math.sin(t * 7 + i * 2) * 0.12 * gd;
      sh.rotation.x = rx; sh.rotation.z = rz; sh.elbow.rotation.x = el;
    });
    const lean = (this.lean = damp(this.lean, m * 0.24 + gd * 0.28, 8, dt));
    this.upper.rotation.x = lean - lg * 0.12 - au * 0.06;
    this.upper.rotation.z = Math.sin(t * 0.9 + this.seed) * 0.025 * (1 - m) + s * 0.05 * m;
    this.upper.scale.y = 1 + Math.sin(t * 2.1 + this.seed) * 0.012;
    const bounce = Math.abs(s) * 0.07 * m + lg * Math.abs(Math.sin(t * 14)) * 0.06;
    const sq = this.squash * 0.16, st = air * 0.05;
    this.body.scale.set(this.ht * this.build * (1 + sq * 0.6 - st * 0.5), this.ht * (1 - sq + st), this.ht * this.build * (1 + sq * 0.6 - st * 0.5));
    this.body.position.y = this.y + bounce - gd * 0.13 * this.ht;
    this.tilt.rotation.x = -this.fall * 1.45; this.tilt.position.y = this.fall * 0.28;
    // head: counter the lean, wobble a little, throw back on a laugh
    const wob = 0.4 + m * 1.6;
    this.head.rotation.z = Math.sin(t * 5.3 + this.phase) * 0.05 * wob + lg * Math.sin(t * 24) * 0.12;
    this.head.rotation.x = -lean * 0.75 + Math.sin(t * 3.9 + this.seed) * 0.035 * wob - lg * 0.28 + this.fall * 0.3 - au * 0.12;
    this.shadow.scale.setScalar(1 - clamp(this.y, 0, 1.5) * 0.35);
    if (this.ring && this.ring.visible) this.ring.rotation.y += dt * 2;
  }
}
const lerp3 = (a, b, p) => a + (b - a) * p;
