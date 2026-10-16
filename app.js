if ('serviceWorker' in navigator) {
  const basePath = window.location.pathname.replace(/\/[^/]*\$/, '');
  navigator.serviceWorker.register(`${basePath}/service-worker.js`)
    .then(() => console.log('Service Worker Registered'));
}

document.getElementById('notifyBtn').addEventListener('click', async () => {
  if (!('Notification' in window)) {
    alert('This browser does not support notifications');
    return;
  }
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    alert('Notifications enabled!');
  } else {
    alert('Permission denied or dismissed.');
  }
});

document.getElementById('testBtn').addEventListener('click', async () => {
  if (Notification.permission === 'granted') {
    const reg = await navigator.serviceWorker.ready;
    reg.showNotification('Hello from iPhone!', {
      body: 'This works directly on your lock screen.',
      icon: 'icon-192.png'
    });
  } else {
    alert('Please tap "Enable Notifications" first.');
  }
});
