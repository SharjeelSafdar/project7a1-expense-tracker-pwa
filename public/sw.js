importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js')

const cacheName = 'v1';

// Call install event
this.addEventListener('install', (e) => {
    console.log('Service Worker: Installed')
})

// Call activate event
this.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated');
    // Remove unwanted caches.
    e.waitUntil(
        caches.keys().then( cacheNames => {
            return Promise.all(
                cacheNames.map( cache => {
                    if ( cache !== cacheName ) {
                        console.log('Service Worker: Removing old caches');
                        return caches.delete( cache );
                    }
                    return null;
                })
            )
        })
    )
})

// Call fetch event
this.addEventListener('fetch', (e) => {
    console.log('Service Worker: Fetching');
    e.respondWith(
        fetch(e.request)
            .then( res => {
                // Make a clone of response
                const resClone = res.clone();
                // Open cache
                caches
                    .open(cacheName)
                    .then(cache => {
                        // Add the response to the cache
                        cache.put(e.request, resClone);
                    })
                return res;
            })
            .catch( err => caches.match(e.request).then( res => res ))
    )
})

firebase.initializeApp({
    apiKey: "AIzaSyAIHHrZB-JRqq0XVCp8NicXCE_wZ1CW8Qw",
    authDomain: "expense-tracker-project7-3ff82.firebaseapp.com",
    databaseURL: "https://expense-tracker-project7-3ff82.firebaseio.com",
    projectId: "expense-tracker-project7-3ff82",
    storageBucket: "expense-tracker-project7-3ff82.appspot.com",
    messagingSenderId: "164630845172",
    appId: "1:164630845172:web:28b66170ae54066426b0a1"
})