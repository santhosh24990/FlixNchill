// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEtxa750A2HECxqjYLDdlQCK-GlhNbpkA",
  authDomain: "flixnchill-63588.firebaseapp.com",
  projectId: "flixnchill-63588",
  storageBucket: "flixnchill-63588.appspot.com",
  messagingSenderId: "13844034164",
  appId: "1:13844034164:web:671ec89c47336f83cb5721",
  measurementId: "G-GC1PWCL69N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
