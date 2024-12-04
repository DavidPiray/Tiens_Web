import { db } from "../firebase.js";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

// Crear un producto
export async function createProduct(data) {
  try {
    // Validar datos
    if (!data.nombre || !data.descripcion || !data.precio) {
      throw new Error("Todos los campos son obligatorios");
    }

    const docRef = await addDoc(collection(db, "productos"), data);
    console.log("Producto creado con ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error creando producto:", error);
    throw error; // Propaga el error
  }
}

// Leer productos
export async function getProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error leyendo productos:", error);
    throw error;
  }
}

// Actualizar un producto
export async function updateProduct(id, data) {
  try {
    const productRef = doc(db, "productos", id);
    await updateDoc(productRef, data);
    console.log("Producto actualizado:", id);
  } catch (error) {
    console.error("Error actualizando producto:", error);
    throw error;
  }
}

// Eliminar un producto
export async function deleteProduct(id) {
  try {
    const productRef = doc(db, "productos", id);
    await deleteDoc(productRef);
    console.log("Producto eliminado:", id);
  } catch (error) {
    console.error("Error eliminando producto:", error);
    throw error;
  }
}
