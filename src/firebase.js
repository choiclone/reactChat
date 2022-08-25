// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5AU-TnwvK1OnJDA-tvYYWB2pROjHNa2Q",
  authDomain: "chat-test-496ee.firebaseapp.com",
  projectId: "chat-test-496ee",
  storageBucket: "chat-test-496ee.appspot.com",
  messagingSenderId: "707662025539",
  appId: "1:707662025539:web:0fdffe0ff33a4ad4c295f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);