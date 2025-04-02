import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuBSvSMzAW_ubqCwvFmCcINcFzJRG0wCs",
    authDomain: "todoapp-1a069.firebaseapp.com",
    projectId: "todoapp-1a069",
    storageBucket: "todoapp-1a069.firebasestorage.app",
    messagingSenderId: "478210088729",
    appId: "1:478210088729:web:265a4b2bf776c51e4e2f88",
    measurementId: "G-YFWLXWYR2V"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

