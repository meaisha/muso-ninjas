// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFl5tie2EEYv5-7-RS16sKMgbtkris2yo",
  authDomain: "muso-ninjas-3413d.firebaseapp.com",
  projectId: "muso-ninjas-3413d",
  storageBucket: "muso-ninjas-3413d.appspot.com",
  messagingSenderId: "820296909862",
  appId: "1:820296909862:web:b0a4a33a3b506b0da912e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//creates connection to collection
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth }