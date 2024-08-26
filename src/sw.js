// Service Worker pour mettre en cache les images
// Crée un fichier sw.js à la racine de ton projet
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
          // Ajoute ici toutes les images importantes
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  