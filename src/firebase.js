// src/firebase.js
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVn8rox_TbXhGFRKP_mW_zjaIHS2mE84E",
  authDomain: "acompanamiento-87e74.firebaseapp.com",
  projectId: "acompanamiento-87e74",
  storageBucket: "acompanamiento-87e74.firebasestorage.app",
  messagingSenderId: "305795840612",
  appId: "1:305795840612:web:20c87f474b0cad842ebd71",
  measurementId: "G-RBKVS897GV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
