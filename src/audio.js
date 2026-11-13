// Tiny WebAudio synth: every sound is generated, no audio files needed.
let ctx = null, master = null, muted = false, crowdGain = null;
export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC(); master = ctx.createGain(); master.gain.value = 0.5; master.connect(ctx.destination);
  } catch (e) { ctx = null; }
}
export function toggleMute() { muted = !muted; if (master) master.gain.value = muted ? 0 : 0.5; return muted; }
function tone(f, t0, dur, type = 'sine', vol = 0.2, f2) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(f, t0);
  if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + dur);
  g.gain.setValueAtTime(0.0001, t0); g.gain.linearRampToValueAtTime(vol, t0 + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + dur + 0.02);
}
let noiseBuf = null;
function noise(t0, dur, freq, q, vol, type = 'bandpass') {
  if (!noiseBuf) {
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = noiseBuf; s.loop = true; f.type = type; f.frequency.value = freq; f.Q.value = q;
  g.gain.setValueAtTime(0.0001, t0); g.gain.linearRampToValueAtTime(vol, t0 + Math.min(0.08, dur * 0.3));
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  s.connect(f); f.connect(g); g.connect(master); s.start(t0); s.stop(t0 + dur + 0.05);
}
export function sfx(name, vol = 1) {
  if (!ctx || muted) return;
  const t = ctx.currentTime + 0.01;
  switch (name) {
    case 'bounce': tone(150, t, 0.09, 'sine', 0.25 * vol, 60); break;
    case 'swish': noise(t, 0.28, 3200, 1.2, 0.25 * vol, 'highpass'); break;
    case 'rim': tone(410, t, 0.18, 'triangle', 0.22 * vol, 380); tone(623, t, 0.12, 'triangle', 0.1 * vol); break;
    case 'buzzer': tone(196, t, 0.9, 'sawtooth', 0.16 * vol); tone(247, t, 0.9, 'square', 0.07 * vol); break;
    case 'whistle': tone(2300, t, 0.3, 'square', 0.06 * vol, 2100); break;
    case 'cheer': noise(t, 1.3, 1100, 0.6, 0.3 * vol); noise(t + 0.1, 1.0, 2400, 0.8, 0.12 * vol); break;
    case 'ooh': noise(t, 0.7, 500, 1.5, 0.25 * vol); break;
    case 'cash': tone(1318, t, 0.12, 'square', 0.08 * vol); tone(1760, t + 0.09, 0.3, 'square', 0.08 * vol); break;
    case 'click': tone(700, t, 0.05, 'square', 0.06 * vol); break;
    case 'pop': tone(520, t, 0.08, 'sine', 0.14 * vol, 900); break;
    case 'steal': tone(300, t, 0.1, 'square', 0.1 * vol, 900); break;
    case 'block': tone(120, t, 0.2, 'sawtooth', 0.25 * vol, 50); noise(t, 0.15, 800, 1, 0.3 * vol); break;
    case 'dunk': tone(90, t, 0.35, 'sawtooth', 0.3 * vol, 40); noise(t, 0.3, 300, 0.8, 0.4 * vol); tone(410, t + 0.03, 0.3, 'triangle', 0.15 * vol); break;
    case 'power': [392, 523, 659, 784].forEach((f, i) => tone(f, t + i * 0.07, 0.25, 'sawtooth', 0.09 * vol)); break;
    case 'fire': noise(t, 0.6, 900, 0.5, 0.2 * vol); tone(220, t, 0.5, 'sawtooth', 0.08 * vol, 660); break;
    case 'ice': [1568, 1175, 880].forEach((f, i) => tone(f, t + i * 0.1, 0.3, 'sine', 0.1 * vol)); break;
    case 'trombone': [311, 293, 277, 261].forEach((f, i) => tone(f, t + i * 0.42, i === 3 ? 1.0 : 0.38, 'sawtooth', 0.12 * vol, i === 3 ? 240 : f * 0.97)); break;
    case 'laugh': {
      const base = 380 + Math.random() * 260;
      for (let i = 0; i < 5; i++) tone(base * (1 - i * 0.07), t + i * 0.11, 0.09, 'triangle', 0.12 * vol, base * (0.8 - i * 0.07));
      break;
    }
    case 'talk': tone(260 + Math.random() * 200, t, 0.06, 'triangle', 0.07 * vol); tone(300 + Math.random() * 200, t + 0.07, 0.06, 'triangle', 0.07 * vol); break;
    case 'win': [523, 659, 784, 1047].forEach((f, i) => tone(f, t + i * 0.13, 0.4, 'square', 0.08 * vol)); break;
  }
}
export function crowd(on) {
  if (!ctx) return;
  if (on && !crowdGain) {
    if (!noiseBuf) noise(ctx.currentTime, 0.01, 500, 1, 0.0001);
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(); crowdGain = ctx.createGain();
    s.buffer = noiseBuf; s.loop = true; f.type = 'bandpass'; f.frequency.value = 700; f.Q.value = 0.4;
    crowdGain.gain.value = 0.035; s.connect(f); f.connect(crowdGain); crowdGain.connect(master); s.start();
    crowdGain._src = s;
  } else if (!on && crowdGain) { try { crowdGain._src.stop(); } catch (e) {} crowdGain.disconnect(); crowdGain = null; }
}

// simple generated drum and bass loop for the court
let musicT = null, beat = 0, nextT = 0;
export function music(on) {
  if (!ctx) return;
  if (!on) { clearInterval(musicT); musicT = null; return; }
  if (musicT) return;
  beat = 0; nextT = ctx.currentTime + 0.1;
  const step = 60 / 104 / 2, bass = [55, 55, 65.4, 55, 73.4, 55, 65.4, 82.4];
  musicT = setInterval(() => {
    if (muted) { nextT = ctx.currentTime + 0.1; return; }
    while (nextT < ctx.currentTime + 0.2) {
      const b = beat % 16, t = nextT;
      if (b % 4 === 0 || b === 10) tone(120, t, 0.16, 'sine', 0.28, 42);
      if (b % 8 === 4) noise(t, 0.12, 1800, 0.7, 0.16);
      if (b % 2 === 1) noise(t, 0.03, 7000, 1.5, 0.05, 'highpass');
      if (b % 2 === 0) tone(bass[(beat >> 1) % 8], t, step * 1.7, 'triangle', 0.13);
      beat++; nextT += step;
    }
  }, 60);
}
