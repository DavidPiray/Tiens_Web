import { createProduct, getProducts, updateProduct, deleteProduct } from "./src/crud.js";

async function testCrud() {
  try {
    // 1. Crear un producto
    console.log("Creando producto...");
    const productId = await createProduct({
      nombre: "Producto de prueba",
      descripcion: "Este es un producto de prueba",
      precio: 150,
    });

    console.log("Producto creado con ID:", productId);

    // 2. Leer productos
    console.log("Leyendo productos...");
    const products = await getProducts();
    console.log("Productos actuales:", products);

    // 3. Actualizar el producto recién creado
    console.log("Actualizando producto...");
    await updateProduct(productId, { precio: 200 });
    console.log("Producto actualizado.");

    // 4. Eliminar el producto recién creado
    console.log("Eliminando producto...");
    await deleteProduct(productId);
    console.log("Producto eliminado.");
  } catch (error) {
    console.error("Error durante las pruebas CRUD:", error);
  }
}

testCrud();
