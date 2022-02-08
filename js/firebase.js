 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBTHGO4t2VPxt_4yZ3IV6uycBSjDV0wqfw",
   authDomain: "loginshrek.firebaseapp.com",
   projectId: "loginshrek",
   storageBucket: "loginshrek.appspot.com",
   messagingSenderId: "248771935575",
   appId: "1:248771935575:web:d8c0df41a02fa93e2a5212",
   measurementId: "G-30V0L5Z4N8"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 