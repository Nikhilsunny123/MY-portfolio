// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhE8M08eH_Qpx9lKV914Zh8LzxRFOVL_I",
  authDomain: "nikhilportfolio-26a37.firebaseapp.com",
  projectId: "nikhilportfolio-26a37",
  storageBucket: "nikhilportfolio-26a37.appspot.com",
  messagingSenderId: "579424616158",
  appId: "1:579424616158:web:d26900f024c2ed3d700c4f",
  measurementId: "G-DXJ7C36PKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);
export { db };
