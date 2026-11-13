export const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, p) => a + (b - a) * p;
export const rand = (a = 1, b) => (b === undefined ? Math.random() * a : a + Math.random() * (b - a));
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
export const damp = (cur, target, rate, dt) => lerp(cur, target, 1 - Math.exp(-rate * dt));
export function angDamp(cur, target, rate, dt) {
  let d = ((target - cur + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
  return cur + d * (1 - Math.exp(-rate * dt));
}
export const C = {
  bg: '#0d0f1a', gold: '#ffc531', home: '#ff7a1a', away: '#19c3b1',
  green: '#3ddc6a', red: '#ff4d5e', ink: '#0d0f1a', paper: '#f6f1e3',
};
export function shade(hex, f) {
  const n = parseInt(hex.slice(1), 16);
  const ch = (s) => clamp(Math.round(((n >> s) & 255) * f), 0, 255);
  return '#' + [16, 8, 0].map((s) => ch(s).toString(16).padStart(2, '0')).join('');
}
export const STAT_KEYS = ['shooting', 'dunking', 'handles', 'speed', 'defense', 'clutch', 'trashTalk'];
export const STAT_SHORT = { shooting: 'SHT', dunking: 'DNK', handles: 'HND', speed: 'SPD', defense: 'DEF', clutch: 'CLT', trashTalk: 'TLK' };
export const ABILITIES = {
  lock: { name: 'THE LOCK', desc: 'Next shot is a guaranteed make' },
  sharp: { name: 'SHARP MONEY', desc: 'See where defenders are going. They contest half as well for 8 seconds' },
  juice: { name: 'JUICE', desc: 'Teammate gets +2 to every stat for 10 seconds' },
  chalk: { name: 'CHALK EATER', desc: 'Next bucket counts double if you are behind, +1 if not' },
  hedge: { name: 'HEDGE', desc: 'Swap in a fresh friend from the bench with full stamina' },
  tout: { name: 'TOUT MODE', desc: 'Loud trash talk freezes the nearest defender' },
};
export const abilityName = (d) => (d.abilityName || (ABILITIES[d.ability] || ABILITIES.lock).name).toUpperCase();
export const abilityDesc = (d) => (ABILITIES[d.ability] || ABILITIES.lock).desc;
export function teamRating(defs) {
  let r = 0;
  for (const d of defs) {
    const s = d.stats;
    r += s.shooting * 1.2 + s.dunking * 0.8 + s.handles + s.speed + s.defense * 1.1 + s.clutch * 0.6 + s.trashTalk * 0.3;
  }
  return r;
}
export function store(key, val) {
  try {
    if (val === undefined) { const v = localStorage.getItem(key); return v ? JSON.parse(v) : null; }
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) { /* storage unavailable */ }
  return null;
}
