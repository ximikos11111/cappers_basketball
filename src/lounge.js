import * as THREE from 'three';
import { Bobble, labelSprite, avatar } from './character.js';
import { input } from './input.js';
import { sfx } from './audio.js';
import { bubbles, prompt, caption, modal, h, esc, screenOpen, view } from './ui.js';
import { clamp, damp, dist, pick, rand, C, STAT_KEYS, STAT_SHORT, abilityName, abilityDesc, teamRating } from './util.js';

const SPOTS = {
  tv: [[-2.6, -5.4, Math.PI], [1.6, -5.7, Math.PI], [4.2, -5.2, Math.PI]],
  bar: [[-9.3, 0.2, -Math.PI / 2], [-9.3, 2.6, -Math.PI / 2], [-9.3, 4.4, -Math.PI / 2]],
  pool: [[3.3, 1.9, Math.PI / 2], [7.9, 1.9, -Math.PI / 2], [5.6, 3.7, Math.PI]],
  window: [[11.2, -2, Math.PI / 2], [11.2, -0.4, Math.PI / 2]],
  pacer: [[-4, 5.6, 0], [-6, 3.6, 0]],
  table: [[-3, 3.3, Math.PI], [-1.7, 1.9, -Math.PI / 2], [0.2, 3.2, 0], [1.4, 4.6, -Math.PI / 2]],
  trophy: [[11, 3.9, Math.PI / 2], [10.4, 5.6, Math.PI / 2]],
};
const OBST = [ // x0,z0,x1,z1
  [-11.4, -2.6, -10.1, 5.2], // bar
  [4.0, 1.0, 7.2, 2.8], // pool table
  [-3.6, 1.4, -2.4, 2.6], [-0.6, 3.9, 0.6, 5.1], // high tables
];
function canvasTex(w, hh) {
  const c = document.createElement('canvas'); c.width = w; c.height = hh;
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return { c, x: c.getContext('2d'), t };
}
function signMesh(text, w, hgt, color = C.gold, bg = '#141833') {
  const s = canvasTex(512, Math.round(512 * hgt / w));
  s.x.fillStyle = bg; s.x.fillRect(0, 0, s.c.width, s.c.height);
  s.x.fillStyle = color; s.x.textAlign = 'center'; s.x.textBaseline = 'middle';
  let fs = s.c.height * 0.6; s.x.font = `900 italic ${fs}px "Barlow Condensed", Impact, system-ui`;
  while (s.x.measureText(text).width > 480 && fs > 10) { fs -= 4; s.x.font = `900 italic ${fs}px "Barlow Condensed", Impact, system-ui`; }
  s.x.fillText(text, 256, s.c.height / 2 + 2); s.t.needsUpdate = true;
  return new THREE.Mesh(new THREE.PlaneGeometry(w, hgt), new THREE.MeshBasicMaterial({ map: s.t }));
}

export class Lounge {
  constructor(G) {
    this.G = G;
    const sc = (this.scene = new THREE.Scene());
    const hour = new Date().getHours();
    this.night = hour < 6 || G.cheats.night;
    sc.background = new THREE.Color(this.night ? '#05060d' : '#0d0f1a');
    sc.fog = new THREE.Fog(sc.background.getHex(), 22, 46);
    this.camera = new THREE.PerspectiveCamera(46, view.w / view.h, 0.1, 80);
    sc.add(new THREE.HemisphereLight(0xfff0dd, 0x222244, this.night ? 0.6 : 1.8));
    const dl = new THREE.DirectionalLight(0xffffff, this.night ? 0.5 : 1.3); dl.position.set(4, 10, 8); sc.add(dl);
    const M = (c, o) => new THREE.MeshLambertMaterial(Object.assign({ color: c }, o || {}));
    const box = (w, hh, d, mat, x, y, z) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, hh, d), mat); m.position.set(x, y, z); sc.add(m); return m; };

    // floor: carpet with a diamond pattern
    const fl = canvasTex(512, 512);
    fl.x.fillStyle = '#1a1d38'; fl.x.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) {
      fl.x.fillStyle = (i + j) % 2 ? '#22264a' : '#1e2140'; fl.x.save(); fl.x.translate(i * 64 + 32, j * 64 + 32); fl.x.rotate(Math.PI / 4); fl.x.fillRect(-20, -20, 40, 40); fl.x.restore();
      fl.x.fillStyle = 'rgba(255,197,49,.25)'; fl.x.beginPath(); fl.x.arc(i * 64, j * 64, 3, 0, 7); fl.x.fill();
    }
    fl.t.wrapS = fl.t.wrapT = THREE.RepeatWrapping; fl.t.repeat.set(8, 5); fl.t.needsUpdate = true;
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(36, 18), new THREE.MeshLambertMaterial({ map: fl.t })); floor.rotation.x = -Math.PI / 2; floor.position.set(-2, 0, 0); sc.add(floor);
    const wallM = M('#252a52'), trimM = M('#3a2a1c'), woodM = M('#7a4a26'), darkM = M('#11132a');
    box(26, 5, 0.3, wallM, 0, 2.5, -8.15); // back wall
    box(0.3, 5, 16, wallM, 13.15, 2.5, 0); // right wall
    box(0.3, 5, 9.8, wallM, -13.15, 2.5, 3.1); // left wall (below the hidden door)
    box(0.3, 5, 1.2, wallM, -13.15, 2.5, -7.4);
    box(0.3, 2.2, 1.6, wallM, -13.15, 3.9, -6.0); // above hidden door
    box(26, 0.25, 0.4, trimM, 0, 0.12, -7.95);
    // hidden rage-quit room
    box(4, 5, 0.3, darkM, -15, 2.5, -8.15); box(0.3, 5, 4.6, darkM, -17.15, 2.5, -5.9);
    const curtain = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.8), new THREE.MeshLambertMaterial({ color: '#5a1020', transparent: true, opacity: 0.93, side: THREE.DoubleSide }));
    curtain.rotation.y = Math.PI / 2; curtain.position.set(-13.0, 1.4, -5.8); sc.add(curtain);
    const so = signMesh('STAFF ONLY', 1.4, 0.3, '#ff4d5e', '#200a10'); so.rotation.y = Math.PI / 2; so.position.set(-12.95, 3.05, -5.8); sc.add(so);
    // controller stuck in the wall
    const pad = new THREE.Group();
    pad.add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.28, 0.12), M('#2b2b2b')));
    for (const s of [-1, 1]) { const g = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.3, 8), M('#2b2b2b')); g.position.set(s * 0.22, -0.18, 0); pad.add(g); const st = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), M(s < 0 ? '#ff4d5e' : '#19c3b1')); st.position.set(s * 0.12, 0.03, 0.08); pad.add(st); }
    pad.position.set(-16.92, 1.7, -5.9); pad.rotation.set(0.4, Math.PI / 2, 0.5); sc.add(pad);
    for (let i = 0; i < 5; i++) { const cr = new THREE.Mesh(new THREE.PlaneGeometry(0.04, rand(0.4, 0.9)), new THREE.MeshBasicMaterial({ color: 0x000000 })); cr.rotation.y = Math.PI / 2; cr.rotation.x = i * 1.25; cr.position.set(-16.98, 1.7, -5.9); sc.add(cr); }
    const rq = signMesh('RAGE QUIT HALL OF FAME', 2.6, 0.4, '#ff4d5e', '#11132a'); rq.rotation.y = Math.PI / 2; rq.position.set(-16.97, 2.9, -5.9); sc.add(rq);
    const bulb = new THREE.PointLight(0xff4d5e, 6, 7); bulb.position.set(-15, 3, -5.9); sc.add(bulb);

    // bar
    box(1.1, 1.1, 7.6, woodM, -10.75, 0.55, 1.3); box(1.5, 0.1, 7.9, M('#2a1a10'), -10.75, 1.14, 1.3);
    box(0.35, 2.4, 6, M('#2a1a10'), -12.8, 2.2, 1.3);
    const bottleCols = ['#3ddc6a', '#ffc531', '#ff4d5e', '#19c3b1', '#b06cff', '#ff7a1a'];
    for (let i = 0; i < 14; i++) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.34, 8), new THREE.MeshLambertMaterial({ color: bottleCols[i % 6], emissive: bottleCols[i % 6], emissiveIntensity: 0.35 })); b.position.set(-12.55, 1.6 + (i % 2) * 0.75, -1.3 + i * 0.4); sc.add(b); }
    for (const z of [0.2, 2.6, 4.4]) { const st = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.08, 12), M('#ff4d5e')); st.position.set(-9.75, 0.7, z + 0.75); sc.add(st); const lg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.7, 6), M('#888')); lg.position.set(-9.75, 0.35, z + 0.75); sc.add(lg); }
    const barSign = signMesh('THE VIG', 2.4, 0.6, '#ff4d5e', '#200a10'); barSign.rotation.y = Math.PI / 2; barSign.position.set(-12.6, 3.9, 1.3); sc.add(barSign);
    this.tipBoard = canvasTex(512, 256);
    const tb = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.1), new THREE.MeshBasicMaterial({ map: this.tipBoard.t })); tb.rotation.y = Math.PI / 2; tb.position.set(-12.97, 2.6, 5.9); sc.add(tb);

    // pool table + high tables
    box(3.2, 0.25, 1.8, M('#1f7a4a'), 5.6, 0.9, 1.9); box(3.4, 0.2, 2.0, woodM, 5.6, 0.76, 1.9);
    for (const [x, z] of [[4.2, 1.2], [7, 1.2], [4.2, 2.6], [7, 2.6]]) box(0.16, 0.7, 0.16, woodM, x, 0.35, z);
    const ballCols = ['#fff', '#ffc531', '#ff4d5e', '#111', '#19c3b1'];
    ballCols.forEach((c, i) => { const b = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), M(c)); b.position.set(4.8 + i * 0.42, 1.09, 1.6 + (i % 3) * 0.25); sc.add(b); });
    for (const [x, z] of [[-3, 2], [0, 4.5]]) { const t = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.07, 18), woodM); t.position.set(x, 1.1, z); sc.add(t); const l = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.2, 1.1, 8), M('#555')); l.position.set(x, 0.55, z); sc.add(l); }

    // TV wall
    this.tvs = [];
    [['board', -4.6], ['game', 0], ['you', 4.6]].forEach(([kind, x]) => {
      const tv = canvasTex(640, 360); tv.kind = kind;
      box(4.3, 2.5, 0.12, M('#05060a'), x, 2.9, -7.93);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(4.1, 2.3), new THREE.MeshBasicMaterial({ map: tv.t })); m.position.set(x, 2.9, -7.86); sc.add(m);
      this.tvs.push(tv);
    });
    this.tvT = 0; this.fake = { a: 14, b: 12, tick: 0 };
    // framed worst pick
    this.frameDef = pick(G.roster.players.filter((p) => p.worstPick));
    const fr = canvasTex(256, 340);
    fr.x.fillStyle = C.paper; fr.x.fillRect(0, 0, 256, 340); fr.x.fillStyle = C.ink; fr.x.font = '900 22px system-ui'; fr.x.textAlign = 'center';
    fr.x.fillText('BET SLIP', 128, 36); fr.x.font = '700 13px monospace'; fr.x.fillText('#000-WORST-EVER', 128, 58);
    for (let i = 0; i < 9; i++) { fr.x.fillStyle = 'rgba(13,15,26,.45)'; fr.x.fillRect(28, 82 + i * 20, 200 - (i * 37) % 70, 7); }
    fr.x.strokeStyle = '#d0202f'; fr.x.lineWidth = 6; fr.x.save(); fr.x.translate(128, 280); fr.x.rotate(-0.15); fr.x.strokeRect(-80, -24, 160, 48); fr.x.fillStyle = '#d0202f'; fr.x.font = '900 34px system-ui'; fr.x.fillText('LOSER', 0, 12); fr.x.restore(); fr.t.needsUpdate = true;
    box(1.5, 1.95, 0.1, M('#c9a227'), -9.6, 2.5, -7.95);
    const frm = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.72), new THREE.MeshBasicMaterial({ map: fr.t })); frm.position.set(-9.6, 2.5, -7.88); sc.add(frm);
    // tunnel door
    box(3, 3.6, 0.2, M('#05060a'), 9.4, 1.8, -7.95);
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 3.2), new THREE.MeshBasicMaterial({ color: '#ffb347' })); glow.position.set(9.4, 1.6, -7.84); sc.add(glow); this.glow = glow;
    const ts = signMesh('TO THE COURT', 3, 0.55, C.ink, C.gold); ts.position.set(9.4, 3.95, -7.83); sc.add(ts);
    const tl = new THREE.PointLight(0xffb347, 14, 9); tl.position.set(9.4, 2, -6.5); sc.add(tl);
    // betting window, trophy case, locker room (right wall)
    box(0.5, 2.6, 3.2, M('#182040'), 12.8, 1.3, -1.6); box(0.2, 1.1, 2.6, new THREE.MeshLambertMaterial({ color: '#9fe8ff', emissive: '#3aa0c0', emissiveIntensity: 0.5 }), 12.5, 1.85, -1.6);
    const ws = signMesh('BETTING WINDOW', 3, 0.5, C.green, '#0a1a12'); ws.rotation.y = -Math.PI / 2; ws.position.set(12.95, 3.3, -1.6); sc.add(ws);
    box(0.7, 2.2, 2.2, M('#3a2a1c'), 12.6, 1.1, 3); box(0.5, 1.5, 1.9, new THREE.MeshLambertMaterial({ color: '#ffe9a8', emissive: '#c9a227', emissiveIntensity: 0.4, transparent: true, opacity: 0.5 }), 12.45, 1.3, 3);
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.1, 0.5, 12), new THREE.MeshLambertMaterial({ color: C.gold, emissive: '#7a5a00' })); cup.position.set(12.4, 1.35, 3); sc.add(cup);
    const tr = signMesh('TROPHY CASE', 2.2, 0.4, C.gold); tr.rotation.y = -Math.PI / 2; tr.position.set(12.95, 2.9, 3); sc.add(tr);
    box(0.2, 3, 1.8, M('#444b78'), 12.95, 1.5, 6.3);
    const lk = signMesh('LOCKER ROOM', 2.2, 0.4, '#fff', '#444b78'); lk.rotation.y = -Math.PI / 2; lk.position.set(12.9, 3.35, 6.3); sc.add(lk);
    // neon strips
    for (const [x, c] of [[-8, '#ff4d5e'], [8, '#19c3b1']]) { const n = new THREE.Mesh(new THREE.BoxGeometry(9, 0.08, 0.08), new THREE.MeshBasicMaterial({ color: c })); n.position.set(x, 4.7, -7.9); sc.add(n); }

    // ---- people
    const youDef = G.you;
    this.me = new Bobble(youDef, { jersey: G.roster.crew.homeColor, number: youDef.number, headScale: G.headScale(youDef) });
    this.me.pos = { x: 0, z: 5.8 }; this.me.speed = 0; sc.add(this.me.group);
    this.me.setRing(C.gold);
    this.npcs = [];
    const used = {};
    const palette = ['#6c5ce7', '#e84393', '#00b894', '#0984e3', '#d63031', '#fdcb6e', '#636e72', '#e17055'];
    G.roster.players.filter((p) => p !== youDef).forEach((def, i) => {
      let spot = SPOTS[def.spot] ? def.spot : Object.keys(SPOTS)[i % 7];
      used[spot] = used[spot] || 0;
      if (used[spot] >= SPOTS[spot].length) spot = Object.keys(SPOTS).find((k) => (used[k] || 0) < SPOTS[k].length) || 'pacer';
      const s = SPOTS[spot][(used[spot] = (used[spot] || 0) + 1) - 1] || [rand(-6, 6), rand(0, 6), 0];
      const b = new Bobble(def, { jersey: palette[i % palette.length], number: def.number, headScale: G.headScale(def) });
      b.pos = { x: s[0], z: s[1] }; b.home = { x: s[0], z: s[1] }; b.baseFace = s[2]; b.face = b.faceTarget = s[2];
      b.kind = spot; b.cool = rand(0, 2); b.laughT = rand(3, 12); b.greeted = false; b.paceDir = 1;
      const tag = labelSprite(def.name); tag.position.y = 2.75; b.group.add(tag);
      b.group.position.set(b.pos.x, 0, b.pos.z); sc.add(b.group); this.npcs.push(b);
    });
    const bt = G.roster.bartender || { name: 'VIG', look: {}, lines: ['What can I get you?'] };
    bt.id = bt.id || 'bartender'; bt.stats = bt.stats || {};
    this.bartender = new Bobble(bt, { jersey: '#1c1c1c' });
    this.bartender.pos = { x: -12.0, z: 1.3 }; this.bartender.face = this.bartender.faceTarget = Math.PI / 2;
    this.bartender.group.position.set(-12.0, 0, 1.3); sc.add(this.bartender.group);
    const btag = labelSprite(bt.name + ' · BARTENDER', C.gold); btag.position.y = 2.75; this.bartender.group.add(btag);

    // conversations between people standing together
    this.pairs = [];
    for (let i = 0; i < this.npcs.length; i++) for (let j = i + 1; j < this.npcs.length; j++) {
      if (dist(this.npcs[i].pos, this.npcs[j].pos) < 5.2 && this.npcs[i].kind === this.npcs[j].kind) this.pairs.push({ a: this.npcs[i], b: this.npcs[j], cool: rand(1, 4) });
    }
    this.convo = null;
    this.hot = [
      { x: 9.4, z: -6.9, r: 1.9, label: 'Head to the court', act: () => G.openMatchup() },
      { x: 11.9, z: -1.6, r: 1.7, label: 'Check your bankroll', act: () => this.showBankroll() },
      { x: 11.9, z: 3, r: 1.5, label: 'Look at the trophy case', act: () => this.showTrophies() },
      { x: 12.1, z: 6.3, r: 1.5, label: 'Open the locker room', act: () => G.showCards() },
      { x: -9.4, z: 1.3, r: 1.5, label: 'Ask the bartender for a tip', act: () => this.tip() },
      { x: -9.6, z: -7.0, r: 1.6, label: 'Read the framed slip', act: () => this.frame() },
      { x: -16.2, z: -5.9, r: 1.6, label: 'Inspect the controller', act: () => this.egg('rage', 'RAGE QUIT HALL OF FAME', 'A controller, buried two inches into the drywall. A plaque reads: "Thrown after a half-point loss. The dog covered. Nobody speaks of it."') },
    ];
    this.camPos = new THREE.Vector3(0, 9, 16);
    this.entered = 0;
    this.drawTip();
    this.drawTVs(true);
  }
  enter(result) {
    // result: {won, badBeat} from the last game, or null
    this.entered = performance.now(); this.result = result || null;
    for (const n of this.npcs) n.greeted = false;
    this.me.pos.x = result ? 8.6 : 0; this.me.pos.z = result ? -5.2 : 5.8;
    if (result && result.badBeat) setTimeout(() => sfx('trombone'), 600);
    this.drawTVs(true); this.drawTip();
    caption(this.night ? 'It is after midnight. The Lounge is in night mode.' : 'Walk around with WASD or the arrow keys. People talk when you get close.', 5);
  }
  drawTip() {
    const G = this.G, t = this.tipBoard, x = t.x;
    if (!G.save.tip) G.save.tip = pick(['home', 'away', 'over', 'under']);
    const names = { home: 'TAKE THE FAVORITE', away: 'TAKE THE DOG', over: 'HAMMER THE OVER', under: 'UNDER. TRUST ME.' };
    x.fillStyle = '#10221a'; x.fillRect(0, 0, 512, 256); x.strokeStyle = '#c9a227'; x.lineWidth = 10; x.strokeRect(5, 5, 502, 246);
    x.fillStyle = '#fff'; x.textAlign = 'center'; x.font = '900 34px system-ui'; x.fillText("VIG'S TIP OF THE DAY", 256, 70);
    x.fillStyle = C.gold; x.font = '900 46px system-ui'; x.fillText(names[G.save.tip], 256, 150);
    x.fillStyle = '#9fb'; x.font = '600 22px system-ui'; x.fillText('(record this year: 3-41)', 256, 205); t.t.needsUpdate = true;
  }
  drawTVs(force) {
    const G = this.G, R = G.roster, f = this.fake;
    for (const tv of this.tvs) {
      const x = tv.x; x.fillStyle = '#0a0c1c'; x.fillRect(0, 0, 640, 360);
      x.textAlign = 'left'; x.fillStyle = C.gold; x.font = '900 30px system-ui';
      if (tv.kind === 'board') {
        if (!force) continue;
        x.fillText('THE LINE BOARD', 24, 44); x.font = '700 21px monospace';
        const rated = R.players.map((p) => ({ p, r: teamRating([p]) })).sort((a, b) => b.r - a.r).slice(0, 9);
        const top = rated[0].r;
        rated.forEach(({ p, r }, i) => {
          const odds = Math.round((top - r) * 28) + (i === 0 ? -140 : 110);
          x.fillStyle = i % 2 ? '#cfd3ea' : '#fff'; x.fillText(p.name.slice(0, 16), 24, 84 + i * 30);
          x.fillStyle = odds < 0 ? C.green : C.gold; x.textAlign = 'right'; x.fillText((odds > 0 ? '+' : '') + odds, 616, 84 + i * 30); x.textAlign = 'left';
        });
      } else if (tv.kind === 'game') {
        x.fillStyle = '#143d24'; x.fillRect(0, 60, 640, 230);
        x.strokeStyle = 'rgba(255,255,255,.5)'; x.lineWidth = 3; x.strokeRect(20, 75, 600, 200); x.beginPath(); x.moveTo(320, 75); x.lineTo(320, 275); x.stroke(); x.beginPath(); x.arc(320, 175, 40, 0, 7); x.stroke();
        for (let i = 0; i < 4; i++) { x.fillStyle = i < 2 ? C.home : C.away; x.beginPath(); x.arc(320 + Math.sin(f.tick * 0.7 + i * 2) * 240, 175 + Math.cos(f.tick * 0.9 + i * 1.7) * 70, 12, 0, 7); x.fill(); }
        x.fillStyle = '#fff'; x.font = '900 30px system-ui'; x.fillText(`${R.crew.homeName} ${f.a}`, 24, 42); x.textAlign = 'right'; x.fillText(`${f.b} ${R.crew.awayName}`, 616, 42); x.textAlign = 'center'; x.fillStyle = '#ff4d5e'; x.font = '900 20px system-ui'; x.fillText('● LIVE', 320, 40);
        x.fillStyle = C.gold; x.fillRect(0, 300, 640, 60); x.fillStyle = C.ink; x.font = '800 24px system-ui'; x.textAlign = 'left';
        const tick = R.players.map((p, i) => `${p.name} ${['o2.5 threes', 'u1.5 dunks', 'to talk trash -500', 'o0.5 excuses', 'first bucket +450'][i % 5]}`).join('   ·   ');
        const w = x.measureText(tick).width + 100; x.fillText(tick, 640 - ((f.tick * 60) % (w + 640)), 338);
      } else {
        if (!force) continue;
        x.fillText('YOUR ACTION', 24, 44); x.fillStyle = '#fff'; x.font = '800 26px system-ui';
        x.fillText(`Bankroll: ${G.save.units.toFixed(1)} units`, 24, 92); x.fillText(`Record: ${G.save.w}-${G.save.l}`, 24, 128);
        x.font = '700 20px monospace';
        (G.save.slips || []).slice(-5).reverse().forEach((s, i) => { x.fillStyle = s.net >= 0 ? C.green : C.red; x.fillText(`${s.won ? 'W' : 'L'} ${s.score}  ${s.net >= 0 ? '+' : ''}${s.net.toFixed(1)}u  ${s.grade}`, 24, 176 + i * 32); });
        if (!(G.save.slips || []).length) { x.fillStyle = '#9aa0c0'; x.fillText('No slips yet. Go play a game.', 24, 176); }
      }
      tv.t.needsUpdate = true;
    }
  }
  anchor(b) { return b._anchor || (b._anchor = () => ({ x: b.group.position.x, y: 2.75 * b.ht * 0.92 + 0.25, z: b.group.position.z })); }
  say(b, text, dur = 2.8, laugh = false) {
    bubbles.say(this.anchor(b), text, dur);
    const d = dist(b.pos, this.me.pos), vol = clamp(1.2 - d / 9, 0.1, 1);
    if (laugh) { b.laugh = 1; b.laughUntil = performance.now() + 1300; b.setExpr('happy', 1.6); sfx('laugh', vol); } else sfx('talk', vol);
  }
  roastFor(a, b) {
    const R = this.G.roster, r = (R.roasts || []).find((r) => (r.a === a.def.id && r.b === b.def.id) || (r.a === b.def.id && r.b === a.def.id));
    if (r) { const first = r.a === a.def.id ? a : b, second = first === a ? b : a; return r.lines.map((t, i) => ({ who: i % 2 ? second : first, text: t })); }
    const opts = [
      [`Remember when ${b.def.name.toLowerCase()} did this? "${b.def.worstPick || 'lost a coin flip parlay'}"`, 'We do NOT talk about that.', 'HAHAHA'],
      [`${b.def.name}, your jumper is a -2000 favorite to hit the backboard.`, `Still better than your picks.`, 'HAHAHA fair.'],
      ['Who do you like tonight?', pick(b.def.lines || ['No comment.']), 'Great. Fading that.'],
    ];
    return pick(opts).map((t, i) => ({ who: i % 2 ? b : a, text: t.replace(/^(.)/, (m) => m.toUpperCase()) }));
  }
  update(dt) {
    const G = this.G, me = this.me, busy = screenOpen();
    // --- player movement
    const ax = busy ? { x: 0, z: 0, m: 0 } : input.axis();
    const sp = (input.sprint() ? 7.5 : 5) * ax.m;
    let nx = me.pos.x + ax.x * sp * dt, nz = me.pos.z + ax.z * sp * dt;
    const R = 0.45;
    const inAlcove = (x, z) => x < -13 && z > -7.6 && z < -4.2;
    const door = (z) => z > -6.5 && z < -5.1;
    // room bounds (with the hidden doorway on the left wall)
    if (nx < -12.5 && !(door(nz) || inAlcove(me.pos.x, me.pos.z))) nx = -12.5;
    if (nx < -13) { nx = Math.max(nx, -16.6); nz = clamp(nz, door(nz) && nx > -13.4 ? -6.5 : -7.5, door(nz) && nx > -13.4 ? -5.1 : -4.3); }
    nx = Math.min(nx, 12.4); if (nx >= -13) nz = clamp(nz, -7.3, 7.4);
    for (const o of OBST) {
      if (nx > o[0] - R && nx < o[2] + R && nz > o[1] - R && nz < o[3] + R) {
        const dx = Math.min(nx - (o[0] - R), o[2] + R - nx), dz = Math.min(nz - (o[1] - R), o[3] + R - nz);
        if (dx < dz) nx = nx - (o[0] - R) < o[2] + R - nx ? o[0] - R : o[2] + R; else nz = nz - (o[1] - R) < o[3] + R - nz ? o[1] - R : o[3] + R;
      }
    }
    for (const n of this.npcs) { const d = Math.hypot(nx - n.pos.x, nz - n.pos.z); if (d < 0.9 && d > 0.001) { nx = n.pos.x + (nx - n.pos.x) / d * 0.9; nz = n.pos.z + (nz - n.pos.z) / d * 0.9; } }
    me.pos.x = nx; me.pos.z = nz;
    if (ax.m > 0.1) me.faceTarget = Math.atan2(ax.x, ax.z);
    me.group.position.set(nx, 0, nz); me.update(dt, sp);

    // --- NPCs
    const now = performance.now();
    for (const n of this.npcs) {
      const d = dist(n.pos, me.pos);
      let speed = 0;
      if (n.kind === 'pacer' && d > 3 && !this.convo) {
        n.pos.x += n.paceDir * 1.3 * dt; speed = 1.3; n.faceTarget = n.paceDir > 0 ? Math.PI / 2 : -Math.PI / 2;
        if (n.pos.x > n.home.x + 5) n.paceDir = -1; if (n.pos.x < n.home.x) n.paceDir = 1;
      } else if (d < 4.2) n.faceTarget = Math.atan2(me.pos.x - n.pos.x, me.pos.z - n.pos.z);
      else n.faceTarget = n.baseFace;
      n.group.position.set(n.pos.x, 0, n.pos.z);
      if (n.laughUntil && now > n.laughUntil) { n.laugh = 0; n.laughUntil = 0; }
      n.cool -= dt; n.laughT -= dt;
      const inConvo = this.convo && (this.convo.a === n || this.convo.b === n);
      if (!inConvo && !busy) {
        if (d < 3.4 && n.cool <= 0) {
          let line, laugh = false;
          if (!n.greeted && this.result) {
            const Rx = G.roster.reactions || {}; const set = this.result.badBeat ? Rx.afterBadBeat : this.result.won ? Rx.afterWin : Rx.afterLoss;
            line = pick(set || ['Good game.']).replace('{you}', G.you.name); laugh = !this.result.won;
            n.setExpr(this.result.won ? 'shock' : 'happy', 2);
          } else if (this.night && Math.random() < 0.4) line = pick((G.roster.reactions || {}).night || ['Late one tonight.']);
          else line = pick(n.def.lines || ['...']);
          n.greeted = true; this.say(n, line, 3, laugh); n.cool = rand(5, 8);
        } else if (n.laughT <= 0) { n.laughT = rand(6, 16); if (d < 11) this.say(n, pick(['HAHAHA', 'Ha!', 'LOL', 'No way!', 'Hahaha stop']), 1.4, true); }
      }
      n.update(dt, speed);
    }
    const bt = this.bartender; bt.faceTarget = dist(bt.pos, me.pos) < 5 ? Math.atan2(me.pos.x - bt.pos.x, me.pos.z - bt.pos.z) : Math.PI / 2; bt.update(dt, 0);
    if (bt.laughUntil && now > bt.laughUntil) { bt.laugh = 0; bt.laughUntil = 0; }

    // --- scripted back-and-forth roasts
    if (this.convo) {
      const c = this.convo; c.t -= dt;
      if (c.t <= 0) {
        const step = c.steps[c.i++];
        if (!step) { c.pair.cool = rand(9, 15); c.a.cool = c.b.cool = 3; this.convo = null; }
        else {
          const laugh = /^(ha|lol)/i.test(step.text);
          this.say(step.who, step.text, 2.6, laugh);
          const other = step.who === c.a ? c.b : c.a; step.who.faceTarget = Math.atan2(other.pos.x - step.who.pos.x, other.pos.z - step.who.pos.z);
          if (laugh) { other.laugh = 1; other.laughUntil = now + 1200; other.setExpr('happy', 1.5); }
          c.t = 2.3;
        }
      }
    } else if (!busy) {
      for (const p of this.pairs) {
        p.cool -= dt;
        const mid = { x: (p.a.pos.x + p.b.pos.x) / 2, z: (p.a.pos.z + p.b.pos.z) / 2 };
        if (p.cool <= 0 && dist(mid, me.pos) < 5 && p.a.greeted && p.b.greeted) {
          const flip = Math.random() < 0.5; const a = flip ? p.a : p.b, b = flip ? p.b : p.a;
          this.convo = { pair: p, a, b, steps: this.roastFor(a, b), i: 0, t: 0.2 }; break;
        }
      }
    }

    // --- hot spots
    let near = null;
    if (!busy) for (const hs of this.hot) if (Math.hypot(me.pos.x - hs.x, me.pos.z - hs.z) < hs.r) near = hs;
    prompt(near ? `<kbd>E</kbd> ${near.label}` : null);
    if (near && (input.pressed('KeyE') || input.pressed('Enter'))) { sfx('click'); near.act(); }
    this.glow.material.color.setHSL(0.09, 1, 0.6 + Math.sin(now / 300) * 0.08);

    // --- TVs
    this.fake.tick += dt; this.tvT -= dt;
    if (this.tvT <= 0) { this.tvT = 0.12; if (Math.random() < 0.02) this.fake[Math.random() < 0.5 ? 'a' : 'b'] += pick([2, 2, 3]); if (this.fake.a > 40 || this.fake.b > 40) { this.fake.a = 0; this.fake.b = 0; } this.drawTVs(false); }

    // --- camera
    const tx = clamp(me.pos.x, -14, 10), tz = me.pos.z;
    const narrow = view.w < view.h;
    this.camPos.set(damp(this.camPos.x, tx * 0.85, 4, dt), narrow ? 11 : 8.2, damp(this.camPos.z, tz + (narrow ? 13 : 9.5), 4, dt));
    this.camera.position.copy(this.camPos); this.camera.lookAt(this.camPos.x + (tx - this.camPos.x) * 0.5, 1.3, tz - 1.5);
    bubbles.update(this.camera);
  }
  egg(id, title, text) {
    const G = this.G; G.save.eggs = G.save.eggs || {};
    const fresh = !G.save.eggs[id]; G.save.eggs[id] = 1; G.persist();
    modal(title, `<p>${esc(text)}</p>${fresh ? `<p class="found">Secret found: ${Object.keys(G.save.eggs).length} so far</p>` : ''}`);
    if (fresh) sfx('cash');
  }
  frame() {
    const d = this.frameDef; if (!d) return;
    this.egg('frame', 'THE WORST PICK EVER', `Framed, laminated and lit from above. It belongs to ${d.name}: "${d.worstPick}"`);
    const n = this.npcs.find((n) => n.def === d); if (n) setTimeout(() => this.say(n, 'WHO FRAMED THAT?!', 2.5), 300);
  }
  tip() {
    const G = this.G, bt = this.bartender, names = { home: 'the favorite', away: 'the dog', over: 'the over', under: 'the under' };
    this.say(bt, `Tonight? Take ${names[G.save.tip]}. Can't lose.`, 3.5);
    bt.laugh = 1; bt.laughUntil = performance.now() + 800;
    caption('Vig is almost never right. Fade the tip at the betting screen and a winning pick pays an extra unit.', 6);
  }
  showBankroll() {
    const G = this.G, s = G.save;
    const rows = (s.slips || []).slice(-8).reverse().map((x) => `<tr><td>${x.won ? 'W' : 'L'}</td><td>${esc(x.score)}</td><td class="${x.net >= 0 ? 'pos' : 'neg'}">${x.net >= 0 ? '+' : ''}${x.net.toFixed(1)}u</td><td>${esc(x.grade)}</td></tr>`).join('');
    modal('BETTING WINDOW', `<p class="big-num">${s.units.toFixed(1)} <span>units</span></p><p>Units are fake. Lock your pregame pick on the matchup screen when you head to the court.</p>${rows ? `<table class="slips">${rows}</table>` : '<p>No slips yet.</p>'}`);
  }
  showTrophies() {
    const G = this.G, s = G.save;
    const eggs = Object.keys(s.eggs || {}).length;
    modal('TROPHY CASE', `<p class="big-num">${s.w}<span>W</span> ${s.l}<span>L</span></p><p>Best slip: ${s.best ? '+' + s.best.toFixed(1) + ' units' : 'none yet'}</p><p>Bad beats survived: ${s.badBeats || 0}</p><p>Secrets found: ${eggs}</p><p class="dim">Bracket night trophies will live here.</p>`);
  }
}
