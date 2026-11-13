import * as THREE from 'three';
import { sfx } from './audio.js';

export const view = { w: innerWidth, h: innerHeight };
export const root = () => document.getElementById('ui');
export function h(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}
export const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ---------- banners (big skewed arcade callouts)
let bannerEl = null, bannerT = null;
export function banner(title, sub = '', color = 'var(--gold)', dur = 1.6) {
  if (!bannerEl) { bannerEl = h('div', 'banner'); root().appendChild(bannerEl); }
  bannerEl.innerHTML = `<div class="b-title" style="color:${color}">${esc(title)}</div>${sub ? `<div class="b-sub">${esc(sub)}</div>` : ''}`;
  bannerEl.classList.remove('show'); void bannerEl.offsetWidth; bannerEl.classList.add('show');
  clearTimeout(bannerT); bannerT = setTimeout(() => bannerEl.classList.remove('show'), dur * 1000);
}
let capEl = null, capT = null;
export function caption(text, dur = 3.5) {
  if (!capEl) { capEl = h('div', 'caption'); root().appendChild(capEl); }
  if (!text) { capEl.classList.remove('show'); return; }
  capEl.textContent = text; capEl.classList.add('show');
  clearTimeout(capT); if (dur) capT = setTimeout(() => capEl.classList.remove('show'), dur * 1000);
}
let promptEl = null;
export function prompt(text) {
  if (!promptEl) { promptEl = h('div', 'prompt'); root().appendChild(promptEl); }
  if (!text) { promptEl.classList.remove('show'); return; }
  if (promptEl.dataset.t !== text) { promptEl.dataset.t = text; promptEl.innerHTML = text; }
  promptEl.classList.add('show');
}

// ---------- speech bubbles anchored to world positions
const list = [];
const v = new THREE.Vector3();
export const bubbles = {
  say(anchor, text, dur = 2.6, cls = '') {
    for (const b of list) if (b.anchor === anchor) b.until = 0; // one bubble per speaker
    const el = h('div', 'bubble ' + cls); el.textContent = text; root().appendChild(el);
    const b = { el, anchor, until: performance.now() + dur * 1000 };
    list.push(b); return b;
  },
  update(camera) {
    const now = performance.now(), W = view.w, H = view.h;
    for (let i = list.length - 1; i >= 0; i--) {
      const b = list[i];
      if (now > b.until) { b.el.remove(); list.splice(i, 1); continue; }
      const p = b.anchor(); v.set(p.x, p.y, p.z).project(camera);
      if (v.z > 1 || Math.abs(v.x) > 1.15) { b.el.style.opacity = 0; continue; }
      b.el.style.opacity = Math.min(1, (b.until - now) / 250);
      b.el.style.transform = `translate(-50%,-100%) translate(${(v.x * 0.5 + 0.5) * W}px,${(-v.y * 0.5 + 0.5) * H}px)`;
    }
  },
  clear() { for (const b of list) b.el.remove(); list.length = 0; },
};

// ---------- full-screen overlays
let screenEl = null;
export function showScreen(el) { hideScreen(); screenEl = el; el.classList.add('screen'); root().appendChild(el); return el; }
export function hideScreen() { if (screenEl) { screenEl.remove(); screenEl = null; } }
export const screenOpen = () => !!screenEl;
export function btn(label, cls, fn) {
  const b = h('button', 'btn ' + (cls || ''), label); b.type = 'button';
  b.addEventListener('click', (e) => { sfx('click'); fn(e); });
  return b;
}
export function modal(title, bodyEl, onClose) {
  const m = h('div', 'modal-wrap');
  const box = h('div', 'modal');
  box.appendChild(h('h2', '', esc(title)));
  if (typeof bodyEl === 'string') box.appendChild(h('div', 'modal-body', bodyEl)); else { bodyEl.classList.add('modal-body'); box.appendChild(bodyEl); }
  const close = () => { hideScreen(); onClose && onClose(); };
  box.appendChild(btn('Close <kbd>Esc</kbd>', 'ghost', close));
  m.appendChild(box); m._close = close;
  m.addEventListener('click', (e) => { if (e.target === m) close(); });
  return showScreen(m);
}
