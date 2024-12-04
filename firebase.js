// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfV-iwzbcwuxFpBTz3-dhilaLUvBGFVkM",
  authDomain: "tiensweb-e9bc7.firebaseapp.com",
  projectId: "tiensweb-e9bc7",
  storageBucket: "tiensweb-e9bc7.firebasestorage.app",
  messagingSenderId: "415081085565",
  appId: "1:415081085565:web:1789abefbf03be63408f14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
export const db = getFirestore(app); // Exporta la instancia de Firestore
export const storage = getStorage(app); // Exporta la instancia de Storage