// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-72556.firebaseapp.com",
  projectId: "chatapp-72556",
  storageBucket: "chatapp-72556.appspot.com",
  messagingSenderId: "418224290914",
  appId: "1:418224290914:web:e6433cdbc1379c7c39a53b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();