// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMsUjyZJMIGvBmuU9gh2Qu0vD_u472sX8",
  authDomain: "netflixgpt-13aea.firebaseapp.com",
  projectId: "netflixgpt-13aea",
  storageBucket: "netflixgpt-13aea.firebasestorage.app",
  messagingSenderId: "124373075922",
  appId: "1:124373075922:web:61ce24a96954560f75aa0b",
  measurementId: "G-2RXPWS3VL3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
