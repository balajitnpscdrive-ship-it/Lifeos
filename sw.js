self.addEventListener('fetch', (event) => {
  // This is a pass-through service worker
  event.respondWith(fetch(event.request));
});
