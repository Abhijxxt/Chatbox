import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// MAIN CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBHO-Yb1_O1J4o-QkepWwfU-yAggl3bbrA",
  authDomain: "ghostaudit-95b0d.firebaseapp.com",
  projectId: "ghostaudit-95b0d",
  storageBucket: "ghostaudit-95b0d.firebasestorage.app",
  messagingSenderId: "223366964234",
  appId: "1:223366964234:web:abe0b41f7339075b1f6bf3",
  measurementId: "G-1WPYXVJHYY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
