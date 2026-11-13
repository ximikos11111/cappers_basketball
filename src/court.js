import * as THREE from 'three';
import { Bobble, avatar, labelSprite } from './character.js';
import { input } from './input.js';
import { sfx, crowd, music } from './audio.js';
import { bubbles, banner, caption, h, esc, root, view } from './ui.js';
import { clamp, lerp, damp, dist, pick, rand, C, shade, abilityName, abilityDesc } from './util.js';

const HL = 14, HW = 7.5, HOOPX = 12.3, HOOPY = 3.05, THREE_R = 6.75;
const WIN = 21, HALF_LEN = 150, SHOT_CLOCK = 12, GRAV = 17;
const SPOTS = [[11.4, -6.2], [11.4, 6.2], [7.2, -5], [7.2, 5], [5.2, 0], [10.6, -2.6], [10.6, 2.6]];
const HINTS = [
  'WASD or arrows to move. Hold SHIFT to sprint (drains stamina)',
  'Hold SPACE and release in the green. Better shooters get a bigger green window',
  'Sprint at the rim and SPACE becomes a dunk or layup',
  'E passes and swaps control. Double-tap a direction to juke',
  'On defense: Q to steal (mistime it and you foul), SPACE to jump and block',
  'Hype meter full? Press F for your signature ability',
  'Props pop up on the right. Press T to take one for 1 unit',
  'Three + steal + assist with no answer and the PARLAY hits',
];
const norm = (x, z) => { const m = Math.hypot(x, z) || 1; return { x: x / m, z: z / m }; };

export class Court {
  constructor(G, cfg) {
    this.G = G; this.cfg = cfg; this.auto = !!cfg.auto;
    const R = G.roster.crew;
    this.diff = { rookie: -2, pro: 0, allstar: 1.5 }[cfg.diff] || 0;
    this.col = [R.homeColor || C.home, R.awayColor || C.away];
    this.names = [R.homeName || 'HOME', R.awayName || 'AWAY'];
    this.scene = new THREE.Scene(); this.scene.background = new THREE.Color('#080914');
    this.camera = new THREE.PerspectiveCamera(40, view.w / view.h, 0.1, 120);
    this.camX = 0; this.shake = 0;
    this.buildArena();
    // players
    this.P = [];
    [cfg.home, cfg.away].forEach((defs, team) => defs.forEach((def, i) => {
      const p = { def, team, i, pos: { x: (team ? 1 : -1) * (2 + i * 3), z: i ? 3 : -1 }, vel: { x: 0, z: 0 }, y: 0, vy: 0, stamina: 1, st: 'ok', stT: 0, streak: 0, juiceT: 0, stealCd: 0, jukeCd: 0, jumpCd: 0, charge: 0, pts: 0, ai: { t: rand(0.3), side: Math.random() < 0.5 ? 1 : -1, hold: 0, spot: null, spotT: 0, jumped: false }, target: null };
      this.makeBob(p); this.P.push(p);
    }));
    this.bench = (cfg.bench || []).slice();
    // ball
    this.ball = { pos: new THREE.Vector3(0, 1, 0), vel: new THREE.Vector3(), state: 'held', holder: null, t: 0, shot: null, pass: null, lastPass: null, mesh: null };
    const bt = document.createElement('canvas'); bt.width = 128; bt.height = 64; const bx = bt.getContext('2d');
    bx.fillStyle = '#e8762c'; bx.fillRect(0, 0, 128, 64); bx.strokeStyle = '#1b1410'; bx.lineWidth = 3; bx.beginPath(); bx.moveTo(0, 32); bx.lineTo(128, 32); bx.moveTo(32, 0); bx.lineTo(32, 64); bx.moveTo(96, 0); bx.lineTo(96, 64); bx.stroke();
    const btx = new THREE.CanvasTexture(bt); btx.colorSpace = THREE.SRGBColorSpace;
    this.ballMat = new THREE.MeshLambertMaterial({ map: btx });
    this.ball.mesh = new THREE.Mesh(new THREE.SphereGeometry(0.19, 16, 12), this.ballMat); this.scene.add(this.ball.mesh);
    this.ballShadow = new THREE.Mesh(new THREE.CircleGeometry(0.2, 12), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.3, depthWrite: false })); this.ballShadow.rotation.x = -Math.PI / 2; this.scene.add(this.ballShadow);
    // flame trail
    const N = 70; this.trailN = N; this.trailI = 0; this.trailLife = new Float32Array(N);
    const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3).fill(-100), 3));
    this.trailMat = new THREE.PointsMaterial({ color: 0xff7a1a, size: 0.42, transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending });
    this.trail = new THREE.Points(tg, this.trailMat); this.trail.frustumCulled = false; this.scene.add(this.trail);
    this.ghosts = [0, 1].map(() => { const m = new THREE.Mesh(new THREE.RingGeometry(0.4, 0.55, 24), new THREE.MeshBasicMaterial({ color: 0x3ddc6a, transparent: true, opacity: 0.7, depthWrite: false })); m.rotation.x = -Math.PI / 2; m.visible = false; this.scene.add(m); return m; });

    // game state
    this.score = [0, 0]; this.clock = HALF_LEN; this.half = 1; this.shotClock = SHOT_CLOCK; this.poss = 0; this.possT = 0;
    this.phase = 'intro'; this.phaseT = 2.4; this.time = 0; this.hitstop = 0; this.slowT = 0; this.sudden = false;
    this.hype = [0, 0]; this.locked = [false, false]; this.chalk = [false, false]; this.superShot = [false, false]; this.sharpT = [0, 0];
    this.parlay = { three: false, steal: false, assist: false }; this.parlayHits = 0;
    this.run = { team: -1, pts: 0, steamed: 0 }; this.liveLine = cfg.spread;
    this.props = []; this.offer = null; this.activeProp = null; this.offerT = rand(14, 20);
    this.me = this.P[0]; this.hintI = 0; this.hintT = 3; this.lastFlip = null; this.endT = 0;
    this.stats = { steals: 0, blocks: 0, dunks: 0, threes: 0, ankles: 0, perfect: 0 };
    this.buildHud();
    this.give(this.P[0]);
    this.setupInbound(0, true);
    crowd(true); music(true);
    this.openTag = labelSprite('OPEN · E', '#0d0f1a', '#3ddc6a'); this.openTag.visible = false; this.scene.add(this.openTag);
    this.zoom = 0; this.punch = 0;
    banner(`${this.names[0]} vs ${this.names[1]}`, `First to ${WIN}, or the lead after two halves`, C.gold, 2.2);
  }

  // ------------------------------------------------------------ scene
  buildArena() {
    const sc = this.scene;
    sc.add(new THREE.HemisphereLight(0xffffff, 0x333355, 1.25));
    const dl = new THREE.DirectionalLight(0xffffff, 1.4); dl.position.set(3, 14, 9); sc.add(dl);
    // floor
    const W = 2048, Hh = 1152, c = document.createElement('canvas'); c.width = W; c.height = Hh; const x = c.getContext('2d');
    const sx = W / 32, sz = Hh / 18, X = (m) => W / 2 + m * sx, Z = (m) => Hh / 2 + m * sz;
    x.fillStyle = '#12142a'; x.fillRect(0, 0, W, Hh);
    for (let i = 0; i < 56; i++) { x.fillStyle = i % 2 ? '#c98a4b' : '#c4854a'; x.fillRect(X(-HL) + i * (28 * sx / 56), Z(-HW), 28 * sx / 56 + 1, 15 * sz); }
    x.fillStyle = 'rgba(0,0,0,.06)'; for (let i = 0; i < 30; i++) x.fillRect(X(-HL), Z(-HW) + i * (15 * sz / 30), 28 * sx, 1);
    x.strokeStyle = '#fff'; x.lineWidth = 6; x.strokeRect(X(-HL), Z(-HW), 28 * sx, 15 * sz);
    x.beginPath(); x.moveTo(X(0), Z(-HW)); x.lineTo(X(0), Z(HW)); x.stroke();
    x.fillStyle = shade(this.col[0], 0.9); x.beginPath(); x.arc(X(0), Z(0), 1.8 * sx, 0, 7); x.fill(); x.stroke();
    x.fillStyle = '#fff'; x.font = `900 italic ${sx * 0.8}px "Barlow Condensed", Impact, system-ui`; x.textAlign = 'center'; x.fillText('HOOP', X(0), Z(-0.1)); x.fillText('LEGENDS', X(0), Z(0.75));
    for (const s of [-1, 1]) {
      x.fillStyle = s < 0 ? shade(this.col[0], 0.8) : shade(this.col[1], 0.8); x.globalAlpha = 0.85;
      x.fillRect(Math.min(X(s * HL), X(s * (HL - 5.8))), Z(-2.45), 5.8 * sx, 4.9 * sz); x.globalAlpha = 1;
      x.strokeRect(Math.min(X(s * HL), X(s * (HL - 5.8))), Z(-2.45), 5.8 * sx, 4.9 * sz);
      x.beginPath(); x.arc(X(s * (HL - 5.8)), Z(0), 1.8 * sx, 0, 7); x.stroke();
      // three-point arc
      x.beginPath(); const a0 = Math.asin(6.6 / THREE_R);
      x.moveTo(X(s * HL), Z(-6.6)); x.lineTo(X(s * (HOOPX - THREE_R * Math.cos(a0))), Z(-6.6));
      x.ellipse(X(s * HOOPX), Z(0), THREE_R * sx, THREE_R * sz, 0, s > 0 ? Math.PI + a0 : -a0, s > 0 ? Math.PI - a0 : a0, s > 0);
      x.lineTo(X(s * HL), Z(6.6)); x.stroke();
    }
    const ft = new THREE.CanvasTexture(c); ft.colorSpace = THREE.SRGBColorSpace; ft.anisotropy = 8;
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(32, 18), new THREE.MeshLambertMaterial({ map: ft })); floor.rotation.x = -Math.PI / 2; sc.add(floor);
    const apron = new THREE.Mesh(new THREE.PlaneGeometry(90, 60), new THREE.MeshLambertMaterial({ color: '#0d0f1a' })); apron.rotation.x = -Math.PI / 2; apron.position.y = -0.02; sc.add(apron);
    // hoops
    this.nets = [];
    for (const s of [-1, 1]) {
      const M = (col) => new THREE.MeshLambertMaterial({ color: col });
      const pole = new THREE.Mesh(new THREE.BoxGeometry(0.25, 3.3, 0.25), M('#2a2e4a')); pole.position.set(s * (HL + 0.9), 1.65, 0); sc.add(pole);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.2, 0.2), M('#2a2e4a')); arm.position.set(s * (HL + 0.25), 3.3, 0); sc.add(arm);
      const bb = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.1, 1.8), new THREE.MeshLambertMaterial({ color: '#ffffff', transparent: true, opacity: 0.55 })); bb.position.set(s * (HOOPX + 0.42), 3.5, 0); sc.add(bb);
      const sq = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.45, 0.6), new THREE.MeshBasicMaterial({ color: '#ff4d5e', wireframe: true })); sq.position.set(s * (HOOPX + 0.4), 3.3, 0); sc.add(sq);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.025, 8, 24), new THREE.MeshBasicMaterial({ color: '#ff5a1f' })); rim.rotation.x = Math.PI / 2; rim.position.set(s * HOOPX, HOOPY, 0); sc.add(rim);
      const net = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.14, 0.42, 12, 3, true), new THREE.MeshBasicMaterial({ color: '#ffffff', wireframe: true, transparent: true, opacity: 0.8 })); net.position.set(s * HOOPX, HOOPY - 0.22, 0); sc.add(net); this.nets.push(net);
    }
    // stands, ad boards and crowd on the far side
    const standM = new THREE.MeshLambertMaterial({ color: '#1b1e3a' });
    for (let r = 0; r < 4; r++) { const st = new THREE.Mesh(new THREE.BoxGeometry(40, 0.7, 1.4), standM); st.position.set(0, 0.35 + r * 0.7, -10 - r * 1.4); sc.add(st); }
    const back = new THREE.Mesh(new THREE.PlaneGeometry(60, 14), new THREE.MeshBasicMaterial({ color: '#0b0d1c' })); back.position.set(0, 7, -16); sc.add(back);
    const ads = this.G.roster.ads || ['HOOP LEGENDS'];
    const ac = document.createElement('canvas'); ac.width = 2048; ac.height = 64; const ax = ac.getContext('2d');
    ax.fillStyle = '#0d0f1a'; ax.fillRect(0, 0, 2048, 64); ax.font = '900 italic 40px "Barlow Condensed", Impact, system-ui'; ax.textBaseline = 'middle';
    let px = 20; for (let i = 0; px < 2000; i++) { ax.fillStyle = [C.gold, '#fff', C.green, this.col[0], this.col[1]][i % 5]; const t = ads[i % ads.length]; ax.fillText(t, px, 34); px += ax.measureText(t).width + 70; }
    const at = new THREE.CanvasTexture(ac); at.colorSpace = THREE.SRGBColorSpace;
    const ad = new THREE.Mesh(new THREE.PlaneGeometry(32, 1), new THREE.MeshBasicMaterial({ map: at })); ad.position.set(0, 0.5, -8.6); sc.add(ad);
    this.crowd = [];
    const inGame = new Set([...this.cfg.home, ...this.cfg.away]);
    const fans = this.G.roster.players.filter((p) => !inGame.has(p));
    const pal = ['#6c5ce7', '#e84393', '#00b894', '#0984e3', '#d63031', '#fdcb6e'];
    for (let r = 0; r < 2; r++) for (let i = 0; i < 9; i++) {
      const def = fans.length ? fans[(i + r * 3) % fans.length] : pick(this.G.roster.players);
      const b = new Bobble(def, { jersey: pal[(i + r) % pal.length], headScale: this.G.headScale(def) });
      b.group.position.set(-13 + i * 3.25 + r * 1.6, 0.7 + r * 0.7, -9.9 - r * 1.4); b.cheerT = 0;
      sc.add(b.group); this.crowd.push(b);
    }
    // blob crowd behind for depth
    const blob = new THREE.InstancedMesh(new THREE.SphereGeometry(0.34, 8, 6), new THREE.MeshLambertMaterial(), 90);
    const m4 = new THREE.Matrix4(), cc = new THREE.Color();
    for (let i = 0; i < 90; i++) { const r = 2 + (i % 2); m4.setPosition(-19 + (i >> 1) * 0.86 + r * 0.3, 1.25 + r * 0.7 + 0.5, -10 - r * 1.4); blob.setMatrixAt(i, m4); blob.setColorAt(i, cc.setHSL(Math.random(), 0.45, 0.5)); }
    sc.add(blob);
  }
  makeBob(p) {
    if (p.bob) this.scene.remove(p.bob.group);
    p.bob = new Bobble(p.def, { jersey: this.col[p.team], number: p.def.number, headScale: this.G.headScale(p.def) });
    p.bob.faceTarget = p.bob.face = p.team ? -Math.PI / 2 : Math.PI / 2;
    this.scene.add(p.bob.group);
  }
  buildHud() {
    const cfg = this.cfg, e = (this.hud = h('div', 'hud'));
    e.innerHTML = `
    <div class="sb">
      <div class="tm" style="--tc:${this.col[0]}"><span class="nm">${esc(this.names[0])}</span><span class="sc" id="h-s0">0</span></div>
      <div class="mid"><div class="clk" id="h-clk">2:30</div><div class="subl"><span id="h-half">1ST</span><span class="shot" id="h-shot">12</span></div></div>
      <div class="tm away" style="--tc:${this.col[1]}"><span class="sc" id="h-s1">0</span><span class="nm">${esc(this.names[1])}</span></div>
      <div class="line" id="h-line"></div>
    </div>
    <div class="units"><b id="h-units"></b><span id="h-pick"></span></div>
    <div class="pcard"><div class="pc-top"><span id="h-av"></span><div><div class="pc-name" id="h-name"></div><div class="pc-ab" id="h-ab"></div></div></div>
      <div class="bar stam"><i id="h-stam"></i></div>
      <div class="bar hype"><i id="h-hype"></i><em id="h-hypel">HYPE</em></div>
      <div class="chips"><span>PARLAY</span><b id="c-three">THREE</b><b id="c-steal">STEAL</b><b id="c-assist">ASSIST</b></div>
    </div>
    <div class="offer" id="h-offer" hidden></div>
    <div class="meter" id="h-meter" hidden><div class="green" id="h-green"></div><div class="fill" id="h-fill"></div></div>
    <div class="sigcard" id="h-sig" hidden></div>
    <div class="tint" id="h-tint"></div>`;
    root().appendChild(e);
    this.$ = (id) => e.querySelector('#' + id);
    const pk = cfg.pick;
    this.$('h-pick').textContent = pk ? `Pick: ${pk.label} (${pk.stake}u)` : 'No pick locked';
    this.$('h-offer').addEventListener('click', () => this.takeOffer());
    this.hudMe = null;
  }

  // ------------------------------------------------------------ helpers
  stat(p, k) { return clamp((p.def.stats[k] || 5) + (p.juiceT > 0 ? 2 : 0) + (p.team === 1 ? this.diff : 0), 1, 12); }
  hoop(team) { return { x: (team ? -1 : 1) * HOOPX, z: 0 }; }
  dir(team) { return team ? -1 : 1; }
  mate(p) { return this.P.find((q) => q.team === p.team && q !== p); }
  opps(p) { return this.P.filter((q) => q.team !== p.team); }
  nearestOpp(p) { let b = null, bd = 99; for (const q of this.opps(p)) { const d = dist(p.pos, q.pos); if (d < bd) { bd = d; b = q; } } return [b, bd]; }
  isUser(p) { return !this.auto && p === this.me; }
  addHype(team, amt, p) { const tt = p ? this.stat(p, 'trashTalk') : 5; this.hype[team] = clamp(this.hype[team] + amt * (0.7 + tt * 0.06), 0, 100); }
  give(p) {
    const b = this.ball, prev = this.poss;
    b.state = 'held'; b.holder = p; b.shot = null; b.pass = null;
    if (p.team !== prev || this.possT > 90) { this.poss = p.team; this.shotClock = SHOT_CLOCK; this.possT = 0; }
    this.poss = p.team;
    if (p.team === 0) this.me = p; else if (this.me) this.me = this.P[p.i]; // home defender matched to the handler
  }
  crowdSay(text, n = 1) {
    for (let i = 0; i < n; i++) { const b = pick(this.crowd); b.cheerT = 1.2; b.setExpr(/BRICK|FADE|BOO|ICE/i.test(text) ? 'happy' : 'shock', 1.5); bubbles.say(() => ({ x: b.group.position.x, y: b.group.position.y + 2.6, z: b.group.position.z }), text, 2.2, 'crowd'); }
  }
  cheer(big) { for (const b of this.crowd) if (big || Math.random() < 0.5) b.cheerT = rand(0.6, 1.4); sfx('cheer', big ? 1 : 0.6); }

  // ------------------------------------------------------------ actions
  startShot(p) {
    if (p.st !== 'ok' || this.ball.holder !== p) return;
    p.st = 'windup'; p.stT = 0; p.charge = 0; p.vy = 4.7; p.vel.x *= 0.3; p.vel.z *= 0.3;
    const h = this.hoop(p.team); p.bob.faceTarget = Math.atan2(h.x - p.pos.x, h.z - p.pos.z);
    if (!this.isUser(p)) {
      const sh = this.stat(p, 'shooting'), r = Math.random();
      p.aiQ = r < 0.12 + sh * 0.04 ? 'perfect' : r < 0.75 + sh * 0.02 ? 'good' : 'bad'; p.aiRel = rand(0.72, 0.86);
    }
    for (const q of this.opps(p)) q.ai.jumped = false;
  }
  greenHalf(p) { return (0.035 + this.stat(p, 'shooting') * 0.009) * (p.streak >= 3 ? 1.4 : p.streak <= -3 ? 0.65 : 1); }
  timing(p, c) { const w = this.greenHalf(p), d = Math.abs(c - 0.8); return d <= w ? 'perfect' : d <= w + 0.13 ? 'good' : 'bad'; }
  contest(p) {
    let c = 0;
    for (const q of this.opps(p)) {
      if (q.st === 'down' || q.st === 'frozen') continue;
      const d = dist(p.pos, q.pos);
      let v = clamp(1 - d / 2.3) * (0.3 + this.stat(q, 'defense') * 0.035) * (q.def.look && q.def.look.height > 1.08 ? 1.12 : 1) * (q.y > 0.2 ? 1.3 : 1);
      if (this.sharpT[p.team] > 0) v *= 0.5;
      c = Math.max(c, v);
    }
    return Math.min(c, 0.62);
  }
  release(p, quality, layup = false) {
    const b = this.ball, hp = this.hoop(p.team), d = dist(p.pos, hp), team = p.team;
    p.st = 'ok';
    const pts = d > THREE_R ? 3 : 2;
    const sure = this.locked[team] || this.superShot[team];
    // block check
    if (!sure) for (const q of this.opps(p)) {
      if (q.y > 0.22 && dist(p.pos, q.pos) < 1.45 && q.st === 'ok') {
        if (Math.random() < 0.2 + this.stat(q, 'defense') * 0.045 - (layup ? 0.05 : 0)) return this.blocked(p, q);
      }
    }
    let base = layup ? 0.74 : d < 2.6 ? 0.7 : d <= THREE_R ? 0.45 : 0.35;
    if (d > 8.4) base = Math.max(0.03, base - (d - 8.4) * 0.06);
    const sh = this.stat(p, 'shooting');
    const rating = 0.72 + sh * 0.075;
    const tm = layup ? 1.15 : quality === 'perfect' ? 1.55 : quality === 'good' ? 1.05 : 0.5;
    const ct = this.contest(p);
    const streak = p.streak >= 3 ? 1.15 : p.streak <= -3 ? 0.9 : 1;
    const clutch = (this.half === 2 && this.clock < 30) || this.score[team] >= WIN - 3 || this.sudden ? 1 + (this.stat(p, 'clutch') - 5) * 0.03 : 1;
    let prob = clamp(base * rating * tm * (1 - ct) * streak * clutch, 0.03, 0.96);
    const make = sure || Math.random() < prob;
    const isSuper = this.superShot[team], isLock = this.locked[team] && !isSuper;
    if (isSuper) this.superShot[team] = false; else if (this.locked[team]) this.locked[team] = false;
    if (this.isUser(p)) {
      if (quality === 'perfect' && !layup) { this.stats.perfect++; this.addHype(0, 8, p); }
      if (!layup) {
        const tl = quality === 'perfect' ? 'PERFECT' : p.charge < 0.8 ? (quality === 'good' ? 'A BIT EARLY' : 'TOO EARLY') : (quality === 'good' ? 'A BIT LATE' : 'TOO LATE');
        const cl = ct > 0.33 ? 'SMOTHERED' : ct > 0.14 ? 'CONTESTED' : 'OPEN';
        const fx = p.pos.x, fz = p.pos.z;
        bubbles.say(() => ({ x: fx, y: 3.5, z: fz }), sure ? 'LOCKED IN' : `${tl} · ${cl}`, 1.1, 'fb ' + (quality === 'perfect' || sure ? 'good' : quality === 'bad' ? 'bad' : ''));
      }
      this.propEvent('release', { perfect: quality === 'perfect' && !layup });
    }
    const to = new THREE.Vector3(hp.x, HOOPY, 0);
    if (!make) { const a = rand(Math.PI * 2); to.x += Math.cos(a) * 0.25; to.z += Math.sin(a) * 0.25; }
    b.state = 'shot'; b.holder = null;
    b.shot = { t: 0, T: layup ? 0.45 : 0.72 + d * 0.045, from: b.pos.clone(), to, H: layup ? 0.6 : 1.3 + d * 0.16, make, pts, shooter: p, kind: layup ? 'layup' : pts === 3 ? 'three' : 'mid', trail: isSuper ? 0x3ddc6a : isLock ? 0xffc531 : p.streak >= 3 ? 0xff7a1a : 0 };
    p.charge = 0; p.bob.armsUpT = 1; setTimeout(() => { p.bob.armsUpT = 0; }, 350);
  }
  blocked(p, q) {
    const b = this.ball; p.st = 'ok';
    b.state = 'loose'; b.holder = null; b.t = 0;
    const away = norm(p.pos.x - q.pos.x, p.pos.z - q.pos.z);
    b.vel.set(away.x * rand(3, 6), rand(2, 4), away.z * rand(3, 6) + rand(-2, 2));
    this.shake = 0.5; this.hitstop = 0.08; sfx('block'); banner('BLOCKED!', q.def.name, this.col[q.team], 1.1);
    this.addHype(q.team, 20, q); p.bob.setExpr('shock', 1.5); q.bob.setExpr('happy', 1.5);
    if (q.team === 0) this.stats.blocks++;
    this.crowdSay(pick(['GET THAT OUTTA HERE!', 'NOT IN MY HOUSE!', 'SIT DOWN!']));
    p.streak = Math.min(-1, p.streak - 1);
  }
  drive(p) {
    if (p.st !== 'ok' || this.ball.holder !== p) return;
    const du = this.stat(p, 'dunking');
    if (du >= 6) {
      const hp = this.hoop(p.team), d = this.dir(p.team);
      p.st = 'air'; p.stT = 0; p.from = { x: p.pos.x, z: p.pos.z }; p.to = { x: hp.x - d * 0.55, z: p.pos.z * 0.15 };
      p.bob.faceTarget = Math.atan2(hp.x - p.pos.x, -p.pos.z); p.bob.armsUpT = 1;
    } else { p.vy = 4.2; this.release(p, 'good', true); }
  }
  finishDunk(p) {
    const team = p.team, hp = this.hoop(team);
    p.st = 'ok'; p.vy = 0; p.bob.armsUpT = 0;
    let blocker = null, poster = null;
    for (const q of this.opps(p)) { const d = Math.hypot(q.pos.x - hp.x, q.pos.z); if (d < 1.9 && q.st === 'ok') { poster = q; if (Math.random() < 0.12 + this.stat(q, 'defense') * 0.035 - this.stat(p, 'dunking') * 0.012 + (q.y > 0.2 ? 0.15 : 0)) blocker = q; } }
    if (blocker && !this.locked[team] && !this.superShot[team]) return this.blocked(p, blocker);
    const b = this.ball; b.state = 'dead'; b.holder = null; b.pos.set(hp.x, HOOPY - 0.1, 0); b.vel.set(0, -5, 0);
    this.hitstop = 0.16; this.shake = 0.9; this.punch = 1; sfx('dunk');
    if (poster) { poster.bob.setExpr('shock', 2); poster.st = 'down'; poster.stT = 0.9; }
    this.stats.dunks += team === 0 ? 1 : 0;
    this.scored(p, 2, poster ? 'poster' : 'dunk');
  }
  pass(p, to) {
    const b = this.ball; if (b.holder !== p || !to || p.st !== 'ok') return;
    let target = to, stolen = null;
    for (const q of this.opps(p)) {
      if (q.st !== 'ok') continue;
      const ax = to.pos.x - p.pos.x, az = to.pos.z - p.pos.z, L2 = ax * ax + az * az || 1;
      const t = clamp(((q.pos.x - p.pos.x) * ax + (q.pos.z - p.pos.z) * az) / L2, 0, 1);
      const d = Math.hypot(p.pos.x + ax * t - q.pos.x, p.pos.z + az * t - q.pos.z);
      if (t > 0.15 && d < 0.75 && Math.random() < 0.1 + this.stat(q, 'defense') * 0.035) { stolen = q; }
    }
    if (stolen) target = stolen;
    const d = dist(p.pos, target.pos);
    b.state = 'pass'; b.holder = null;
    b.pass = { t: 0, T: clamp(d / 15, 0.18, 0.7), from: b.pos.clone(), to: target, passer: p, stolen: !!stolen };
    if (target.team === 0 && !stolen) this.me = target;
    sfx('pop', 0.6);
  }
  trySteal(q, hnd) {
    if (q.stealCd > 0 || q.st !== 'ok' || !hnd || this.ball.holder !== hnd || hnd.st === 'air') return;
    q.stealCd = 0.9;
    if (dist(q.pos, hnd.pos) > 1.55) { q.st = 'frozen'; q.stT = 0.25; return; }
    if (this.possT < 0.7) return;
    const ch = clamp((this.isUser(q) ? 0.2 : 0.09) + (this.stat(q, 'defense') - this.stat(hnd, 'handles')) * 0.035 + (hnd.st === 'windup' ? 0.1 : 0), 0.05, 0.6);
    if (Math.random() < ch) {
      this.give(q); if (hnd.st === 'windup') hnd.st = 'ok';
      sfx('steal'); banner('STOLEN!', q.def.name, this.col[q.team], 1); this.addHype(q.team, 20, q);
      q.bob.setExpr('happy', 1.2); hnd.bob.setExpr('shock', 1.2);
      if (q.team === 0) { this.stats.steals++; this.parlayLeg('steal'); }
      this.propEvent('steal', { team: q.team });
    } else if (Math.random() < 0.22) {
      q.st = 'frozen'; q.stT = 1.0; this.shotClock = SHOT_CLOCK; sfx('whistle');
      banner('REACH-IN FOUL', `${q.def.name} mistimed it. Shot clock resets`, '#fff', 1.1); this.addHype(hnd.team, 10, hnd);
    } else { q.st = 'frozen'; q.stT = this.isUser(q) ? 0.3 : 0.55; }
  }
  juke(p, dx, dz) {
    if (p.jukeCd > 0 || p.st !== 'ok' || p.stamina < 0.1) return;
    const n = norm(dx, dz); p.dash = { x: n.x, z: n.z, t: 0.17 }; p.jukeCd = 1.2; p.stamina -= 0.1; sfx('pop', 0.5);
    if (this.ball.holder !== p) return;
    for (const q of this.opps(p)) {
      if (q.st !== 'ok' || dist(p.pos, q.pos) > 2.2) continue;
      let ch = clamp(0.3 + (this.stat(p, 'handles') - this.stat(q, 'defense')) * 0.06, 0.08, 0.8);
      if (this.isUser(q)) ch *= 0.5;
      if (Math.random() < ch) {
        q.st = 'down'; q.stT = 1.1; q.bob.setExpr('shock', 1.6); this.slowT = 0.55; sfx('ooh');
        banner('ANKLE BREAKER', `${q.def.name} is on skates`, C.gold, 1.3); this.addHype(p.team, 25, p);
        if (p.team === 0) this.stats.ankles++;
        this.crowdSay("HE'S ON SKATES!");
      }
    }
  }
  signature(p) {
    const team = p.team; if (this.hype[team] < 100) return;
    this.hype[team] = 0;
    const ab = p.def.ability || 'lock', name = abilityName(p.def);
    let note = abilityDesc(p.def);
    if (ab === 'lock') this.locked[team] = true;
    else if (ab === 'sharp') this.sharpT[team] = 8;
    else if (ab === 'juice') { const m = this.mate(p); m.juiceT = 10; m.bob.setRing(C.green); }
    else if (ab === 'chalk') this.chalk[team] = true;
    else if (ab === 'tout') { const [q] = this.nearestOpp(p); if (q) { q.st = 'frozen'; q.stT = 1.6; q.bob.setExpr('shock', 1.8); } bubbles.say(() => ({ x: p.pos.x, y: 3, z: p.pos.z }), pick(p.def.lines || ['LOCK OF THE CENTURY!']).toUpperCase(), 1.8, 'loud'); }
    else if (ab === 'hedge') {
      if (this.bench.length) { const nd = this.bench.shift(); this.bench.push(p.def); note = `${nd.name} checks in for ${p.def.name} with fresh legs`; p.def = nd; this.makeBob(p); p.stamina = 1; p.streak = 0; }
      else p.stamina = 1;
    }
    sfx('power'); this.hitstop = 0.75;
    const s = this.$('h-sig'); s.hidden = false; s.style.setProperty('--tc', this.col[team]);
    s.innerHTML = `<small>SIGNATURE ABILITY · ${esc(p.def.name)}</small><b>${esc(name)}</b><span>${esc(note)}</span>`;
    clearTimeout(this.sigT); this.sigT = setTimeout(() => { s.hidden = true; }, 1700);
  }

  // ------------------------------------------------------------ scoring and capper layer
  covers(side, hs, as) {
    const c = this.cfg;
    return side === 'home' ? hs + c.spread > as : side === 'away' ? hs + c.spread < as : side === 'over' ? hs + as > c.total : hs + as < c.total;
  }
  scored(p, pts, kind) {
    const team = p.team, other = 1 - team, before = this.cfg.pick ? this.covers(this.cfg.pick.side, this.score[0], this.score[1]) : null;
    let bonus = '';
    if (this.chalk[team]) { this.chalk[team] = false; if (this.score[team] < this.score[other]) { pts *= 2; bonus = 'CHALK EATER: DOUBLE'; } else { pts += 1; bonus = 'CHALK EATER +1'; } }
    if (kind === 'super') { pts += 1; }
    this.score[team] += pts; p.pts += pts;
    const three = kind === 'three' || (kind === 'super' && pts >= 4);
    // streaks
    p.streak = Math.max(1, p.streak + 1);
    if (p.streak === 3) { banner('HEATER!', `${p.def.name} has three straight`, this.col[team], 1.5); sfx('fire'); this.crowdSay('HE CANNOT MISS'); }
    else if (kind === 'poster') banner('POSTER!', `${p.def.name} put him on one`, this.col[team], 1.4);
    else if (kind === 'dunk') banner('DUNK!', p.def.name, this.col[team], 1.0);
    else if (kind === 'super') banner('SUPER SHOT', `+${pts} for ${this.names[team]}`, C.green, 1.3);
    else if (bonus) banner(bonus, `+${pts}`, C.gold, 1.2);
    else if (three) banner('CASH! +3', p.def.name, this.col[team], 0.9);
    this.cheer(kind === 'poster' || kind === 'dunk' || three);
    this.addHype(team, three ? 25 : 18, p);
    p.bob.setExpr('happy', 2); for (const q of this.opps(p)) q.bob.setExpr('sad', 1.6);
    if (three && Math.random() < 0.7) this.crowdSay(`"${pick(p.def.lines || ['Cash it!'])}"`);
    // parlay
    if (team === 0) {
      if (three) { this.stats.threes++; this.parlayLeg('three'); }
      const lp = this.ball.lastPass; if (lp && lp.to === p && this.time - lp.time < 6) this.parlayLeg('assist');
    } else if (this.parlay.three || this.parlay.steal || this.parlay.assist) { this.parlay = { three: false, steal: false, assist: false }; }
    // run and steam move
    if (this.run.team === team) this.run.pts += pts; else this.run = { team, pts, steamed: 0 };
    if (this.run.pts >= 6 * (this.run.steamed + 1)) {
      this.run.steamed++; this.liveLine += team === 0 ? -1.5 : 1.5;
      setTimeout(() => { if (this.phase !== 'final') { banner('STEAM MOVE', `Sharp money coming in on ${this.names[team]}`, C.gold, 1.6); sfx('cash'); } }, 900);
    }
    this.propEvent('score', { team, pts, three, kind });
    if (before !== null) { const after = this.covers(this.cfg.pick.side, this.score[0], this.score[1]); this.lastFlip = before && !after ? this.time : this.lastFlip; if (!before && after) this.lastFlip = null; }
    this.ball.lastPass = null;
    // end conditions
    if (this.score[team] >= WIN || this.sudden) return this.finish();
    this.phase = 'dead'; this.phaseT = 1.4; this.nextTeam = other; this.setupInbound(other);
  }
  missed(p) {
    p.streak = Math.min(-1, p.streak - 1);
    if (p.streak === -3) {
      banner('ICE COLD', `${p.def.name} has missed three straight`, '#7fd4ff', 1.5); sfx('ice');
      this.crowdSay(pick(['BRICK!', 'FADE THIS MAN', 'BOOOO']), 2);
    }
    p.bob.setExpr('sad', 1.2);
  }
  parlayLeg(k) {
    if (this.parlay[k]) return;
    this.parlay[k] = true; sfx('pop');
    if (this.parlay.three && this.parlay.steal && this.parlay.assist) {
      this.parlay = { three: false, steal: false, assist: false }; this.parlayHits++; this.superShot[0] = true;
      setTimeout(() => { banner('PARLAY HITS', 'Super shot unlocked: your next shot cannot miss and is worth +1', C.green, 2); sfx('cash'); }, 700);
    }
  }
  makeOffer() {
    const T = [
      { k: 'three', text: 'Next bucket is a three', odds: 150 },
      { k: 'steal', text: 'Your team gets a steal in the next 20 seconds', odds: 200, time: 20 },
      { k: 'dunk', text: 'Your team dunks in the next 25 seconds', odds: 250, time: 25 },
      { k: 'next', text: 'Your team scores the next bucket', odds: 110 },
      { k: 'green', text: 'Perfect release on your next jump shot', odds: 130 },
    ];
    let o = pick(T); if (o.k === 'dunk' && !this.cfg.home.some((d) => d.stats.dunking >= 6)) o = T[0];
    this.offer = Object.assign({ until: this.time + 7 }, o);
    const el = this.$('h-offer'); el.hidden = false; el.className = 'offer';
    el.innerHTML = `<small>LIVE PROP · 1 unit</small><b>${esc(o.text)}</b><span class="odds">+${o.odds}</span><em><kbd>T</kbd> take it</em>`;
    sfx('pop');
  }
  takeOffer() {
    if (!this.offer || this.activeProp) return;
    const o = this.offer; this.offer = null;
    this.activeProp = { k: o.k, text: o.text, odds: o.odds, deadline: o.time ? this.time + o.time : null, result: null };
    const el = this.$('h-offer'); el.className = 'offer taken'; el.innerHTML = `<small>PROP LOCKED · 1 unit to win ${(o.odds / 100).toFixed(1)}</small><b>${esc(o.text)}</b>`;
    sfx('click');
  }
  propEvent(type, e) {
    const a = this.activeProp; if (!a) return;
    let res = null;
    if (type === 'score') { if (a.k === 'three') res = e.three; else if (a.k === 'next') res = e.team === 0; else if (a.k === 'dunk' && e.team === 0 && (e.kind === 'dunk' || e.kind === 'poster')) res = true; }
    if (type === 'steal' && a.k === 'steal' && e.team === 0) res = true;
    if (type === 'release' && a.k === 'green') res = e.perfect;
    if (type === 'time' && a.deadline && this.time > a.deadline) res = false;
    if (type === 'end') res = false;
    if (res === null) return;
    a.result = res; a.units = res ? a.odds / 100 : -1; this.props.push(a); this.activeProp = null;
    const el = this.$('h-offer'); el.className = 'offer ' + (res ? 'won' : 'lost');
    el.innerHTML = `<small>${res ? 'PROP CASHED' : 'PROP LOST'}</small><b>${esc(a.text)}</b><span class="odds">${res ? '+' + a.units.toFixed(1) : '-1.0'}u</span>`;
    if (res) { this.addHype(0, 40); sfx('cash'); }
    clearTimeout(this.offerHide); this.offerHide = setTimeout(() => { if (!this.offer && !this.activeProp) el.hidden = true; }, 2200);
    this.offerT = rand(16, 26);
  }
  finish() {
    if (this.phase === 'final') return;
    this.propEvent('end', {});
    this.phase = 'final'; this.phaseT = 2.6; this.slowT = 1.2; sfx('buzzer'); crowd(false); music(false);
    const won = this.score[0] > this.score[1];
    banner(won ? 'BALLGAME!' : 'FINAL', `${this.names[0]} ${this.score[0]} · ${this.names[1]} ${this.score[1]}`, won ? C.green : C.red, 2.4);
    if (won) sfx('win');
    for (const p of this.P) p.bob.setExpr(p.team === (won ? 0 : 1) ? 'happy' : 'sad', 5);
  }
  result() {
    const c = this.cfg, hs = this.score[0], as = this.score[1], won = hs > as;
    let net = 0; const rows = [];
    let cashed = null, badBeat = false, fade = false;
    if (c.pick) {
      cashed = this.covers(c.pick.side, hs, as); const u = cashed ? c.pick.stake : -c.pick.stake; net += u;
      rows.push(['PICK', c.pick.label, cashed ? 'COVERED' : 'LOST', (u > 0 ? '+' : '') + u.toFixed(1) + 'u', cashed]);
      badBeat = !cashed && this.lastFlip !== null && this.time - this.lastFlip < 14;
      const opp = { home: 'away', away: 'home', over: 'under', under: 'over' };
      if (cashed && c.pick.side === opp[this.G.tipSide || this.G.save.tip]) { fade = true; net += 1; rows.push(['FADE', "Faded Vig's tip of the day", 'CASHED', '+1.0u', true]); }
    }
    for (const p of this.props) { net += p.units; rows.push(['PROP', `${p.text} (+${p.odds})`, p.result ? 'CASHED' : 'LOST', (p.units > 0 ? '+' : '') + p.units.toFixed(1) + 'u', p.result]); }
    if (this.parlayHits) rows.push(['PARLAY', 'Three + steal + assist', 'HIT' + (this.parlayHits > 1 ? ' x' + this.parlayHits : ''), 'SUPER SHOT', true]);
    const grade = net >= 4 ? 'LOCK OF THE NIGHT' : net > 0 ? 'SHARP PLAY' : net === 0 ? (won ? 'NO SWEAT' : 'NO ACTION') : won ? 'SQUARE PLAY' : 'FADE THIS MAN';
    const top = this.P.slice().sort((a, b) => b.pts - a.pts)[0];
    return { won, hs, as, names: this.names, score: `${hs}-${as}`, rows, net, grade, badBeat, fade, stats: this.stats, mvp: top.def, mvpPts: top.pts, line: `${this.names[0]} ${c.spread > 0 ? '+' : ''}${c.spread} · O/U ${c.total}`, home: c.home, away: c.away };
  }

  // ------------------------------------------------------------ flow
  setupInbound(team, snap) {
    const d = this.dir(team);
    const T = this.P.filter((p) => p.team === team), S = this.P.filter((p) => p.team !== team);
    const hnd = team === 0 && this.me && this.me.team === 0 ? this.me : T.slice().sort((a, b) => this.stat(b, 'handles') - this.stat(a, 'handles'))[0];
    const other = T.find((p) => p !== hnd);
    hnd.target = { x: -d * 8.5, z: 0 }; other.target = { x: -d * 2.5, z: Math.random() < 0.5 ? 3.6 : -3.6 };
    S[hnd.i].target = { x: -d * 4.5, z: 0 }; S[other.i].target = { x: d * 0.5, z: other.target.z * 0.8 };
    this.inbounder = hnd;
    if (snap) for (const p of this.P) { p.pos.x = p.target.x; p.pos.z = p.target.z; p.vel.x = p.vel.z = 0; }
  }
  startLive() {
    for (const p of this.P) { p.pos.x = p.target.x; p.pos.z = p.target.z; p.vel.x = p.vel.z = 0; p.st = 'ok'; p.y = 0; p.vy = 0; p.target = null; p.bob.fallT = 0; p.bob.armsUpT = 0; p.ai.spotT = 0; }
    this.possT = 99; this.give(this.inbounder); this.phase = 'live';
  }

  // ------------------------------------------------------------ AI
  aiHandler(p, dt) {
    const hp = this.hoop(p.team), d = dist(p.pos, hp), [, dd] = this.nearestOpp(p), ai = p.ai;
    let w = norm(hp.x - p.pos.x, hp.z - p.pos.z);
    if (dd < 1.9 && d > 2.4) { w = norm(w.x * 0.55 - w.z * ai.side * 0.85, w.z * 0.55 + w.x * ai.side * 0.85); if (Math.abs(p.pos.z) > HW - 1.2) ai.side = -ai.side; }
    if (ai.hold > 0) { ai.hold -= dt; w = { x: 0, z: 0 }; }
    ai.t -= dt;
    if (ai.t <= 0 && this.possT > 0.6) {
      ai.t = 0.3 + rand(0.15);
      if (Math.random() < 0.12) ai.side = -ai.side;
      if (this.hype[p.team] >= 100 && Math.random() < 0.5) { this.signature(p); return w; }
      if (d < 3.1) { this.drive(p); return w; }
      const sh = this.stat(p, 'shooting'), open = dd > 2.1 ? 1.7 : dd > 1.4 ? 0.9 : 0.35;
      let ps = 0;
      if (d > THREE_R && d <= 8.1) ps = (0.06 + sh * 0.05) * open * (sh >= 7 ? 1.3 : 0.6);
      else if (d <= THREE_R) ps = (0.05 + sh * 0.012) * open * (this.stat(p, 'dunking') >= 7 ? 0.5 : 1);
      if (this.shotClock < 3) ps = Math.max(ps, 0.6); if (this.shotClock < 1.3 || (this.half && this.clock < 1.5)) ps = 1;
      if ((this.locked[p.team] || this.superShot[p.team]) && d < 8.6) ps = 1;
      if (Math.random() < ps) { this.startShot(p); return w; }
      const m = this.mate(p), [, md] = this.nearestOpp(m);
      if (m.st === 'ok' && md > 2 && (dist(m.pos, hp) < d - 1 || dd < 1.3) && Math.random() < 0.22) { this.pass(p, m); return w; }
      if (dd < 1.7 && p.jukeCd <= 0 && Math.random() < 0.14) this.juke(p, -w.z * ai.side, w.x * ai.side);
      if (sh >= 7 && d < 8 && d > 6.85 && dd > 1.3 && Math.random() < 0.6) ai.hold = 0.6;
    }
    return { x: w.x, z: w.z, sprint: d > 5 && p.stamina > 0.3 };
  }
  aiOffBall(p, dt) {
    const ai = p.ai, d = this.dir(p.team), hnd = this.ball.holder || (this.ball.pass && this.ball.pass.to) || p;
    ai.spotT -= dt;
    if (ai.spotT <= 0 || !ai.spot) {
      ai.spotT = rand(2, 3.6); let best = null, bs = -1e9;
      for (const s of SPOTS) {
        const pt = { x: d * s[0], z: s[1] }; let sc = Math.min(dist(pt, hnd.pos), 7) + rand(2.5);
        for (const q of this.opps(p)) sc += Math.min(dist(pt, q.pos), 3) * 0.6;
        if (sc > bs) { bs = sc; best = pt; }
      }
      ai.spot = best;
    }
    const dx = ai.spot.x - p.pos.x, dz = ai.spot.z - p.pos.z, m = Math.hypot(dx, dz);
    if (m < 0.4) { const hp = this.hoop(p.team); p.bob.faceTarget = Math.atan2(hnd.pos.x - p.pos.x, hnd.pos.z - p.pos.z) || Math.atan2(hp.x - p.pos.x, 0); return { x: 0, z: 0 }; }
    return { x: dx / m, z: dz / m, sprint: m > 6 && p.stamina > 0.4 };
  }
  aiDefend(p, dt) {
    const b = this.ball, hnd = b.holder, own = this.hoop(1 - p.team); // the hoop this team protects
    if (b.state === 'loose') { const dx = b.pos.x - p.pos.x, dz = b.pos.z - p.pos.z, m = Math.hypot(dx, dz) || 1; if (m < 1.3 && b.pos.y > 2 && b.vel.y < 0 && p.y === 0 && Math.random() < 0.08) p.vy = 5.2; return { x: dx / m, z: dz / m, sprint: p.stamina > 0.2 }; }
    const man = this.P.find((q) => q.team !== p.team && q.i === p.i);
    const onBall = man === hnd || (b.pass && b.pass.to === man);
    const g = norm(own.x - man.pos.x, own.z - man.pos.z);
    const gap = onBall ? 1.3 - this.stat(p, 'defense') * 0.04 : 2.3;
    let tx = man.pos.x + g.x * gap, tz = man.pos.z + g.z * gap;
    if (!onBall && hnd) { tx = lerp(tx, hnd.pos.x, 0.22); tz = lerp(tz, hnd.pos.z, 0.22); }
    const dx = tx - p.pos.x, dz = tz - p.pos.z, m = Math.hypot(dx, dz);
    p.bob.faceTarget = Math.atan2(man.pos.x - p.pos.x, man.pos.z - p.pos.z);
    if (onBall && hnd) {
      const dm = dist(p.pos, hnd.pos);
      if (hnd.st === 'windup' && dm < 2 && !p.ai.jumped && p.y === 0) { p.ai.jumped = true; if (Math.random() < 0.22 + this.stat(p, 'defense') * 0.05) p.vy = 5.4; }
      if (dm < 1.45 && p.stealCd <= 0 && hnd.st === 'ok') { if (Math.random() < 0.18 + (p.team === 1 ? this.diff * 0.05 : 0)) this.trySteal(p, hnd); else p.stealCd = rand(0.7, 1.3); }
    }
    if (m < 0.15) return { x: 0, z: 0 };
    const k = Math.min(1, m / 0.8);
    return { x: dx / m * k, z: dz / m * k, sprint: m > 3 && p.stamina > 0.3 };
  }
  userControl(p, dt) {
    const ax = input.axis(), b = this.ball;
    if (input.pressed('KeyF')) this.signature(p);
    if (b.holder === p) {
      const hp = this.hoop(0), d = dist(p.pos, hp);
      if (input.pressed('Space')) {
        if (d < 3.4 && (input.sprint() || d < 2.1) && p.pos.x < hp.x + 0.4) this.drive(p); else { this.startShot(p); this.userShot = true; }
      } else if (input.pressed('KeyE')) this.pass(p, this.mate(p));
      const dt2 = input.doubleTap();
      if (dt2) this.juke(p, dt2.x, dt2.z);
      else if (input.pressed('KeyQ')) { const a = ax.m > 0.2 ? ax : { x: 1, z: 0 }; this.juke(p, a.x, a.z); }
    } else if (this.poss === 1 || b.state === 'loose') {
      input.doubleTap();
      if (input.pressed('Space') && p.y === 0 && p.jumpCd <= 0) { p.vy = 5.6; p.jumpCd = 0.9; }
      if (input.pressed('KeyQ')) this.trySteal(p, b.holder && b.holder.team === 1 ? b.holder : null);
      if (input.pressed('KeyE') && this.poss === 1) { this.me = this.mate(p); sfx('click'); }
    }
    return { x: ax.x, z: ax.z, sprint: input.sprint() };
  }

  // ------------------------------------------------------------ main update
  update(rdt) {
    const b = this.ball;
    this.shake = Math.max(0, this.shake - rdt * 2.2);
    if (!this.auto && input.pressed('KeyT')) this.takeOffer();
    if (this.hitstop > 0) { this.hitstop -= rdt; this.render(rdt, 0); return; }
    // slow devices: catch up with a few fixed substeps instead of running in slow motion
    const steps = Math.min(4, Math.max(1, Math.ceil(rdt / (1 / 30))));
    for (let i = 0; i < steps && !this.done; i++) { this.step(rdt / steps); if (this.hitstop > 0) break; }
    this.render(rdt, rdt / steps);
  }
  step(rdt) {
    const b = this.ball;
    let dt = Math.min(rdt, 1 / 30);
    if (this.slowT > 0) { this.slowT -= rdt; dt *= 0.3; }
    this.time += dt;

    if (this.phase === 'intro' || this.phase === 'dead' || this.phase === 'half') {
      this.phaseT -= dt;
      for (const p of this.P) {
        if (p.st === 'windup' || p.st === 'air') { p.st = 'ok'; p.bob.armsUpT = 0; }
        p.vy -= GRAV * dt; p.y += p.vy * dt; if (p.y <= 0) { p.y = 0; p.vy = 0; }
        if (p.target) { const dx = p.target.x - p.pos.x, dz = p.target.z - p.pos.z, m = Math.hypot(dx, dz); const sp = Math.min(9, m / Math.max(0.2, this.phaseT - 0.3)); if (m > 0.1) { p.pos.x += dx / m * sp * dt; p.pos.z += dz / m * sp * dt; p.bob.faceTarget = Math.atan2(dx, dz); p.spd = sp; } else p.spd = 0; }
      }
      if (b.state === 'dead' || b.state === 'loose') this.ballPhysics(dt, false);
      else if (b.state === 'held' && b.holder) this.holdBall(dt);
      if (this.phaseT <= 0) {
        if (this.phase === 'half') { this.half = 2; this.clock = HALF_LEN; }
        this.startLive();
      }
    } else if (this.phase === 'final') {
      this.phaseT -= rdt; this.ballPhysics(dt, false);
      for (const p of this.P) { p.spd = 0; p.vy -= GRAV * dt; p.y += p.vy * dt; if (p.y <= 0) { p.y = 0; p.vy = 0; } }
      if (this.phaseT <= 0 && !this.done) { this.done = true; this.G.showSlip(this.result()); }
    } else this.live(dt);
  }
  live(dt) {
    const b = this.ball;
    this.possT += dt;
    if (!this.sudden) this.clock -= dt;
    if (b.state === 'held') this.shotClock -= dt;
    // timers
    for (const t of [0, 1]) if (this.sharpT[t] > 0) this.sharpT[t] -= dt;
    this.propEvent('time', {});
    if (!this.activeProp && !this.auto) {
      this.offerT -= dt;
      if (this.offer && this.time > this.offer.until) { this.offer = null; this.$('h-offer').hidden = true; this.offerT = rand(14, 22); }
      if (!this.offer && this.offerT <= 0 && this.clock > 12) this.makeOffer();
    }
    // who the user controls
    if (b.state === 'loose') { const hm = this.P.filter((p) => p.team === 0), o = hm.find((p) => p !== this.me); if (this.me.team !== 0 || dist(o.pos, b.pos) + 1.5 < dist(this.me.pos, b.pos)) this.me = o; }
    if (this.me.team !== 0) this.me = this.P[0];

    for (const p of this.P) {
      p.stealCd -= dt; p.jukeCd -= dt; p.jumpCd -= dt;
      if (p.juiceT > 0) { p.juiceT -= dt; if (p.juiceT <= 0 && p !== this.me) p.bob.setRing(null); }
      let want = { x: 0, z: 0, sprint: false };
      if (p.st === 'down' || p.st === 'frozen') { p.stT -= dt; p.bob.fallT = p.st === 'down' ? 1 : 0; if (p.stT <= 0) { p.st = 'ok'; p.bob.fallT = 0; } }
      else if (p.st === 'air') {
        p.stT += dt; const s = clamp(p.stT / 0.48); p.pos.x = lerp(p.from.x, p.to.x, s); p.pos.z = lerp(p.from.z, p.to.z, s); p.y = Math.sin(s * Math.PI * 0.62) * 1.5; p.vy = 0;
        if (s >= 1) this.finishDunk(p);
      } else if (p.st === 'windup') {
        p.stT += dt; p.charge = p.stT / 0.75; p.bob.armsUpT = 1;
        if (this.isUser(p)) { if (!input.down('Space') || p.charge >= 1.12) this.release(p, p.charge >= 1.12 ? 'bad' : this.timing(p, p.charge)); }
        else if (p.charge >= p.aiRel) this.release(p, p.aiQ);
      } else {
        if (this.isUser(p)) want = this.userControl(p, dt);
        else if (b.holder === p) want = this.aiHandler(p, dt);
        else if (b.state === 'loose') want = this.aiDefend(p, dt);
        else if (this.poss === p.team) want = this.aiOffBall(p, dt);
        else want = this.aiDefend(p, dt);
      }
      // movement
      if (p.st === 'ok' || p.st === 'windup') {
        const canSprint = want.sprint && p.stamina > 0.04 && (want.x || want.z);
        const spStat = this.stat(p, 'speed');
        const [, nd] = b.holder === p ? this.nearestOpp(p) : [null, 9];
        let sp = (3.5 + spStat * 0.27) * (canSprint ? 1.42 : 1) * (b.holder === p ? (nd < 1.25 ? 0.72 : 0.93) : 1) * (this.sharpT[1 - p.team] > 0 && this.poss !== p.team ? 0.85 : 1);
        if (p.st === 'windup') sp = 0;
        if (canSprint) p.stamina = Math.max(0, p.stamina - dt * 0.3 / (0.7 + spStat * 0.06)); else p.stamina = Math.min(1, p.stamina + dt * 0.17);
        p.sprinting = canSprint;
        p.vel.x = damp(p.vel.x, want.x * sp, 11, dt); p.vel.z = damp(p.vel.z, want.z * sp, 11, dt);
        if (p.dash) { p.dash.t -= dt; p.vel.x = p.dash.x * 13; p.vel.z = p.dash.z * 13; if (p.dash.t <= 0) p.dash = null; }
        p.pos.x += p.vel.x * dt; p.pos.z += p.vel.z * dt;
        if (p.st === 'ok' && (Math.abs(p.vel.x) + Math.abs(p.vel.z) > 0.6) && (b.holder === p || this.poss === p.team || b.state === 'loose' || this.isUser(p))) p.bob.faceTarget = Math.atan2(p.vel.x, p.vel.z);
      }
      if (p.st !== 'air') { p.vy -= GRAV * dt; p.y += p.vy * dt; if (p.y <= 0) { p.y = 0; p.vy = 0; } }
      p.pos.x = clamp(p.pos.x, -HL - 0.6, HL + 0.6); p.pos.z = clamp(p.pos.z, -HW - 0.4, HW + 0.4);
      p.spd = Math.hypot(p.vel.x, p.vel.z);
    }
    // separation
    for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) {
      const a = this.P[i], c = this.P[j]; if (a.st === 'air' || c.st === 'air') continue;
      const dx = c.pos.x - a.pos.x, dz = c.pos.z - a.pos.z, d = Math.hypot(dx, dz);
      if (d < 0.8 && d > 0.001) { const push = (0.8 - d) / 2; a.pos.x -= dx / d * push; a.pos.z -= dz / d * push; c.pos.x += dx / d * push; c.pos.z += dz / d * push; }
    }
    // ball
    if (b.state === 'held') this.holdBall(dt);
    else if (b.state === 'shot') {
      const s = b.shot; s.t += dt; const k = clamp(s.t / s.T);
      b.pos.lerpVectors(s.from, s.to, k); b.pos.y += 4 * s.H * k * (1 - k);
      if (s.trail) this.emitTrail(s.trail);
      if (s.make && !s.slowed && k > 0.5 && (this.sudden || this.score[s.shooter.team] + s.pts >= WIN)) { s.slowed = true; this.slowT = 0.9; this.punch = 1; }
      if (k >= 1) {
        const p = s.shooter;
        if (s.make) {
          sfx('swish'); this.netT = 0.4; b.state = 'dead'; b.vel.set(0, -4, 0);
          this.scored(p, s.pts, s.trail === 0x3ddc6a ? 'super' : s.kind);
        } else {
          sfx('rim'); this.missed(p); b.state = 'loose'; b.t = 0; this.shotClock = SHOT_CLOCK;
          const d = -Math.sign(s.to.x), a = rand(-1.2, 1.2);
          b.vel.set(d * Math.cos(a) * rand(2.2, 4.8), rand(2.5, 5.5), Math.sin(a) * rand(2.2, 4.8));
        }
      }
    } else if (b.state === 'pass') {
      const s = b.pass; s.t += dt; const k = clamp(s.t / s.T);
      const tp = s.to.pos; b.pos.set(lerp(s.from.x, tp.x, k), lerp(s.from.y, 1.3 + s.to.y, k) + Math.sin(k * Math.PI) * 0.5, lerp(s.from.z, tp.z, k));
      if (k >= 1) {
        if (s.stolen) { sfx('steal'); banner('PICKED OFF!', s.to.def.name, this.col[s.to.team], 1); this.addHype(s.to.team, 20, s.to); if (s.to.team === 0) { this.stats.steals++; this.parlayLeg('steal'); } this.propEvent('steal', { team: s.to.team }); }
        else b.lastPass = { from: s.passer, to: s.to, time: this.time };
        const lp = b.lastPass; this.give(s.to); b.lastPass = s.stolen ? null : lp;
      }
    } else this.ballPhysics(dt, true);

    // clocks
    if (this.phase === 'live' && this.shotClock <= 0 && b.state === 'held') {
      sfx('buzzer', 0.6); banner('SHOT CLOCK', `${this.names[1 - this.poss]} ball`, '#fff', 1.1);
      const other = 1 - this.poss; b.holder.streak = Math.min(0, b.holder.streak);
      this.phase = 'dead'; this.phaseT = 1.5; this.me = this.P[0]; this.setupInbound(other);
      if (this.inbounder.team === 0) this.me = this.inbounder;
      b.state = 'dead'; b.holder = null; b.vel.set(0, 0, 0);
    }
    if (this.phase === 'live' && this.clock <= 0 && !this.sudden && b.state !== 'shot') {
      this.clock = 0;
      if (this.half === 1) {
        sfx('buzzer'); banner('HALFTIME', `${this.names[0]} ${this.score[0]} · ${this.names[1]} ${this.score[1]}`, C.gold, 2.4);
        this.phase = 'half'; this.phaseT = 2.8; b.state = 'dead'; b.holder = null; this.setupInbound(1);
      } else if (this.score[0] === this.score[1]) { this.sudden = true; sfx('buzzer'); banner('SUDDEN DEATH', 'Next bucket wins', C.red, 2); }
      else this.finish();
    }
    // tutorial hints for the first game
    if (!this.auto && !this.G.save.w && !this.G.save.l) { this.hintT -= dt; if (this.hintT <= 0 && this.hintI < HINTS.length) { caption(HINTS[this.hintI++], 4.6); this.hintT = 5.4; } }
  }
  holdBall(dt) {
    const b = this.ball, p = b.holder; if (!p) return;
    const f = p.bob.face, fx = Math.sin(f), fz = Math.cos(f);
    if (p.st === 'windup' || p.st === 'air') b.pos.set(p.pos.x + fx * 0.25, p.y + 2.05 * p.bob.ht, p.pos.z + fz * 0.25);
    else {
      const ph = this.time * (7 + p.spd * 0.6), bounce = Math.abs(Math.sin(ph));
      if (this.phase === 'live' && bounce < 0.12 && !this.bounced) { sfx('bounce', 0.35); this.bounced = true; } else if (bounce > 0.5) this.bounced = false;
      b.pos.set(p.pos.x + fx * 0.3 + fz * 0.28, 0.2 + bounce * 0.8, p.pos.z + fz * 0.3 - fx * 0.28);
    }
    if ((this.locked[p.team] || this.superShot[p.team]) && Math.random() < 0.5) this.emitTrail(this.superShot[p.team] ? 0x3ddc6a : 0xffc531);
  }
  ballPhysics(dt, live) {
    const b = this.ball; b.t += dt;
    b.vel.y -= GRAV * dt; b.pos.addScaledVector(b.vel, dt);
    if (b.pos.y < 0.19) { b.pos.y = 0.19; if (Math.abs(b.vel.y) > 1.2) sfx('bounce', 0.4); b.vel.y = Math.abs(b.vel.y) * 0.62; b.vel.x *= 0.82; b.vel.z *= 0.82; if (b.vel.y < 0.6) b.vel.y = 0; }
    if (Math.abs(b.pos.x) > HL + 0.3) { b.pos.x = Math.sign(b.pos.x) * (HL + 0.3); b.vel.x *= -0.6; }
    if (Math.abs(b.pos.z) > HW + 0.2) { b.pos.z = Math.sign(b.pos.z) * (HW + 0.2); b.vel.z *= -0.6; }
    if (!live || b.state !== 'loose') return;
    if (b.t > 0.22) for (const p of this.P.slice().sort((a, c) => dist(a.pos, b.pos) - dist(c.pos, b.pos))) {
      if (p.st !== 'ok') continue;
      if (dist(p.pos, b.pos) < 0.95 && b.pos.y < 2.0 + p.y) { const prev = this.poss; this.give(p); if (p.team !== prev) { this.shotClock = SHOT_CLOCK; this.possT = 0; } sfx('pop', 0.5); return; }
    }
    if (b.t > 7) { const p = this.P.slice().sort((a, c) => dist(a.pos, b.pos) - dist(c.pos, b.pos))[0]; this.give(p); }
  }
  emitTrail(color) {
    const pa = this.trail.geometry.attributes.position, i = this.trailI = (this.trailI + 1) % this.trailN, b = this.ball.pos;
    pa.setXYZ(i, b.x + rand(-0.12, 0.12), b.y + rand(-0.12, 0.12), b.z + rand(-0.12, 0.12)); this.trailLife[i] = 0.5; this.trailMat.color.setHex(color); pa.needsUpdate = true;
  }

  // ------------------------------------------------------------ render-side updates
  render(rdt, dt) {
    const b = this.ball, me = this.me;
    for (const p of this.P) {
      p.bob.group.position.set(p.pos.x, 0, p.pos.z); p.bob.y = p.y / p.bob.ht;
      if (p.st === 'frozen') p.bob.head.rotation.y = Math.sin(this.time * 40) * 0.2; else p.bob.head.rotation.y = 0;
      const isMe = p === me && !this.auto;
      p.bob.setRing(isMe ? C.gold : p.juiceT > 0 ? C.green : null);
      if (dt > 0 || this.phase !== 'live') p.bob.update(dt || rdt * 0.2, p.spd || 0);
    }
    for (const c of this.crowd) { if (c.cheerT > 0) c.cheerT -= rdt; c.armsUpT = c.cheerT > 0 ? 1 : 0; c.y = c.cheerT > 0 ? Math.abs(Math.sin(this.time * 12 + c.t)) * 0.3 : 0; c.update(rdt, 0); }
    b.mesh.position.copy(b.pos); b.mesh.rotation.x += rdt * 6; b.mesh.rotation.z += rdt * 3;
    this.ballShadow.position.set(b.pos.x, 0.03, b.pos.z);
    const glow = b.holder && (this.locked[b.holder.team] || this.superShot[b.holder.team]);
    this.ballMat.emissive.setHex(glow ? (this.superShot[b.holder.team] ? 0x1c7a35 : 0x8a6a00) : 0);
    // trail fade
    const pa = this.trail.geometry.attributes.position; let dirty = false;
    for (let i = 0; i < this.trailN; i++) if (this.trailLife[i] > 0) { this.trailLife[i] -= rdt; pa.setY(i, pa.getY(i) + rdt * 0.8); if (this.trailLife[i] <= 0) pa.setY(i, -100); dirty = true; }
    if (dirty) pa.needsUpdate = true;
    if (this.netT > 0) { this.netT -= rdt; } for (const n of this.nets) n.scale.y = 1 + (this.netT > 0 && Math.sign(n.position.x) === Math.sign(b.pos.x) ? Math.sin(this.netT * 30) * 0.25 : 0);
    // sharp money ghosts
    const sharp = this.sharpT[0] > 0 && !this.auto;
    this.P.filter((p) => p.team === 1).forEach((q, i) => { const g = this.ghosts[i]; g.visible = sharp; if (sharp) g.position.set(q.pos.x + q.vel.x * 0.7, 0.04, q.pos.z + q.vel.z * 0.7); });
    // camera
    const asp = view.w / view.h, far = Math.max(1, 1.5 / asp);
    // pull in when the play settles into a half court, pull out in transition
    this.zoom = damp(this.zoom, this.phase === 'live' ? clamp((Math.abs(b.pos.x) - 3.5) / 4.5) : 0.3, 2.2, rdt);
    this.punch = Math.max(0, this.punch - rdt * 1.3);
    const z = clamp(this.zoom + this.punch * 0.35, 0, 1.3);
    this.camX = damp(this.camX, clamp(b.pos.x * lerp(0.72, 0.86, this.zoom), -9, 9), 3.5, rdt);
    const sh = this.shake * 0.35;
    this.camera.position.set(this.camX + rand(-sh, sh), lerp(11.5, 9.2, z) * far + rand(-sh, sh), lerp(21, 16.4, z) * far);
    this.camera.lookAt(this.camX, 1.0, -0.8);
    // "open" tag over your teammate
    const hd = b.holder, mt = hd && hd === me && !this.auto ? this.mate(me) : null;
    let open = false;
    if (mt && this.phase === 'live') { const [, md] = this.nearestOpp(mt), hp = this.hoop(0); open = md > 2.4 && dist(mt.pos, hp) < 8.5; if (open) this.openTag.position.set(mt.pos.x, 3.3, mt.pos.z); }
    this.openTag.visible = open;
    bubbles.update(this.camera);
    this.updateHud();
  }
  updateHud() {
    const $ = this.$, me = this.me, s = this.score;
    const set = (id, v) => { const e = $(id); if (e._v !== v) { e._v = v; e.textContent = v; } };
    set('h-s0', s[0]); set('h-s1', s[1]);
    const c = Math.max(0, Math.ceil(this.clock));
    set('h-clk', this.sudden ? 'OT' : `${Math.floor(c / 60)}:${String(c % 60).padStart(2, '0')}`);
    set('h-half', this.sudden ? 'NEXT BUCKET WINS' : this.half === 1 ? '1ST HALF' : '2ND HALF');
    set('h-shot', Math.max(0, Math.ceil(this.shotClock))); $('h-shot').classList.toggle('low', this.shotClock < 4);
    const ll = this.liveLine, moved = ll !== this.cfg.spread;
    set('h-line', `LINE  ${this.names[0]} ${ll > 0 ? '+' : ''}${ll.toFixed(1)}   O/U ${this.cfg.total}`); $('h-line').classList.toggle('moved', moved);
    set('h-units', `${this.G.save.units.toFixed(1)}u`);
    if (this.hudMe !== me.def) { this.hudMe = me.def; const a = $('h-av'); a.innerHTML = ''; a.appendChild(avatar(me.def, 44)); set('h-name', me.def.name); set('h-ab', abilityName(me.def)); }
    $('h-stam').style.width = me.stamina * 100 + '%';
    $('h-hype').style.width = this.hype[0] + '%';
    const full = this.hype[0] >= 100; $('h-hype').parentNode.classList.toggle('full', full); set('h-hypel', full ? 'PRESS F: ' + abilityName(me.def) : 'HYPE');
    for (const k of ['three', 'steal', 'assist']) $('c-' + k).classList.toggle('on', this.parlay[k]);
    const tb = document.getElementById('tb-f'); if (tb) tb.classList.toggle('ready', full);
    // shot meter above the shooter
    const m = $('h-meter');
    if (me.st === 'windup' && !this.auto) {
      m.hidden = false; const v = new THREE.Vector3(me.pos.x, 3.3, me.pos.z).project(this.camera);
      m.style.transform = `translate(-50%,-100%) translate(${(v.x * 0.5 + 0.5) * view.w}px,${(-v.y * 0.5 + 0.5) * view.h}px)`;
      const w = this.greenHalf(me), span = 1.12;
      $('h-green').style.left = (0.8 - w) / span * 100 + '%'; $('h-green').style.width = (2 * w) / span * 100 + '%';
      $('h-fill').style.width = Math.min(1, me.charge / span) * 100 + '%';
    } else m.hidden = true;
    const cold = me.streak <= -3, hot = me.streak >= 3;
    $('h-tint').className = 'tint' + (cold ? ' cold' : hot ? ' hot' : '');
  }
  dispose() {
    crowd(false); music(false); this.hud.remove(); bubbles.clear(); caption(null); clearTimeout(this.sigT); clearTimeout(this.offerHide);
    this.scene.traverse((o) => { if (o.geometry && !o.geometry._shared) { /* shared character geometry stays alive */ } });
  }
}
