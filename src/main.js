import * as THREE from 'three';
import defaultRoster from '../players.json';
import { initInput, input, touchMode } from './input.js';
import { initAudio, sfx, toggleMute } from './audio.js';
import { loadPhotos, avatar } from './character.js';
import { Lounge } from './lounge.js';
import { Court } from './court.js';
import { h, esc, btn, showScreen, hideScreen, screenOpen, modal, bubbles, caption, prompt, banner, view } from './ui.js';
import { C, STAT_KEYS, STAT_SHORT, abilityName, abilityDesc, teamRating, store, pick, clamp } from './util.js';

const SAVE_KEY = 'hoopLegends.v1';
const G = {
  roster: null, you: null, mode: 'title', lounge: null, court: null, speed: 1, paused: false,
  cheats: { big: new Set(), all: false, night: false },
  save: { units: 10, w: 0, l: 0, slips: [], eggs: {}, tip: null, best: 0, badBeats: 0 },
  headScale(def) { return this.cheats.all || this.cheats.big.has(def.id) ? 1.75 : 1; },
  persist() { store(SAVE_KEY, this.save); },
};
window.__hoop = G;

async function loadRoster() {
  let r = defaultRoster;
  try { const res = await fetch('players.json', { cache: 'no-store' }); if (res.ok) { const j = await res.json(); if (j && Array.isArray(j.players) && j.players.length >= 4) r = j; } } catch (e) { /* opened from a file: use the built-in roster */ }
  r.crew = Object.assign({ title: 'HOOP LEGENDS', homeName: 'LOCKS', awayName: 'FADES', homeColor: C.home, awayColor: C.away, startingUnits: 10 }, r.crew || {});
  r.players.forEach((p, i) => {
    p.id = p.id || 'p' + i; p.name = (p.name || p.id).toUpperCase(); p.look = p.look || {};
    p.stats = Object.assign({ shooting: 6, dunking: 6, handles: 6, speed: 7, defense: 6, clutch: 7, trashTalk: 7 }, p.stats || {});
    p.lines = p.lines && p.lines.length ? p.lines : ['Lock it in.']; p.ability = p.ability || 'lock'; p._jersey = r.crew.homeColor;
  });
  return r;
}

// ------------------------------------------------------------------ screens
function titleScreen() {
  G.mode = 'title'; touchMode('off');
  const el = h('div', 'title');
  el.innerHTML = `<div class="logo"><span>${esc(G.roster.crew.title.split(' ')[0] || 'HOOP')}</span><span class="l2">${esc(G.roster.crew.title.split(' ').slice(1).join(' ') || 'LEGENDS')}</span></div>
  <p class="tag">Walk into the Lounge. Talk trash. Then settle it on the court.</p>`;
  el.appendChild(btn('Walk in <kbd>Enter</kbd>', 'primary', enterLounge));
  el.appendChild(h('p', 'fine', 'Move: WASD or arrows · Talk / enter: E · Mute: M · Units are fake, no real money'));
  el.appendChild(h('p', 'fine psst', 'psst: type a nickname here. Or "bighead". Or "night".'));
  showScreen(el);
}
function checkCheats() {
  const t = input.typed(); if (!t) return;
  let hit = null;
  if (t.endsWith('bighead')) { G.cheats.all = !G.cheats.all; hit = G.cheats.all ? 'BIG HEAD MODE' : 'Normal heads'; }
  else if (t.endsWith('night')) { G.cheats.night = !G.cheats.night; hit = G.cheats.night ? 'NIGHT MODE' : 'Lights on'; }
  else for (const p of G.roster.players) if (t.endsWith(p.id.toLowerCase()) || t.endsWith(p.name.toLowerCase().replace(/^the /, ''))) { if (G.cheats.big.has(p.id)) G.cheats.big.delete(p.id); else G.cheats.big.add(p.id); hit = `${p.name}: giant head ${G.cheats.big.has(p.id) ? 'ON' : 'off'}`; }
  if (hit) { input.clearTyped(); sfx('power'); banner(hit, 'Cheat code', C.gold, 1.4); G.lounge = new Lounge(G); G.save.eggs.cheat = 1; G.persist(); }
}
function enterLounge(result) {
  initAudio(); hideScreen(); bubbles.clear(); prompt(null);
  if (G.court) { G.court.dispose(); G.court = null; }
  G.mode = 'lounge'; touchMode('lounge');
  G.lounge.enter(result && result.won !== undefined ? result : null);
}
G.enterLounge = enterLounge;

function statBars(d) {
  return `<div class="stats">${STAT_KEYS.map((k) => `<div><i>${STAT_SHORT[k]}</i><span class="sbar"><b style="width:${d.stats[k] * 10}%"></b></span><em>${d.stats[k]}</em></div>`).join('')}</div>`;
}
function card(d, small) {
  const c = h('div', 'pcardx' + (small ? ' small' : ''));
  c.appendChild(avatar(d, small ? 54 : 72));
  const body = h('div', 'pbody', `<b>${esc(d.name)}</b>${small ? '' : `<p>${esc(d.bio || '')}</p>`}${statBars(d)}<div class="abil"><span>${esc(abilityName(d))}</span>${small ? '' : ' ' + esc(abilityDesc(d))}</div>${small || !d.worstPick ? '' : `<p class="worst">Worst pick: ${esc(d.worstPick)}</p>`}`);
  c.appendChild(body); return c;
}
G.showCards = () => {
  const grid = h('div', 'cardgrid'); G.roster.players.forEach((d) => grid.appendChild(card(d)));
  modal('LOCKER ROOM', grid);
};

function lineFor(home, away) {
  const diff = teamRating(home) - teamRating(away), m = Math.round(Math.abs(diff) * 0.3) + 0.5;
  const off = [...home, ...away].reduce((a, d) => a + d.stats.shooting + d.stats.dunking * 0.6 - d.stats.defense * 0.5, 0);
  return { spread: diff >= 0 ? -m : m, total: clamp(Math.round(36 + (off - 22) * 0.25), 31, 40) + 0.5 };
}
G.openMatchup = () => {
  const R = G.roster, P = R.players, you = G.you;
  const beefs = (you.beefs || []).map((id) => P.find((p) => p.id === id)).filter(Boolean);
  const rest = P.filter((p) => p !== you && !beefs.includes(p));
  const slots = [you, rest[0] || P[1], beefs[0] || rest[1] || P[2], beefs[1] || rest[2] || rest[1] || P[3]];
  // make sure all four are distinct
  for (let i = 0; i < 4; i++) if (slots.indexOf(slots[i]) !== i || !slots[i]) slots[i] = P.find((p) => !slots.includes(p));
  let sel = 1, pickSide = null;
  const el = h('div', 'matchup');
  const draw = () => {
    const home = [slots[0], slots[1]], away = [slots[2], slots[3]], ln = lineFor(home, away);
    el.innerHTML = `<h1>THE MATCHUP</h1>`;
    const row = h('div', 'teams');
    [0, 1].forEach((t) => {
      const tm = h('div', 'team', `<h3 style="color:${t ? R.crew.awayColor : R.crew.homeColor}">${esc(t ? R.crew.awayName : R.crew.homeName)}${t ? '' : ' · YOU'}</h3>`);
      [0, 1].forEach((i) => { const k = t * 2 + i, s = h('button', 'slot' + (sel === k ? ' sel' : '')); s.type = 'button'; s.appendChild(card(slots[k], true)); if (k === 0) s.appendChild(h('span', 'youtag', 'YOU START WITH THE BALL')); s.addEventListener('click', () => { sel = k; sfx('click'); draw(); }); tm.appendChild(s); });
      row.appendChild(tm); if (!t) row.appendChild(h('div', 'vs', 'VS'));
    });
    el.appendChild(row);
    el.appendChild(h('p', 'fine', 'Tap a slot above, then tap a player below to put them in it.'));
    const grid = h('div', 'pickgrid');
    P.forEach((d) => {
      const b = h('button', 'mini' + (slots.includes(d) ? ' used' : '')); b.type = 'button'; b.appendChild(avatar(d, 40)); b.appendChild(h('span', '', esc(d.name)));
      b.addEventListener('click', () => { const at = slots.indexOf(d); if (at >= 0) slots[at] = slots[sel]; slots[sel] = d; sfx('click'); draw(); });
      grid.appendChild(b);
    });
    el.appendChild(grid);
    const fav = ln.spread < 0;
    const lb = h('div', 'linebox', `<small>PREGAME LINE</small><div class="ln"><b>${esc(R.crew.homeName)} ${ln.spread > 0 ? '+' : ''}${ln.spread}</b><span>TOTAL ${ln.total}</span></div><p>Lock a pick for 2 units. ${fav ? 'You are the favorite.' : 'You are the underdog.'} Bankroll: ${G.save.units.toFixed(1)}u</p>`);
    const opts = [['home', `${R.crew.homeName} ${ln.spread > 0 ? '+' : ''}${ln.spread}`], ['away', `${R.crew.awayName} ${-ln.spread > 0 ? '+' : ''}${-ln.spread}`], ['over', `OVER ${ln.total}`], ['under', `UNDER ${ln.total}`]];
    const ob = h('div', 'picks');
    opts.forEach(([side, label]) => { const b = h('button', 'pk' + (pickSide === side ? ' on' : ''), esc(label)); b.type = 'button'; b.addEventListener('click', () => { pickSide = pickSide === side ? null : side; sfx(pickSide ? 'cash' : 'click'); draw(); }); ob.appendChild(b); });
    lb.appendChild(ob);
    const tipNames = { home: 'the favorite', away: 'the dog', over: 'the over', under: 'the under' };
    lb.appendChild(h('p', 'fine', `Vig's tip of the day: ${fav ? tipNames[G.save.tip] : tipNames[G.save.tip]}. Fade it and a winning pick pays +1 unit.`));
    el.appendChild(lb);
    const df = h('div', 'diff', '<span>DIFFICULTY</span>');
    [['rookie', 'ROOKIE'], ['pro', 'PRO'], ['allstar', 'ALL-STAR']].forEach(([k, l]) => { const b = h('button', 'pk' + ((G.save.diff || 'pro') === k ? ' on' : ''), l); b.type = 'button'; b.addEventListener('click', () => { G.save.diff = k; G.persist(); sfx('click'); draw(); }); df.appendChild(b); });
    el.appendChild(df);
    const go = h('div', 'row');
    go.appendChild(btn('Back', 'ghost', () => { hideScreen(); }));
    go.appendChild(btn('TIP OFF <kbd>Enter</kbd>', 'primary', () => start(ln)));
    el.appendChild(go);
  };
  const start = (ln) => {
    const home = [slots[0], slots[1]], away = [slots[2], slots[3]];
    // Vig's tip names favorite/dog; translate to home/away
    const fav = ln.spread < 0 ? 'home' : 'away', dog = fav === 'home' ? 'away' : 'home';
    G.tipSide = G.save.tip === 'home' ? fav : G.save.tip === 'away' ? dog : G.save.tip;
    const labels = { home: `${R.crew.homeName} ${ln.spread > 0 ? '+' : ''}${ln.spread}`, away: `${R.crew.awayName} ${-ln.spread > 0 ? '+' : ''}${-ln.spread}`, over: `OVER ${ln.total}`, under: `UNDER ${ln.total}` };
    startGame({ home, away, bench: P.filter((p) => !slots.includes(p)), diff: G.save.diff || 'pro', spread: ln.spread, total: ln.total, pick: pickSide ? { side: pickSide, label: labels[pickSide], stake: 2 } : null });
  };
  el._enter = () => start(lineFor([slots[0], slots[1]], [slots[2], slots[3]]));
  draw(); showScreen(el);
};
function startGame(cfg) {
  initAudio(); hideScreen(); bubbles.clear(); prompt(null); caption(null);
  if (G.court) G.court.dispose();
  G.lastCfg = cfg; G.court = new Court(G, cfg); G.mode = 'court'; G.paused = false; touchMode('court');
}
G.startGame = startGame;

G.showSlip = (r) => {
  G.lastResult = r;
  const s = G.save;
  s.units = Math.round((s.units + r.net) * 10) / 10; if (r.won) s.w++; else s.l++;
  s.slips = (s.slips || []).concat([{ won: r.won, score: r.score, net: r.net, grade: r.grade }]).slice(-12);
  s.best = Math.max(s.best || 0, r.net); if (r.badBeat) s.badBeats = (s.badBeats || 0) + 1;
  s.tip = pick(['home', 'away', 'over', 'under']); G.persist();
  if (r.badBeat) sfx('trombone'); else if (r.net > 0) sfx('cash');
  touchMode('off');
  // draw the slip on a canvas so it can be saved as an image
  const W = 640, rowsH = Math.max(1, r.rows.length) * 58, H = 560 + rowsH;
  const cv = document.createElement('canvas'); cv.width = W * 2; cv.height = H * 2; const x = cv.getContext('2d'); x.scale(2, 2);
  const F = (sz, w = 900, fam = 'system-ui, sans-serif') => { x.font = `${w} ${sz}px ${fam}`; };
  x.fillStyle = C.paper; x.fillRect(0, 0, W, H);
  x.fillStyle = '#1f8f86'; for (let i = 0; i < W; i += 24) { x.beginPath(); x.arc(i + 12, 0, 9, 0, 7); x.fill(); x.beginPath(); x.arc(i + 12, H, 9, 0, 7); x.fill(); }
  x.fillStyle = C.ink; x.textAlign = 'center'; F(44, 400, 'Anton, Impact, system-ui'); x.fillText(G.roster.crew.title + ' · THE SLIP', W / 2, 78);
  F(15, 700, 'ui-monospace, monospace'); x.fillText(`SLIP #${String(s.w + s.l).padStart(4, '0')} · ${new Date().toLocaleDateString()}`, W / 2, 104);
  x.setLineDash([6, 6]); x.strokeStyle = C.ink; x.lineWidth = 1.5; x.beginPath(); x.moveTo(40, 124); x.lineTo(W - 40, 124); x.stroke();
  F(30, 900, 'ui-monospace, monospace'); x.fillText(`FINAL  ${r.names[0]} ${r.hs} · ${r.names[1]} ${r.as}`, W / 2, 170);
  F(15, 600, 'ui-monospace, monospace'); x.fillText(`${r.home.map((d) => d.name).join(' + ')}  vs  ${r.away.map((d) => d.name).join(' + ')}`, W / 2, 198);
  x.fillText(`CLOSING LINE: ${r.line}`, W / 2, 220);
  x.beginPath(); x.moveTo(40, 240); x.lineTo(W - 40, 240); x.stroke();
  let y = 284; x.textAlign = 'left';
  if (!r.rows.length) { F(18, 600, 'ui-monospace, monospace'); x.fillText('No action on this one. Scared money.', 48, y); y += 58; }
  for (const [kind, text, res, u, ok] of r.rows) {
    F(13, 800); x.fillStyle = '#6a6a7a'; x.fillText(kind, 48, y - 14);
    F(18, 700, 'ui-monospace, monospace'); x.fillStyle = C.ink; x.fillText(text.length > 38 ? text.slice(0, 37) + '…' : text, 48, y + 8);
    x.textAlign = 'right'; F(18, 900, 'ui-monospace, monospace'); x.fillStyle = ok ? '#0f8a3c' : '#c21f2f'; x.fillText(`${res}  ${u}`, W - 48, y + 8); x.textAlign = 'left';
    y += 58;
  }
  x.strokeStyle = C.ink; x.beginPath(); x.moveTo(40, y - 14); x.lineTo(W - 40, y - 14); x.stroke(); x.setLineDash([]);
  F(22, 900, 'ui-monospace, monospace'); x.fillStyle = C.ink; x.fillText('NET', 48, y + 26); x.textAlign = 'right'; x.fillStyle = r.net >= 0 ? '#0f8a3c' : '#c21f2f'; x.fillText(`${r.net >= 0 ? '+' : ''}${r.net.toFixed(1)} UNITS`, W - 48, y + 26);
  x.fillStyle = C.ink; F(15, 600, 'ui-monospace, monospace'); x.fillText(`BANKROLL ${s.units.toFixed(1)}u`, W - 48, y + 50);
  x.textAlign = 'left'; const st = r.stats; x.fillText(`3PT ${st.threes} · STL ${st.steals} · BLK ${st.blocks} · DNK ${st.dunks} · ANKLES ${st.ankles}`, 48, y + 84);
  x.fillText(`PLAYER OF THE GAME: ${r.mvp.name} (${r.mvpPts} pts)`, 48, y + 108);
  // grade stamp
  x.save(); x.translate(W / 2, y + 190); x.rotate(-0.07); const good = r.net > 0 || (r.net === 0 && r.won); x.strokeStyle = x.fillStyle = good ? '#0f8a3c' : '#c21f2f'; x.lineWidth = 6; x.globalAlpha = 0.9;
  F(46, 400, 'Anton, Impact, system-ui'); x.textAlign = 'center'; const gw = x.measureText(r.grade).width + 50; x.strokeRect(-gw / 2, -44, gw, 64); x.fillText(r.grade, 0, 4); x.restore();
  if (r.badBeat) { x.save(); x.translate(W - 150, 150); x.rotate(0.2); x.strokeStyle = x.fillStyle = '#c21f2f'; x.lineWidth = 5; F(32, 400, 'Anton, Impact, system-ui'); x.textAlign = 'center'; x.strokeRect(-90, -30, 180, 44); x.fillText('BAD BEAT', 0, 4); x.restore(); }
  x.fillStyle = '#6a6a7a'; x.textAlign = 'center'; F(13, 600); x.fillText('Units are fake. No real money. The beef is real.', W / 2, H - 34);

  const el = h('div', 'slipscreen');
  const img = new Image(); img.alt = `Bet slip: ${r.grade}, net ${r.net.toFixed(1)} units`; img.className = 'slip';
  try { img.src = cv.toDataURL('image/png'); } catch (e) { /* tainted canvas cannot happen with local faces */ }
  el.appendChild(img);
  const side = h('div', 'slipside');
  side.appendChild(h('h2', r.won ? 'pos' : 'neg', r.won ? 'YOU WIN' : 'YOU LOSE'));
  if (r.badBeat) side.appendChild(h('p', 'neg', 'BAD BEAT. You were covering until the very end.'));
  side.appendChild(btn('Run it back <kbd>Enter</kbd>', 'primary', () => startGame(G.lastCfg)));
  side.appendChild(btn('Back to the Lounge', '', () => enterLounge(r)));
  side.appendChild(btn('Save slip image', 'ghost', () => { try { const a = document.createElement('a'); a.href = img.src; a.download = 'hoop-legends-slip.png'; a.click(); } catch (e) {} note.hidden = false; }));
  const note = h('p', 'fine', 'If nothing downloaded, press and hold (or right-click) the slip and choose Save image.'); note.hidden = true; side.appendChild(note);
  el.appendChild(side); el._enter = () => startGame(G.lastCfg);
  if (G.court) { G.court.dispose(); }
  showScreen(el); G.mode = 'slip';
};

function pauseMenu() {
  if (G.mode !== 'court' || screenOpen()) return;
  G.paused = true;
  const el = h('div', 'modal-wrap'), box = h('div', 'modal'); box.appendChild(h('h2', '', 'PAUSED'));
  box.appendChild(h('div', 'modal-body', '<p>Move: WASD · Sprint: Shift · Shoot / jump: Space (hold and release in the green) · Pass / switch: E · Steal: Q · Juke: double-tap a direction · Signature: F · Take prop: T</p>'));
  const resume = () => { hideScreen(); G.paused = false; };
  box.appendChild(btn('Resume <kbd>Esc</kbd>', 'primary', resume));
  box.appendChild(btn('Quit to the Lounge', 'ghost', () => { G.paused = false; enterLounge(null); }));
  el.appendChild(box); el._close = resume; showScreen(el);
}

// ------------------------------------------------------------------ boot
async function boot() {
  const app = document.getElementById('app'), canvas = document.getElementById('gl');
  G.roster = await loadRoster();
  // signs and jerseys are painted with the display face, so wait for it (briefly)
  try { await Promise.race([Promise.all([document.fonts.load('40px Anton'), document.fonts.load('700 20px Figtree')]), new Promise((r) => setTimeout(r, 2500))]); } catch (e) { /* fall back to system fonts */ }
  G.you = G.roster.players.find((p) => p.you) || G.roster.players[0];
  const saved = store(SAVE_KEY); G.save.units = G.roster.crew.startingUnits || 10;
  if (saved) Object.assign(G.save, saved);
  // photos: give them a moment to load so the first frame already shows real faces
  await Promise.race([Promise.all(G.roster.players.map(loadPhotos)), new Promise((r) => setTimeout(r, 1500))]);
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' }); }
  catch (e) { document.getElementById('ui').innerHTML = '<div class="screen title"><p class="tag">This browser could not start 3D graphics (WebGL). Try Chrome, Safari or Firefox on a recent phone or laptop.</p></div>'; return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const resize = () => {
    const r = app.getBoundingClientRect(); view.w = r.width; view.h = r.height; renderer.setSize(r.width, r.height, false);
    for (const m of [G.lounge, G.court]) if (m) { m.camera.aspect = r.width / r.height; m.camera.updateProjectionMatrix(); }
  };
  addEventListener('resize', resize);
  initInput(document.getElementById('ui'));
  G.lounge = new Lounge(G);
  resize();
  titleScreen();
  addEventListener('pointerdown', initAudio, { once: true });
  let last = performance.now(), tAng = 0;
  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.12, (now - last) / 1000); last = now;
    if (input.pressed('KeyM')) caption(toggleMute() ? 'Sound off' : 'Sound on', 1.2);
    if (input.pressed('Escape')) { const s = document.querySelector('.screen'); if (s && s._close) s._close(); else if (G.mode === 'court') pauseMenu(); else if (s && s.classList.contains('matchup')) hideScreen(); }
    if (input.pressed('Enter')) { const s = document.querySelector('.screen'); if (G.mode === 'title') enterLounge(); else if (s && s._enter) s._enter(); }
    let scene, camera;
    if (G.mode === 'court' && G.court) {
      if (!G.paused) for (let i = 0; i < G.speed; i++) G.court.update(G.speed > 1 ? 1 / 30 : dt);
      if (G.court) { scene = G.court.scene; camera = G.court.camera; }
    }
    if (!scene) {
      if (G.mode === 'title') { checkCheats(); }
      G.lounge.update(dt);
      if (G.mode === 'title') { tAng += dt * 0.12; G.lounge.camera.position.set(Math.sin(tAng) * 7, 5.5, 13); G.lounge.camera.lookAt(Math.sin(tAng) * 2, 2, -4); }
      scene = G.lounge.scene; camera = G.lounge.camera;
    }
    if (camera.aspect !== view.w / view.h) { camera.aspect = view.w / view.h; camera.updateProjectionMatrix(); }
    renderer.render(scene, camera);
    input.endFrame();
  }
  requestAnimationFrame(frame);
  document.getElementById('boot').remove();
  // test / attract hook: #auto plays a computer-vs-computer game
  G.autoGame = (speed = 1) => { const P = G.roster.players; G.speed = speed; startGame({ home: [P[0], P[1]], away: [P[2], P[3]], bench: P.slice(4), spread: -1.5, total: 30.5, pick: { side: 'home', label: 'test', stake: 2 }, auto: true }); };
  if (location.hash === '#auto') G.autoGame(1);
}
boot();
