// if (navigator.serviceWorker) {
//   navigator.serviceWorker.register('/sw.js')
// }

// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js')

// if (workbox) {
//   console.log('Workbox fungerar! 😎')

//   workbox.precaching.precacheAndRoute(['/index.html'])

//   // ...
// } else {
//   console.log('Workbox kunde inte laddas in! 😕')
// }


// getOnlineStatus().then((isOnline) => {
//   console.log(isOnline ? 'Really online' : 'Offline')
// })

// function getOnlineStatus() {
//   if (navigator.onLine) {
//     return fetch(location.origin, { method: 'HEAD' })
//       .then(() => true)
//       .catch(() => false)
//   }

//   return new Promise((resolve) => resolve(false))
// }
