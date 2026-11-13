// Build: bundles src/ into one game.js and writes the static site into dist/.
// Run with:  npm install && node build.mjs
import { build } from 'esbuild';
import fs from 'node:fs';
const out = 'dist';
fs.mkdirSync(out + '/faces', { recursive: true });
await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'iife', target: 'es2020', outfile: out + '/game.js', loader: { '.json': 'json' } });
const page = fs.readFileSync('src/page.html', 'utf8');
const tag = '<script src="game.js"></script>\n';
// standalone site: a complete HTML document
fs.writeFileSync(out + '/index.html', `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no">\n${page.split('<div id="app">')[0]}</head>\n<body>\n<div id="app">${page.split('<div id="app">')[1]}${tag}</body>\n</html>\n`);
// fragment for publishing as a Claude artifact (the host adds the document skeleton)
fs.writeFileSync(out + '/artifact.html', page + tag);
fs.copyFileSync('players.json', out + '/players.json');
if (fs.existsSync('faces')) for (const f of fs.readdirSync('faces')) fs.copyFileSync('faces/' + f, out + '/faces/' + f);
console.log('built', (fs.statSync(out + '/game.js').size / 1024).toFixed(0) + ' KB');
