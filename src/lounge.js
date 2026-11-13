import * as THREE from 'three';
import { Bobble, labelSprite, avatar } from './character.js';
import { input } from './input.js';
import { sfx } from './audio.js';
import { bubbles, prompt, caption, modal, h, esc, screenOpen, view } from './ui.js';
import { clamp, damp, dist, pick, rand, C, STAT_KEYS, STAT_SHORT, abilityName, abilityDesc, teamRating } from './util.js';
import { PAL, DISPLAY, toon, part, canvasTex, sun, sign } from './style.js';

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
export class Lounge {
  constructor(G) {
    this.G = G;
    const sc = (this.scene = new THREE.Scene());
    const hour = new Date().getHours();
    this.night = hour < 6 || G.cheats.night;
    const N = this.night;
    sc.background = new THREE.Color(N ? '#120f16' : '#2b201b');
    this.camera = new THREE.PerspectiveCamera(46, view.w / view.h, 0.1, 90);
    sc.add(new THREE.HemisphereLight(N ? 0x8088c0 : 0xfff2dc, N ? 0x20202c : 0xb89878, N ? 0.75 : 1.45));
    sun(sc, { color: N ? 0x9aa8ff : 0xffe9c8, intensity: N ? 0.9 : 1.75, pos: [5, 15, 9], size: 20, depth: 50 });
    const M = (c) => toon(c);
    const box = (w, hh, d, mat, x, y, z, ol = 0) => { const m = part(new THREE.BoxGeometry(w, hh, d), mat, ol); m.position.set(x, y, z); sc.add(m); return m; };
    const cyl = (r0, r1, hh, mat, x, y, z, ol = 0, sg = 14) => { const m = part(new THREE.CylinderGeometry(r0, r1, hh, sg), mat, ol); m.position.set(x, y, z); sc.add(m); return m; };

    // floor: two-tone café tiles with small terracotta diamonds
    const fl = canvasTex(256, 256);
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) { fl.x.fillStyle = (i + j) % 2 ? '#ead9b8' : '#dcc7a0'; fl.x.fillRect(i * 128, j * 128, 128, 128); }
    fl.x.fillStyle = '#c9623f'; for (const [px, py] of [[0, 0], [128, 0], [0, 128], [128, 128], [256, 0], [0, 256], [256, 256], [256, 128], [128, 256]]) { fl.x.save(); fl.x.translate(px, py); fl.x.rotate(Math.PI / 4); fl.x.fillRect(-13, -13, 26, 26); fl.x.restore(); }
    fl.x.strokeStyle = 'rgba(90,60,40,.28)'; fl.x.lineWidth = 2; fl.x.strokeRect(0, 0, 128, 128); fl.x.strokeRect(128, 128, 128, 128); fl.x.strokeRect(128, 0, 128, 128); fl.x.strokeRect(0, 128, 128, 128);
    fl.t.wrapS = fl.t.wrapT = THREE.RepeatWrapping; fl.t.repeat.set(21, 14); fl.t.needsUpdate = true;
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(42, 28), toon('#ffffff', { map: fl.t })); floor.rotation.x = -Math.PI / 2; floor.position.set(-2, 0, 5.5); floor.receiveShadow = true; sc.add(floor);
    const rug = new THREE.Mesh(new THREE.CircleGeometry(2.6, 40), toon(PAL.tomato)); rug.rotation.x = -Math.PI / 2; rug.position.set(0, 0.012, 5.6); rug.receiveShadow = true; sc.add(rug);
    const rug2 = new THREE.Mesh(new THREE.RingGeometry(2.05, 2.25, 40), toon(PAL.paper)); rug2.rotation.x = -Math.PI / 2; rug2.position.set(0, 0.018, 5.6); sc.add(rug2);

    // walls: cream plaster over a green wainscot with a wooden rail
    const wallM = M(PAL.wall), lowM = M(PAL.wallLow), woodM = M(PAL.wood), darkWood = M(PAL.woodDark), darkM = M('#231a1c');
    const wall = (w, d, x, z) => { box(w, 7.4, d, wallM, x, 3.7, z); box(w + (d > w ? 0.12 : 0), 1.25, d + (w > d ? 0.12 : 0), lowM, x, 0.625, z); box(w + (d > w ? 0.2 : 0), 0.1, d + (w > d ? 0.2 : 0), darkWood, x, 1.3, z); };
    wall(26.6, 0.3, 0, -8.15); wall(0.3, 16.3, 13.15, 0); wall(0.3, 9.8, -13.15, 3.1); wall(0.3, 1.2, -13.15, -7.4);
    box(0.3, 4.6, 1.6, wallM, -13.15, 5.1, -6.0); // above the hidden door
    // hidden rage-quit room
    box(4, 7.4, 0.3, darkM, -15, 3.7, -8.15); box(0.3, 7.4, 4.6, darkM, -17.15, 3.7, -5.9);
    const curtain = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.8), toon('#7a1626', { transparent: true, opacity: 0.95, side: THREE.DoubleSide }));
    curtain.rotation.y = Math.PI / 2; curtain.position.set(-13.0, 1.4, -5.8); sc.add(curtain);
    const so = sign('STAFF ONLY', 1.4, 0.34, { bg: PAL.tomato, fg: PAL.paper }); so.rotation.y = Math.PI / 2; so.position.set(-12.95, 3.05, -5.8); sc.add(so);
    const pad = new THREE.Group();
    pad.add(part(new THREE.BoxGeometry(0.5, 0.28, 0.12), '#2b2b2b', 0.015));
    for (const s of [-1, 1]) { const g = part(new THREE.CylinderGeometry(0.07, 0.09, 0.3, 8), '#2b2b2b', 0.015); g.position.set(s * 0.22, -0.18, 0); pad.add(g); const st = part(new THREE.SphereGeometry(0.04, 8, 6), s < 0 ? PAL.tomato : PAL.teal); st.position.set(s * 0.12, 0.03, 0.08); pad.add(st); }
    pad.position.set(-16.92, 1.7, -5.9); pad.rotation.set(0.4, Math.PI / 2, 0.5); sc.add(pad);
    for (let i = 0; i < 5; i++) { const cr = new THREE.Mesh(new THREE.PlaneGeometry(0.04, rand(0.4, 0.9)), new THREE.MeshBasicMaterial({ color: 0x000000 })); cr.rotation.y = Math.PI / 2; cr.rotation.x = i * 1.25; cr.position.set(-16.98, 1.7, -5.9); sc.add(cr); }
    const rq = sign('RAGE QUIT HALL OF FAME', 2.6, 0.44, { bg: '#231a1c', fg: PAL.tomato, border: PAL.tomato }); rq.rotation.y = Math.PI / 2; rq.position.set(-16.97, 2.9, -5.9); sc.add(rq);
    const bulb = new THREE.PointLight(0xff4d5e, 6, 7); bulb.position.set(-15, 3, -5.9); sc.add(bulb);

    // bar: wooden counter, cream top, shelves of bottles, an espresso machine
    box(1.1, 1.1, 7.6, woodM, -10.75, 0.55, 1.3, 0.025); box(1.5, 0.12, 7.9, M(PAL.paper), -10.75, 1.16, 1.3, 0.025);
    for (let i = 0; i < 6; i++) box(0.04, 0.9, 0.5, darkWood, -10.18, 0.55, -1.85 + i * 1.26);
    box(0.4, 2.6, 6.2, darkWood, -12.8, 2.1, 1.3, 0.025);
    for (const y of [1.55, 2.3]) box(0.5, 0.07, 5.8, M(PAL.paper2), -12.6, y, 1.3);
    const bottleCols = [PAL.leaf, PAL.mustard, PAL.tomato, PAL.teal, '#8a5fa8', '#d98a3a', PAL.sea];
    for (let i = 0; i < 16; i++) { const y = 1.59 + (i % 2) * 0.75, z = -1.35 + i * 0.36; cyl(0.075, 0.085, 0.32, M(bottleCols[i % 7]), -12.5, y + 0.16, z, 0.012, 8); cyl(0.03, 0.04, 0.14, M(bottleCols[i % 7]), -12.5, y + 0.39, z, 0, 6); }
    box(0.5, 0.5, 0.7, M('#c9ced0'), -10.85, 1.47, -1.6, 0.02); box(0.52, 0.12, 0.72, M(PAL.tomato), -10.85, 1.77, -1.6, 0.02); cyl(0.07, 0.05, 0.1, M(PAL.paper), -10.5, 1.27, -1.5, 0.01, 10);
    for (const z of [0.2, 2.6, 4.4]) { cyl(0.27, 0.27, 0.1, M(PAL.tomato), -9.75, 0.72, z + 0.75, 0.02); cyl(0.04, 0.04, 0.68, M('#59666c'), -9.75, 0.34, z + 0.75, 0, 6); cyl(0.2, 0.22, 0.04, M('#59666c'), -9.75, 0.02, z + 0.75, 0, 10); }
    const barSign = sign('THE VIG', 2.6, 0.75, { bg: PAL.tomato, fg: PAL.paper, sub: 'KAFENEIO · EST. LAST WEEK' }); barSign.rotation.y = Math.PI / 2; barSign.position.set(-12.58, 4.1, 1.3); sc.add(barSign);
    this.tipBoard = canvasTex(512, 256);
    box(0.08, 1.3, 2.4, darkWood, -12.98, 2.6, 5.9, 0.02);
    const tb = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.1), new THREE.MeshBasicMaterial({ map: this.tipBoard.t })); tb.rotation.y = Math.PI / 2; tb.position.set(-12.92, 2.6, 5.9); sc.add(tb);

    // pool table
    box(3.4, 0.24, 2.0, woodM, 5.6, 0.86, 1.9, 0.025); box(3.0, 0.06, 1.6, M('#2f8f5b'), 5.6, 0.99, 1.9);
    for (const [x, z] of [[4.2, 1.2], [7, 1.2], [4.2, 2.6], [7, 2.6]]) box(0.18, 0.76, 0.18, darkWood, x, 0.38, z, 0.02);
    [PAL.paper, PAL.mustard, PAL.tomato, PAL.ink, PAL.teal].forEach((c, i) => { const b = part(new THREE.SphereGeometry(0.075, 12, 10), c, 0.01); b.position.set(4.8 + i * 0.42, 1.095, 1.6 + (i % 3) * 0.25); sc.add(b); });
    const cue = part(new THREE.CylinderGeometry(0.018, 0.028, 2.0, 6), PAL.paper2, 0.01); cue.rotation.set(0, 0.5, Math.PI / 2); cue.position.set(5.9, 1.06, 2.35); sc.add(cue);
    // café tables, one with a backgammon board
    for (const [x, z] of [[-3, 2], [0, 4.5]]) { cyl(0.62, 0.62, 0.07, M(PAL.paper), x, 1.1, z, 0.025, 22); cyl(0.07, 0.07, 1.06, M('#59666c'), x, 0.55, z, 0, 8); cyl(0.34, 0.38, 0.05, M('#59666c'), x, 0.025, z, 0, 14); cyl(0.07, 0.055, 0.09, M(PAL.paper2), x + 0.3, 1.18, z - 0.15, 0.01, 10); cyl(0.07, 0.055, 0.09, M(PAL.paper2), x - 0.28, 1.18, z + 0.2, 0.01, 10); }
    const tav = canvasTex(128, 96); tav.x.fillStyle = '#7a4a28'; tav.x.fillRect(0, 0, 128, 96); tav.x.fillStyle = '#c99a5a'; tav.x.fillRect(6, 6, 54, 84); tav.x.fillRect(68, 6, 54, 84);
    for (let i = 0; i < 12; i++) { const bx = 6 + (i % 6) * 9 + (i % 6 > 2 ? 0 : 0) + (i >= 6 ? 62 : 0); tav.x.fillStyle = i % 2 ? PAL.tomato : PAL.ink; tav.x.beginPath(); tav.x.moveTo(bx, 6); tav.x.lineTo(bx + 9, 6); tav.x.lineTo(bx + 4.5, 40); tav.x.fill(); tav.x.beginPath(); tav.x.moveTo(bx, 90); tav.x.lineTo(bx + 9, 90); tav.x.lineTo(bx + 4.5, 56); tav.x.fill(); } tav.t.needsUpdate = true;
    const tavli = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.04, 0.42), [woodM, woodM, toon('#ffffff', { map: tav.t }), woodM, woodM, woodM]); tavli.position.set(0, 1.16, 4.5); tavli.rotation.y = 0.3; tavli.castShadow = true; sc.add(tavli);
    // pendant lamps
    for (const [x, z, c] of [[5.6, 1.9, PAL.leaf], [-3, 2, PAL.mustard], [0, 4.5, PAL.mustard], [-10.7, 0, PAL.tomato], [-10.7, 2.8, PAL.tomato]]) {
      const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 3, 4), new THREE.MeshBasicMaterial({ color: PAL.ink })); cord.position.set(x, 5.1, z); sc.add(cord);
      const sh = part(new THREE.ConeGeometry(0.42, 0.34, 18, 1, true), toon(c, { side: THREE.DoubleSide }), 0.02); sh.position.set(x, 3.6, z); sc.add(sh);
      const bl = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), new THREE.MeshBasicMaterial({ color: '#fff3c4' })); bl.position.set(x, 3.47, z); sc.add(bl);
      if (N) { const pl = new THREE.PointLight(0xffd9a0, 5, 7); pl.position.set(x, 3.3, z); sc.add(pl); }
    }

    // TV wall
    this.tvs = [];
    [['board', -4.6], ['game', 0], ['you', 4.6]].forEach(([kind, x]) => {
      const tv = canvasTex(640, 360); tv.kind = kind;
      box(4.4, 2.6, 0.16, M(PAL.ink), x, 2.95, -7.93, 0.03);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(4.1, 2.3), new THREE.MeshBasicMaterial({ map: tv.t })); m.position.set(x, 2.95, -7.84); sc.add(m);
      this.tvs.push(tv);
    });
    this.tvT = 0; this.fake = { a: 14, b: 12, tick: 0 };
    // pennants over the screens
    const flagG = new THREE.BufferGeometry(); flagG.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-0.2, 0, 0, 0.2, 0, 0, 0, -0.42, 0]), 3)); flagG.computeVertexNormals();
    const flagC = [PAL.tomato, PAL.mustard, PAL.teal, PAL.paper, PAL.sea];
    for (let i = 0; i < 44; i++) { const u = i / 43, f = new THREE.Mesh(flagG, new THREE.MeshBasicMaterial({ color: flagC[i % 5], side: THREE.DoubleSide })); f.position.set(-12.4 + u * 20.4, 4.95 - Math.abs(Math.sin(u * Math.PI * 3)) * 0.28, -7.9); sc.add(f); }
    // framed worst pick
    this.frameDef = pick(G.roster.players.filter((p) => p.worstPick));
    const fr = canvasTex(256, 340);
    fr.x.fillStyle = PAL.paper; fr.x.fillRect(0, 0, 256, 340); fr.x.fillStyle = PAL.ink; fr.x.font = `30px ${DISPLAY}`; fr.x.textAlign = 'center';
    fr.x.fillText('BET SLIP', 128, 44); fr.x.font = '700 13px monospace'; fr.x.fillText('#000-WORST-EVER', 128, 66);
    for (let i = 0; i < 9; i++) { fr.x.fillStyle = 'rgba(29,23,20,.4)'; fr.x.fillRect(28, 88 + i * 20, 200 - (i * 37) % 70, 7); }
    fr.x.strokeStyle = PAL.tomato; fr.x.lineWidth = 6; fr.x.save(); fr.x.translate(128, 284); fr.x.rotate(-0.15); fr.x.strokeRect(-80, -26, 160, 50); fr.x.fillStyle = PAL.tomato; fr.x.font = `38px ${DISPLAY}`; fr.x.fillText('LOSER', 0, 14); fr.x.restore(); fr.t.needsUpdate = true;
    box(1.56, 2.0, 0.12, M(PAL.mustard), -9.6, 2.9, -7.95, 0.025);
    const frm = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.72), new THREE.MeshBasicMaterial({ map: fr.t })); frm.position.set(-9.6, 2.9, -7.87); sc.add(frm);
    // doorway out to the court: daylight pouring in
    box(3.3, 3.9, 0.22, darkWood, 9.4, 1.95, -7.95, 0.03);
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 3.4), new THREE.MeshBasicMaterial({ color: '#ffd9a0' })); glow.position.set(9.4, 1.7, -7.82); sc.add(glow); this.glow = glow;
    const spill = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 3.2), new THREE.MeshBasicMaterial({ color: '#ffe2b0', transparent: true, opacity: 0.33, depthWrite: false })); spill.rotation.x = -Math.PI / 2; spill.position.set(9.4, 0.02, -6.2); sc.add(spill);
    const ts = sign('TO THE COURT', 3.2, 0.62, { bg: PAL.mustard }); ts.position.set(9.4, 4.25, -7.82); sc.add(ts);
    // betting window with a striped awning, trophy cabinet, locker room door (right wall)
    box(0.6, 2.7, 3.3, M(PAL.teal), 12.75, 1.35, -1.6, 0.025); box(0.2, 1.05, 2.5, toon('#bfe6e2'), 12.42, 1.85, -1.6); box(0.5, 0.1, 3.0, M(PAL.paper), 12.5, 1.25, -1.6, 0.02);
    const aw = canvasTex(128, 32); for (let i = 0; i < 8; i++) { aw.x.fillStyle = i % 2 ? PAL.paper : PAL.tomato; aw.x.fillRect(i * 16, 0, 16, 32); } aw.t.needsUpdate = true;
    const awn = new THREE.Mesh(new THREE.PlaneGeometry(3.5, 1.1), toon('#ffffff', { map: aw.t, side: THREE.DoubleSide })); awn.position.set(12.25, 2.95, -1.6); awn.rotation.set(0, -Math.PI / 2, 0); awn.rotateX(0.75); awn.castShadow = true; sc.add(awn);
    const ws = sign('BETTING WINDOW', 3.2, 0.5, { bg: PAL.paper }); ws.rotation.y = -Math.PI / 2; ws.position.set(12.97, 3.75, -1.6); sc.add(ws);
    box(0.75, 2.3, 2.3, woodM, 12.6, 1.15, 3, 0.025); box(0.5, 1.5, 1.9, toon('#fff0c2', { transparent: true, opacity: 0.45 }), 12.42, 1.35, 3);
    const cup = part(new THREE.CylinderGeometry(0.24, 0.1, 0.5, 14), PAL.mustard, 0.015); cup.position.set(12.4, 1.4, 3); sc.add(cup); cyl(0.14, 0.17, 0.08, M(PAL.ink), 12.4, 1.1, 3, 0, 12);
    const tr = sign('TROPHY CASE', 2.3, 0.44, { bg: PAL.mustard }); tr.rotation.y = -Math.PI / 2; tr.position.set(12.97, 2.95, 3); sc.add(tr);
    box(0.2, 3.1, 1.8, M(PAL.sea), 12.95, 1.55, 6.3, 0.025); cyl(0.05, 0.05, 0.06, M(PAL.mustard), 12.8, 1.5, 5.7, 0, 8);
    const lk = sign('LOCKER ROOM', 2.3, 0.44, { bg: PAL.paper }); lk.rotation.y = -Math.PI / 2; lk.position.set(12.9, 3.5, 6.3); sc.add(lk);
    // posters and plants
    [['TAIL OR FADE', -6.9, PAL.teal, PAL.paper], ['NO REAL MONEY', 6.9, PAL.paper, PAL.tomato]].forEach(([t, x, bg, fg], i) => { const p = sign(t, 1.9, 0.6, { bg, fg }); p.position.set(x, 4.5, -7.98); p.rotation.z = i ? 0.03 : -0.03; sc.add(p); });
    const plant = (x, z, s2 = 1) => { cyl(0.34 * s2, 0.26 * s2, 0.6 * s2, M('#c9623f'), x, 0.3 * s2, z, 0.02); for (const [ox, oy, oz, r] of [[0, 1.1, 0, 0.5], [0.3, 0.85, 0.1, 0.36], [-0.28, 0.9, -0.1, 0.38], [0.05, 1.5, -0.05, 0.34]]) { const l = part(new THREE.IcosahedronGeometry(r * s2, 1), '#4c8a52', 0.025); l.position.set(x + ox * s2, oy * s2, z + oz * s2); sc.add(l); } };
    plant(-12.2, 6.9, 1.1); plant(12.2, -6.9, 1.1); plant(6.9, -7.2, 0.9); plant(-7.4, -7.2, 0.9);

    // ---- people
    const youDef = G.you;
    this.me = new Bobble(youDef, { jersey: G.roster.crew.homeColor, number: youDef.number, headScale: G.headScale(youDef) });
    this.me.pos = { x: 0, z: 5.8 }; this.me.speed = 0; sc.add(this.me.group);
    this.me.setRing(PAL.mustard);
    this.npcs = [];
    const used = {};
    const palette = [PAL.tomato, PAL.mustard, PAL.teal, '#8a5fa8', PAL.leaf, PAL.paper2, '#d9779a', PAL.sea, '#d98a3a'];
    G.roster.players.filter((p) => p !== youDef).forEach((def, i) => {
      let spot = SPOTS[def.spot] ? def.spot : Object.keys(SPOTS)[i % 7];
      used[spot] = used[spot] || 0;
      if (used[spot] >= SPOTS[spot].length) spot = Object.keys(SPOTS).find((k) => (used[k] || 0) < SPOTS[k].length) || 'pacer';
      const s = SPOTS[spot][(used[spot] = (used[spot] || 0) + 1) - 1] || [rand(-6, 6), rand(0, 6), 0];
      const b = new Bobble(def, { jersey: palette[i % palette.length], number: def.number, headScale: G.headScale(def) });
      b.pos = { x: s[0], z: s[1] }; b.home = { x: s[0], z: s[1] }; b.baseFace = s[2]; b.face = b.faceTarget = s[2];
      b.kind = spot; b.cool = rand(0, 2); b.laughT = rand(3, 12); b.greeted = false; b.paceDir = 1;
      const tag = labelSprite(def.name); tag.position.y = 2.72; tag.visible = false; b.group.add(tag); b.tag = tag;
      b.group.position.set(b.pos.x, 0, b.pos.z); sc.add(b.group); this.npcs.push(b);
    });
    const bt = G.roster.bartender || { name: 'VIG', look: {}, lines: ['What can I get you?'] };
    bt.id = bt.id || 'bartender'; bt.stats = bt.stats || {};
    this.bartender = new Bobble(bt, { jersey: PAL.paper, trim: PAL.ink });
    this.bartender.pos = { x: -12.0, z: 1.3 }; this.bartender.face = this.bartender.faceTarget = Math.PI / 2;
    this.bartender.group.position.set(-12.0, 0, 1.3); sc.add(this.bartender.group);
    const btag = labelSprite(bt.name + ' · BARTENDER', PAL.ink, PAL.mustard); btag.position.y = 2.75; this.bartender.group.add(btag);

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
    x.fillStyle = '#23423c'; x.fillRect(0, 0, 512, 256);
    x.fillStyle = PAL.paper; x.textAlign = 'center'; x.font = `38px ${DISPLAY}`; x.fillText("VIG'S TIP OF THE DAY", 256, 72);
    x.fillStyle = PAL.mustard; x.font = `58px ${DISPLAY}`; x.fillText(names[G.save.tip], 256, 152);
    x.fillStyle = '#bfe0d6'; x.font = '700 22px Figtree, system-ui'; x.fillText('(record this year: 3-41)', 256, 205); t.t.needsUpdate = true;
  }
  drawTVs(force) {
    const G = this.G, R = G.roster, f = this.fake;
    for (const tv of this.tvs) {
      if (!force && tv.kind !== 'game') continue;
      const x = tv.x; x.fillStyle = '#1c3a35'; x.fillRect(0, 0, 640, 360);
      x.textAlign = 'left'; x.fillStyle = PAL.mustard; x.font = `38px ${DISPLAY}`;
      if (tv.kind === 'board') {
        if (!force) continue;
        x.fillText('THE LINE BOARD', 24, 48); x.font = `24px ${DISPLAY}`;
        const rated = R.players.map((p) => ({ p, r: teamRating([p]) })).sort((a, b) => b.r - a.r).slice(0, 9);
        const top = rated[0].r;
        rated.forEach(({ p, r }, i) => {
          const odds = Math.round((top - r) * 28) + (i === 0 ? -140 : 110);
          x.fillStyle = i % 2 ? '#cfe3d8' : PAL.paper; x.fillText(p.name.slice(0, 16), 24, 86 + i * 30);
          x.fillStyle = odds < 0 ? '#8fe0a0' : PAL.mustard; x.textAlign = 'right'; x.fillText((odds > 0 ? '+' : '') + odds, 616, 86 + i * 30); x.textAlign = 'left';
        });
      } else if (tv.kind === 'game') {
        x.fillStyle = '#2f9a92'; x.fillRect(0, 60, 640, 230);
        x.strokeStyle = 'rgba(255,255,255,.5)'; x.lineWidth = 3; x.strokeRect(20, 75, 600, 200); x.beginPath(); x.moveTo(320, 75); x.lineTo(320, 275); x.stroke(); x.beginPath(); x.arc(320, 175, 40, 0, 7); x.stroke();
        for (let i = 0; i < 4; i++) { x.fillStyle = i < 2 ? PAL.tomato : PAL.paper; x.beginPath(); x.arc(320 + Math.sin(f.tick * 0.7 + i * 2) * 240, 175 + Math.cos(f.tick * 0.9 + i * 1.7) * 70, 12, 0, 7); x.fill(); }
        x.fillStyle = PAL.paper; x.font = `34px ${DISPLAY}`; x.fillText(`${R.crew.homeName} ${f.a}`, 24, 44); x.textAlign = 'right'; x.fillText(`${f.b} ${R.crew.awayName}`, 616, 42); x.textAlign = 'center'; x.fillStyle = PAL.tomato; x.font = `22px ${DISPLAY}`; x.fillText('● LIVE', 320, 42);
        x.fillStyle = PAL.mustard; x.fillRect(0, 300, 640, 60); x.fillStyle = PAL.ink; x.font = `26px ${DISPLAY}`; x.textAlign = 'left';
        const tick = R.players.map((p, i) => `${p.name} ${['o2.5 threes', 'u1.5 dunks', 'to talk trash -500', 'o0.5 excuses', 'first bucket +450'][i % 5]}`).join('   ·   ');
        const w = x.measureText(tick).width + 100; x.fillText(tick, 640 - ((f.tick * 60) % (w + 640)), 338);
      } else {
        if (!force) continue;
        x.fillText('YOUR ACTION', 24, 48); x.fillStyle = PAL.paper; x.font = `28px ${DISPLAY}`;
        x.fillText(`Bankroll: ${G.save.units.toFixed(1)} units`, 24, 92); x.fillText(`Record: ${G.save.w}-${G.save.l}`, 24, 128);
        x.font = `22px ${DISPLAY}`;
        (G.save.slips || []).slice(-5).reverse().forEach((s, i) => { x.fillStyle = s.net >= 0 ? '#8fe0a0' : '#ff8f7a'; x.fillText(`${s.won ? 'W' : 'L'} ${s.score}  ${s.net >= 0 ? '+' : ''}${s.net.toFixed(1)}u  ${s.grade}`, 24, 176 + i * 32); });
        if (!(G.save.slips || []).length) { x.fillStyle = '#bfe0d6'; x.fillText('No slips yet. Go play a game.', 24, 176); }
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
      n.tag.visible = d < 4.6 && this.G.mode !== 'title';
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
    this.glow.material.color.setHSL(0.1, 1, 0.8 + Math.sin(now / 400) * 0.04);

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
