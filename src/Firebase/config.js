// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpOEL5Sl8PHzcrwJfyGKYLtAujWj7-NA8",
  authDomain: "web-artistry.firebaseapp.com",
  projectId: "web-artistry",
  storageBucket: "web-artistry.appspot.com",
  messagingSenderId: "547126498398",
  appId: "1:547126498398:web:638bfb1ebf8678888810cf",
  measurementId: "G-VH3Q14QXJ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
