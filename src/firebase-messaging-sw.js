importScripts(
  "https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyA8A1NeHb_aB52KX5VeGHbkVNp2XO9Sg8g",
  authDomain: "push-f3649.firebaseapp.com",
  projectId: "push-f3649",
  storageBucket: "push-f3649.appspot.com",
  messagingSenderId: "553749151067",
  appId: "1:553749151067:web:f61717cb7eb6a0b9b1ee7e",
});


const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
});

