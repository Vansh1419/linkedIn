// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw-CZNmKcMdML5HMfJD5f3_dIVHFPpxKc",
  authDomain: "linkedin-clone-56b36.firebaseapp.com",
  projectId: "linkedin-clone-56b36",
  storageBucket: "linkedin-clone-56b36.appspot.com",
  messagingSenderId: "96694255084",
  appId: "1:96694255084:web:21d156fdc998e9945dd4c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const colRef = collection(db,"posts")
export { colRef, auth };
