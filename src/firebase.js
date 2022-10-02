import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "vchat-a8e62.firebaseapp.com",
  projectId: "vchat-a8e62",
  storageBucket: "vchat-a8e62.appspot.com",
  messagingSenderId: "1041955493430",
  appId: "1:1041955493430:web:37e6540cd961a275fbea97"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();