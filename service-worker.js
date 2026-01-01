self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("agenda-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "login.html",
        "dashboard.html",
        "nova-diaria.html",
        "gastos.html",
        "relatorio.html",
        "estilo.css"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
