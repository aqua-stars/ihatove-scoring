const CACHE_NAME = 'ihatove-scoring-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// インストール時にキャッシュを保存
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// オフライン時でもキャッシュから読み込む
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
