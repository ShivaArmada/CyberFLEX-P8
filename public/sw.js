// public/sw.js
/*
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/assets/Devicons/CSS.webp',
        '/assets/Devicons/Express.webp',
        '/assets/Devicons/React.webp',
        '/assets/Devicons/Github.webp',
        '/assets/Devicons/HTML.webp',
        '/assets/Devicons/JS.webp',
        '/assets/Devicons/MANGODB.webp',
        '/assets/Devicons/Node.webp',
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
        // Retourne une réponse de secours en cas d'échec de récupération
        return new Response('Service Unavailable', { status: 503, statusText: 'Service Unavailable' });
      });
    })
  );
}); */