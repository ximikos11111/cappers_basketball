import * as THREE from 'three';
import { clamp, damp, angDamp, shade } from './util.js';

// ---------- face textures (drawn placeholder, or the friend's photo when one exists)
const EXPRS = ['neutral', 'happy', 'shock', 'sad'];

function drawFace(ctx, S, def, ex, withHair) {
  const L = def.look || {}, skin = L.skin || '#e0b090', hair = L.hair || '#222';
  const cx = S / 2, cy = S / 2, r = S * (withHair ? 0.42 : 0.40);
  ctx.clearRect(0, 0, S, S);
  if (withHair) { ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, S / 2, 0, 7); ctx.clip(); }
  ctx.fillStyle = skin; ctx.fillRect(0, 0, S, S);
  const img = def._img && (def._img[ex] || def._img.neutral);
  if (img) {
    // photo: cover-fit, feathered into the skin colour so it wraps the head cleanly
    const t = document.createElement('canvas'); t.width = t.height = S; const c = t.getContext('2d');
    const sc = Math.max(S / img.width, S / img.height) * (withHair ? 1 : 1.06);
    c.drawImage(img, cx - img.width * sc / 2, cy - img.height * sc / 2, img.width * sc, img.height * sc);
    if (!withHair) {
      c.globalCompositeOperation = 'destination-in';
      const g = c.createRadialGradient(cx, cy, S * 0.34, cx, cy, S * 0.49);
      g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = g; c.fillRect(0, 0, S, S);
    }
    ctx.drawImage(t, 0, 0);
    if (withHair) ctx.restore();
    return;
  }
  if (withHair) {
    ctx.fillStyle = hair;
    const hs = L.hairStyle || 'short';
    if (hs === 'short') { ctx.beginPath(); ctx.ellipse(cx, cy - r * 0.9, r * 1.2, r * 0.6, 0, 0, 7); ctx.fill(); }
    if (hs === 'flat') ctx.fillRect(0, 0, S, cy - r * 0.62);
    if (hs === 'afro') { ctx.beginPath(); ctx.ellipse(cx, cy - r * 0.95, r * 1.4, r * 0.8, 0, 0, 7); ctx.fill(); }
    if (hs === 'cap') { ctx.fillStyle = shade(hair === '#222222' ? '#2a4a7a' : hair, 1); ctx.beginPath(); ctx.ellipse(cx, cy - r * 0.85, r * 1.25, r * 0.62, 0, 0, 7); ctx.fill(); }
    if (L.headband) { ctx.fillStyle = '#fff'; ctx.fillRect(0, cy - r * 0.62, S, r * 0.2); }
  }
  if (L.beard) { ctx.fillStyle = hair; ctx.beginPath(); ctx.ellipse(cx, cy + r * 0.98, r * 1.0, r * 0.62, 0, 0, 7); ctx.fill(); }
  // cheeks
  ctx.fillStyle = 'rgba(255,90,90,.13)';
  for (const s of [-1, 1]) { ctx.beginPath(); ctx.arc(cx + s * r * 0.62, cy + r * 0.28, r * 0.2, 0, 7); ctx.fill(); }
  const ey = cy - r * 0.05, ex0 = r * 0.38, ink = '#1b1410';
  for (const sgn of [-1, 1]) {
    const x = cx + sgn * ex0;
    ctx.strokeStyle = ink; ctx.lineCap = 'round';
    if (ex === 'happy') { ctx.lineWidth = r * 0.09; ctx.beginPath(); ctx.arc(x, ey + r * 0.06, r * 0.16, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke(); }
    else {
      const er = ex === 'shock' ? r * 0.25 : r * 0.18;
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.ellipse(x, ey, er * 0.9, er, 0, 0, 7); ctx.fill();
      ctx.fillStyle = ink; ctx.beginPath(); ctx.arc(x + (ex === 'shock' ? 0 : r * 0.03), ey + (ex === 'sad' ? r * 0.05 : 0), ex === 'shock' ? r * 0.07 : r * 0.095, 0, 7); ctx.fill();
      ctx.lineWidth = r * 0.08; ctx.beginPath();
      if (ex === 'sad') { ctx.moveTo(x - sgn * r * 0.2, ey - r * 0.38); ctx.lineTo(x + sgn * r * 0.14, ey - r * 0.27); }
      else if (ex === 'shock') { ctx.moveTo(x - r * 0.16, ey - r * 0.44); ctx.lineTo(x + r * 0.16, ey - r * 0.44); }
      else { ctx.moveTo(x - sgn * r * 0.18, ey - r * 0.28); ctx.lineTo(x + sgn * r * 0.16, ey - r * 0.35); }
      ctx.stroke();
    }
  }
  if (L.glasses) {
    ctx.strokeStyle = '#161616'; ctx.lineWidth = r * 0.07;
    for (const sgn of [-1, 1]) { ctx.beginPath(); ctx.arc(cx + sgn * ex0, ey, r * 0.28, 0, 7); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(cx - r * 0.1, ey); ctx.lineTo(cx + r * 0.1, ey); ctx.stroke();
  }
  // nose
  ctx.strokeStyle = 'rgba(0,0,0,.25)'; ctx.lineWidth = r * 0.06; ctx.beginPath(); ctx.arc(cx, cy + r * 0.18, r * 0.09, 0.2, Math.PI - 0.2); ctx.stroke();
  const my = cy + r * 0.5; ctx.strokeStyle = ink; ctx.lineWidth = r * 0.08; ctx.lineCap = 'round';
  if (ex === 'happy') { ctx.fillStyle = '#3a0d12'; ctx.beginPath(); ctx.arc(cx, my - r * 0.1, r * 0.36, 0, Math.PI); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#fff'; ctx.fillRect(cx - r * 0.27, my - r * 0.1, r * 0.54, r * 0.09); }
  else if (ex === 'shock') { ctx.fillStyle = '#3a0d12'; ctx.beginPath(); ctx.ellipse(cx, my + r * 0.02, r * 0.17, r * 0.25, 0, 0, 7); ctx.fill(); }
  else if (ex === 'sad') { ctx.beginPath(); ctx.arc(cx, my + r * 0.24, r * 0.27, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke(); }
  else { ctx.beginPath(); ctx.arc(cx, my - r * 0.18, r * 0.27, Math.PI * 0.2, Math.PI * 0.8); ctx.stroke(); }
  if (withHair) ctx.restore();
}

function ensureFaces(def) {
  if (def._faces) return;
  def._faces = {}; def._tex = {};
  for (const ex of EXPRS) {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    drawFace(c.getContext('2d'), 256, def, ex, false);
    def._faces[ex] = c;
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; def._tex[ex] = t;
  }
}
function redrawFaces(def) {
  if (!def._faces) return;
  for (const ex of EXPRS) { drawFace(def._faces[ex].getContext('2d'), 256, def, ex, false); def._tex[ex].needsUpdate = true; }
  document.querySelectorAll(`canvas[data-face="${def.id}"]`).forEach((c) => drawFace(c.getContext('2d'), c.width, def, c.dataset.ex || 'neutral', true));
}
/** Try to load faces/<id>.png (or def.photo) plus optional expression photos. Falls back silently. */
export function loadPhotos(def) {
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
  drawFace(c.getContext('2d'), size * 2, def, ex, true);
  return c;
}

// ---------- shared geometry
const GEO = {};
function geo() {
  if (GEO.head) return GEO;
  GEO.head = new THREE.SphereGeometry(0.4, 28, 20);
  GEO.face = new THREE.SphereGeometry(0.406, 28, 20, Math.PI / 2 - 1.3, 2.6, 0.38, 2.25);
  GEO.limb = new THREE.CylinderGeometry(0.07, 0.06, 0.55, 8); GEO.limb.translate(0, -0.275, 0);
  GEO.arm = new THREE.CylinderGeometry(0.06, 0.05, 0.5, 8); GEO.arm.translate(0, -0.25, 0);
  GEO.hand = new THREE.SphereGeometry(0.075, 8, 6);
  GEO.shoe = new THREE.BoxGeometry(0.16, 0.1, 0.3);
  GEO.torso = new THREE.CylinderGeometry(0.27, 0.22, 0.52, 14);
  GEO.shorts = new THREE.CylinderGeometry(0.235, 0.26, 0.26, 14);
  GEO.shadow = new THREE.CircleGeometry(0.5, 20); GEO.shadow.rotateX(-Math.PI / 2);
  GEO.hairShort = new THREE.SphereGeometry(0.42, 24, 12, 0, Math.PI * 2, 0, 1.05);
  GEO.hairBack = new THREE.SphereGeometry(0.415, 20, 14, Math.PI + 0.25, Math.PI - 0.5, 0.3, 1.6);
  GEO.flat = new THREE.CylinderGeometry(0.36, 0.4, 0.22, 20);
  GEO.afro = new THREE.SphereGeometry(0.5, 20, 14);
  GEO.brim = new THREE.CylinderGeometry(0.3, 0.3, 0.03, 16, 1, false, -Math.PI / 2, Math.PI);
  GEO.band = new THREE.TorusGeometry(0.4, 0.035, 8, 28);
  GEO.ring = new THREE.RingGeometry(0.55, 0.68, 32); GEO.ring.rotateX(-Math.PI / 2);
  GEO.num = new THREE.PlaneGeometry(0.3, 0.3);
  return GEO;
}
const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false });
const numCache = {};
function numTex(n, col) {
  const k = n + col; if (numCache[k]) return numCache[k];
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  x.font = '900 96px system-ui, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = col; x.fillText(String(n), 64, 70);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return (numCache[k] = t);
}
export function labelSprite(text, color = '#fff', bg = 'rgba(13,15,26,.85)') {
  const c = document.createElement('canvas'); const x = c.getContext('2d');
  x.font = '800 44px system-ui, sans-serif'; const w = Math.ceil(x.measureText(text).width) + 44; c.width = w; c.height = 64;
  x.font = '800 44px system-ui, sans-serif'; x.fillStyle = bg; x.beginPath(); x.roundRect(0, 0, w, 64, 32); x.fill();
  x.fillStyle = color; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, w / 2, 35);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true }));
  s.scale.set(w / 64 * 0.34, 0.34, 1); s.renderOrder = 10;
  return s;
}

/** A bobblehead: big head with a face patch on a small procedural body. Faces +Z. */
export class Bobble {
  constructor(def, opt = {}) {
    ensureFaces(def);
    this.def = def;
    const g = geo(), L = def.look || {};
    const jersey = opt.jersey || '#3a4060', dark = shade(jersey, 0.45), skin = L.skin || '#e0b090';
    const M = (c) => new THREE.MeshLambertMaterial({ color: c });
    const skinM = M(skin), jerM = M(jersey), darkM = M(dark), shoeM = M('#f4f4f4');
    this.group = new THREE.Group();
    this.shadow = new THREE.Mesh(g.shadow, shadowMat); this.shadow.position.y = 0.02; this.group.add(this.shadow);
    this.tilt = new THREE.Group(); this.group.add(this.tilt); // falls over
    this.body = new THREE.Group(); this.tilt.add(this.body);
    const ht = L.height || 1, build = L.build || 1;
    this.ht = ht;
    this.body.scale.set(ht * build, ht, ht * build);
    this.legs = [-1, 1].map((s) => {
      const p = new THREE.Group(); p.position.set(s * 0.12, 0.6, 0);
      p.add(new THREE.Mesh(g.limb, skinM));
      const sh = new THREE.Mesh(g.shoe, shoeM); sh.position.set(0, -0.55, 0.06); p.add(sh);
      this.body.add(p); return p;
    });
    const shorts = new THREE.Mesh(g.shorts, darkM); shorts.position.y = 0.66; shorts.scale.z = 0.72; this.body.add(shorts);
    const torso = new THREE.Mesh(g.torso, jerM); torso.position.y = 1.03; torso.scale.z = 0.66; this.body.add(torso);
    if (opt.number !== undefined && opt.number !== null) {
      const nm = new THREE.MeshBasicMaterial({ map: numTex(opt.number, '#ffffff'), transparent: true });
      const f = new THREE.Mesh(g.num, nm); f.position.set(0, 1.05, 0.172); this.body.add(f);
      const b = new THREE.Mesh(g.num, nm); b.position.set(0, 1.05, -0.172); b.rotation.y = Math.PI; this.body.add(b);
    }
    this.arms = [-1, 1].map((s) => {
      const p = new THREE.Group(); p.position.set(s * 0.31, 1.24, 0); p.rotation.z = s * 0.14;
      p.add(new THREE.Mesh(g.arm, skinM));
      const h = new THREE.Mesh(g.hand, skinM); h.position.y = -0.52; p.add(h);
      this.body.add(p); return p;
    });
    // head: stays big whatever the body height
    this.neck = new THREE.Group(); this.neck.position.y = 1.3; this.body.add(this.neck);
    this.head = new THREE.Group(); this.head.position.y = 0.36; this.neck.add(this.head);
    const hs = (opt.headScale || 1) / Math.pow(ht, 0.7);
    this.neck.scale.set(hs / build, hs, hs / build);
    this.head.add(new THREE.Mesh(g.head, skinM));
    this.faceMat = new THREE.MeshLambertMaterial({ map: def._tex.neutral });
    const fm = new THREE.Mesh(g.face, this.faceMat); fm.rotation.x = -0.22; this.head.add(fm);
    if (!def._img || L.hairStyle) this.addHair(L, M, !!def._img);
    if (L.headband) { const b = new THREE.Mesh(g.band, M('#ffffff')); b.rotation.x = Math.PI / 2; b.position.y = 0.16; b.scale.setScalar(0.97); this.head.add(b); }
    this.ring = null;
    this.t = Math.random() * 10; this.phase = Math.random() * 6;
    this.face = 0; this.faceTarget = 0;
    this.armsUp = 0; this.armsUpT = 0; this.fall = 0; this.fallT = 0; this.laugh = 0; this.y = 0; this.wave = 0;
    this.expr = 'neutral'; this.exprT = 0; this.moveAmt = 0;
  }
  addHair(L, M, photo) {
    const g = geo(), hs = L.hairStyle || 'short', hm = M(L.hair || '#222');
    if (hs === 'short') { const m = new THREE.Mesh(g.hairShort, hm); m.rotation.x = photo ? -1.0 : -0.35; this.head.add(m); this.head.add(new THREE.Mesh(g.hairBack, hm)); }
    else if (hs === 'flat') { const m = new THREE.Mesh(g.flat, hm); m.position.y = 0.33; this.head.add(m); this.head.add(new THREE.Mesh(g.hairBack, hm)); }
    else if (hs === 'afro') { const m = new THREE.Mesh(g.afro, hm); m.position.set(0, photo ? 0.1 : 0.2, photo ? -0.3 : -0.1); this.head.add(m); }
    else if (hs === 'cap') {
      const cm = M(L.capColor || '#2a4a7a');
      const m = new THREE.Mesh(g.hairShort, cm); m.rotation.x = photo ? -0.75 : -0.25; m.scale.setScalar(1.03); this.head.add(m);
      if (!L.noBrim) { const b = new THREE.Mesh(g.brim, cm); b.position.set(0, 0.2, 0.3); b.rotation.y = Math.PI / 2; this.head.add(b); }
      if (L.noBrim) this.head.add(new THREE.Mesh(g.hairBack, hm));
    }
  }
  setRing(color) {
    if (!color) { if (this.ring) this.ring.visible = false; return; }
    if (!this.ring) { this.ring = new THREE.Mesh(geo().ring, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false })); this.ring.position.y = 0.03; this.group.add(this.ring); }
    this.ring.material.color.set(color); this.ring.visible = true;
  }
  setExpr(ex, dur = 1.5) { this.expr = ex; this.exprT = dur; this.faceMat.map = this.def._tex[ex] || this.def._tex.neutral; }
  /** speed in m/s, used for the run cycle */
  update(dt, speed = 0) {
    this.t += dt;
    const mv = clamp(speed / 4, 0, 1.4);
    this.moveAmt = damp(this.moveAmt, mv, 10, dt);
    this.phase += dt * (4 + speed * 2.2) * (mv > 0.05 ? 1 : 0);
    if (this.exprT > 0) { this.exprT -= dt; if (this.exprT <= 0) this.setExpr('neutral', 0); }
    this.face = angDamp(this.face, this.faceTarget, 12, dt);
    this.group.rotation.y = this.face;
    this.armsUp = damp(this.armsUp, this.armsUpT, 14, dt);
    this.fall = damp(this.fall, this.fallT, 10, dt);
    const sw = Math.sin(this.phase) * 0.95 * this.moveAmt;
    this.legs[0].rotation.x = sw; this.legs[1].rotation.x = -sw;
    const au = this.armsUp;
    this.arms[0].rotation.x = -sw * 0.8 * (1 - au) - au * 2.9 + (this.wave ? Math.sin(this.t * 9) * 0.3 - 2.6 : 0);
    this.arms[1].rotation.x = sw * 0.8 * (1 - au) - au * 2.9;
    const bounce = Math.abs(Math.sin(this.phase)) * 0.06 * this.moveAmt + this.laugh * Math.abs(Math.sin(this.t * 14)) * 0.07;
    this.body.position.y = this.y + bounce;
    this.tilt.rotation.x = -this.fall * 1.45; this.tilt.position.y = this.fall * 0.25;
    // bobble
    const wob = 1 + this.moveAmt * 1.6;
    this.head.rotation.z = Math.sin(this.t * 5.3 + this.phase) * 0.07 * wob + this.laugh * Math.sin(this.t * 24) * 0.13;
    this.head.rotation.x = Math.sin(this.t * 3.9) * 0.05 * wob - this.laugh * 0.25 + this.fall * 0.3;
    this.shadow.scale.setScalar(1 - clamp(this.y, 0, 1.5) * 0.3);
    if (this.ring && this.ring.visible) this.ring.rotation.y += dt * 2;
  }
}
