// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArzVlUkJcuF07YshODE1uJkTvummuarGg",
  authDomain: "icannovate.firebaseapp.com",
  projectId: "icannovate",
  storageBucket: "icannovate.appspot.com",
  messagingSenderId: "548964184563",
  appId: "1:548964184563:web:a55db6c8b7cb222c8fa286",
  measurementId: "G-VYK1TCZ4WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase();
export {analytics, auth, db}