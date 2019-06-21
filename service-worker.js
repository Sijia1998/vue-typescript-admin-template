importScripts("/vue-typescript-admin-template/precache-manifest.4fca22c3312a8600c6b66838a391e475.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// This is the code piece that GenerateSW mode can't provide for us.
// This code listens for the user's confirmation to update the app.
self.addEventListener('message', (e) => {
  if (e.data) {
    if (e.data === 'skipWaiting') {
      self.skipWaiting()
    }
  }
})

workbox.clientsClaim()

// The precaching code provided by Workbox. You don't need to change this part.
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

