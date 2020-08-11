importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyCUqN4yd9tN6kkIMhj-rZtxOIfLS138z6I",
    authDomain: "project7a1-expense-tracker.firebaseapp.com",
    databaseURL: "https://project7a1-expense-tracker.firebaseio.com",
    projectId: "project7a1-expense-tracker",
    storageBucket: "project7a1-expense-tracker.appspot.com",
    messagingSenderId: "910997723735",
    appId: "1:910997723735:web:f9b4a9e4b33fc10e5ee112"
})

firebase.messaging()