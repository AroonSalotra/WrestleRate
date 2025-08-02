import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXHLkcrrKvXl-zJFZTWTufH00ZSlXmWAM",
  authDomain: "wrestlerate-2d327.firebaseapp.com",
  projectId: "wrestlerate-2d327",
  storageBucket: "wrestlerate-2d327.firebasestorage.app",
  messagingSenderId: "888115079001",
  appId: "1:888115079001:web:7d922e66e14ce363740e48",
  measurementId: "G-Y009144GS0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

const auth = getAuth(app)

export { auth, db }