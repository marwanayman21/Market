// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-DhhxX1xledFjYWKFmwa8rzByWdHNvwM",
  authDomain: "mm-auth-27440.firebaseapp.com",
  projectId: "mm-auth-27440",
  storageBucket: "mm-auth-27440.appspot.com",
  messagingSenderId: "362170543090",
  appId: "1:362170543090:web:4ad2effa57c1f7bdc8196b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
