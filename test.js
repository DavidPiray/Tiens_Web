import { db } from "./firebase.js"; // Agrega la extensión ".js"
import { collection, addDoc } from "firebase/firestore";

async function addTestProduct() {
  try {
    const docRef = await addDoc(collection(db, "clientes"), {
      nombre: "Producto de prueba",
      descripcion: "Descripción del producto",
      precio: 100,
    });
    console.log("Producto agregado con ID: ", docRef.id);
  } catch (e) {
    console.error("Error agregando documento: ", e);
  }
}

addTestProduct();
