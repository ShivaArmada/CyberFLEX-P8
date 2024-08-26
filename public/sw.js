// public/sw.js

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/assets/Devicons/CSS.png',
        '/assets/Devicons/Express.png',
        '/assets/Devicons/React.png',
        '/assets/Devicons/Github.png',
        '/assets/Devicons/HTML.png',
        '/assets/Devicons/JS.png',
        '/assets/Devicons/MANGODB.png',
        '/assets/Devicons/Node.png',
        // Ajoutez ici toutes les images importantes
      ]).catch(function(error) {
        console.error('Failed to cache:', error);
      });
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).catch(function() {
        console.error('Failed to fetch:', event.request.url);
      });
    })
  );
});