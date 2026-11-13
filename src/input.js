// Keyboard + touch input. Touch shows a joystick and buttons that map to the same key codes.
const down = new Set(), pressed = new Set(), released = new Set();
const lastTap = {};
let dtap = null;
const joy = { x: 0, z: 0, id: null, ox: 0, oy: 0 };
export const isTouch = () => window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
const DIRS = { KeyW: [0, -1], ArrowUp: [0, -1], KeyS: [0, 1], ArrowDown: [0, 1], KeyA: [-1, 0], ArrowLeft: [-1, 0], KeyD: [1, 0], ArrowRight: [1, 0] };
let typed = '';
export const input = {
  down: (c) => down.has(c),
  pressed: (c) => pressed.has(c),
  released: (c) => released.has(c),
  anyPressed: () => pressed.size > 0,
  axis() {
    let x = joy.x, z = joy.z;
    for (const k in DIRS) if (down.has(k)) { x += DIRS[k][0]; z += DIRS[k][1]; }
    const m = Math.hypot(x, z);
    if (m > 1) { x /= m; z /= m; }
    return { x, z, m: Math.min(1, m) };
  },
  sprint: () => down.has('ShiftLeft') || down.has('ShiftRight') || Math.hypot(joy.x, joy.z) > 0.93,
  doubleTap() { const d = dtap; dtap = null; return d; },
  typed: () => typed,
  clearTyped() { typed = ''; },
  endFrame() { pressed.clear(); released.clear(); },
  press(c) { if (!down.has(c)) pressed.add(c); down.add(c); },
  release(c) { if (down.has(c)) released.add(c); down.delete(c); },
  reset() { down.clear(); pressed.clear(); released.clear(); joy.x = joy.z = 0; },
};
export function initInput(root) {
  addEventListener('keydown', (e) => {
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) e.preventDefault();
    if (e.repeat) return;
    input.press(e.code);
    if (e.key && e.key.length === 1) typed = (typed + e.key.toLowerCase()).slice(-24);
    if (DIRS[e.code]) {
      const now = performance.now();
      if (lastTap.c === e.code && now - lastTap.t < 260) { dtap = { x: DIRS[e.code][0], z: DIRS[e.code][1] }; lastTap.t = 0; }
      else { lastTap.c = e.code; lastTap.t = now; }
    }
  });
  addEventListener('keyup', (e) => input.release(e.code));
  addEventListener('blur', () => input.reset());

  // touch layer
  const pad = document.createElement('div'); pad.id = 'touch';
  pad.innerHTML = `<div id="joyzone"><div id="joybase"><div id="joyknob"></div></div></div>
  <div id="tbtns">
    <button data-k="KeyF" class="tb sig" id="tb-f">SIG</button>
    <button data-k="KeyT" class="tb" id="tb-t">PROP</button>
    <button data-k="KeyQ" class="tb" id="tb-q">STEAL<br>JUKE</button>
    <button data-k="KeyE" class="tb" id="tb-e">PASS</button>
    <button data-k="Space" class="tb big" id="tb-s">SHOOT</button>
  </div>`;
  root.appendChild(pad);
  if (!isTouch()) pad.hidden = true;
  addEventListener('touchstart', () => { pad.hidden = false; }, { once: true, passive: true });
  const zone = pad.querySelector('#joyzone'), base = pad.querySelector('#joybase'), knob = pad.querySelector('#joyknob');
  const R = 52;
  zone.addEventListener('pointerdown', (e) => {
    joy.id = e.pointerId; joy.ox = e.clientX; joy.oy = e.clientY; zone.setPointerCapture(e.pointerId);
    base.style.left = e.clientX - zone.getBoundingClientRect().left + 'px'; base.style.top = e.clientY - zone.getBoundingClientRect().top + 'px'; base.classList.add('on');
  });
  zone.addEventListener('pointermove', (e) => {
    if (e.pointerId !== joy.id) return;
    let dx = e.clientX - joy.ox, dy = e.clientY - joy.oy; const m = Math.hypot(dx, dy);
    if (m > R) { dx *= R / m; dy *= R / m; }
    joy.x = dx / R; joy.z = dy / R; knob.style.transform = `translate(${dx}px,${dy}px)`;
  });
  const end = (e) => { if (e.pointerId !== joy.id) return; joy.id = null; joy.x = joy.z = 0; knob.style.transform = ''; base.classList.remove('on'); };
  zone.addEventListener('pointerup', end); zone.addEventListener('pointercancel', end);
  pad.querySelectorAll('.tb').forEach((b) => {
    const k = b.dataset.k;
    b.addEventListener('pointerdown', (e) => { e.preventDefault(); input.press(k); b.classList.add('on'); });
    const up = () => { input.release(k); b.classList.remove('on'); };
    b.addEventListener('pointerup', up); b.addEventListener('pointercancel', up); b.addEventListener('pointerleave', up);
    b.addEventListener('contextmenu', (e) => e.preventDefault());
  });
}
export function touchMode(mode) {
  // mode: 'court' | 'lounge' | 'off'
  const pad = document.getElementById('touch'); if (!pad) return;
  pad.dataset.mode = mode;
  const e = document.getElementById('tb-e'), s = document.getElementById('tb-s');
  if (mode === 'lounge') { e.innerHTML = 'TALK<br>ENTER'; } else { e.textContent = 'PASS'; s.textContent = 'SHOOT'; }
}
