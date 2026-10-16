self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : { title: 'Alert', body: 'New notification!' };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'icon-192.png',
      badge: 'icon-192.png',
      tag: 'default-alert'
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const basePath = new URL(self.registration.scope).pathname;
  event.waitUntil(clients.openWindow(basePath));
});
