# Hoop Legends

A browser game: walk around the Lounge, talk trash, then play 2v2 arcade basketball with capper mechanics. Fake units only, no real money.

The playable site is in `docs/` (static files, nothing to install). The source is in `src/`.

This repo is public, so it ships with a made-up placeholder crew. Real names and face photos are kept out of it on purpose.

## Play it

- Host the `docs/` folder anywhere that serves static files (Netlify drop, Vercel, GitHub Pages) and open the link.
- Or run it on your own computer: open a terminal in `docs/`, run `python3 -m http.server 8000`, then open http://localhost:8000
- Double-clicking `index.html` also works, but browsers block local photos and the roster file that way, so you get the built-in placeholder crew.

## Put your friends in

1. Edit `docs/players.json`. One entry per friend: name, look, stats (1 to 10, 45 points total), ability, catchphrases (`lines`), `worstPick`, `beefs`, and where they stand in the Lounge (`spot`). Mark yourself with `"you": true`.
2. Drop a face photo at `docs/faces/<id>.png` where `<id>` matches the entry's `id`. A roughly square photo cropped around the head works best. A cutout with a transparent background looks cleanest.
3. Optional expression photos swap in during play: `faces/<id>_happy.png`, `faces/<id>_shock.png`, `faces/<id>_sad.png`.
4. Refresh the page. No rebuild needed.

Scripted roasts between two friends go in `roasts`. Lines people say after you win, lose or take a bad beat go in `reactions`.

Abilities: `lock`, `sharp`, `juice`, `chalk`, `hedge`, `tout`. Rename one for a friend with `abilityName`.
Lounge spots: `tv`, `bar`, `pool`, `window`, `pacer`.

## Controls

| Action | Keyboard | Phone |
| --- | --- | --- |
| Move | WASD or arrows | Left joystick |
| Sprint | Hold Shift | Push the joystick all the way |
| Shoot | Hold Space, release in the green | SHOOT |
| Dunk or layup | Sprint at the rim and press Space | SHOOT |
| Pass / switch defender | E | PASS |
| Juke | Double-tap a direction | JUKE |
| Steal | Q | STEAL |
| Jump to block | Space on defense | SHOOT |
| Signature ability | F when Hype is full | SIG |
| Take a live prop | T | PROP |
| Talk / enter (Lounge) | E | TALK |
| Pause / mute | Esc / M | |

Secrets: type `bighead`, `night` or a player's nickname on the title screen. There is more hidden in the Lounge.

## Change the game itself

```
npm install
node build.mjs
```

Then copy `dist/index.html` and `dist/game.js` into `docs/`.
