// Tiene in memoria l'app, cosi' si apre subito. mazzi.js va sempre prima in rete, per avere i mazzi nuovi.
const CACHE = 'hitparade-v14';
const FILES = ['./', 'index.html', 'bingo.html', 'cartelle.html', 'cartella.html', 'categorie.js', 'regole.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'mazzi.js',
  'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js', 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const mine = url.origin === location.origin || url.hostname === 'cdn.jsdelivr.net';
  if (!mine || e.request.method !== 'GET') return; // Deezer e Spotify: sempre dalla rete
  // i file dell'app sempre prima dalla rete (cosi' gli aggiornamenti arrivano subito); la copia salvata serve solo offline
  const networkFirst = url.origin === location.origin;
  if (networkFirst) {
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request)));
  } else {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});
