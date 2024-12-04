import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAOof3KPaGtk4UIJh9l4m93a0kOUcxiWDE",
    authDomain: "appzohar-6e93c.firebaseapp.com",
    projectId: "appzohar-6e93c",
    storageBucket: "appzohar-6e93c.firebasestorage.app",
    messagingSenderId: "137181404242",
    appId: "1:137181404242:web:f21f87a5aa69430899d38b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Credenciales del usuario
const email = "prueba@example.com";
const password = "contraseña123";

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => userCredential.user.getIdToken())
  .then((token) => {
    console.log("Token de acceso:", token);
  })
  .catch((error) => {
    console.error("Error al autenticar:", error.message);
  });
