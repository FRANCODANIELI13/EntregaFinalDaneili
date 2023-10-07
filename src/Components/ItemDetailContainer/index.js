import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productosData from "./Products";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productosData.find((item) => item.id === parseInt(id, 10));

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return <p>No se encontró el producto con ID {id}</p>;
  }

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>ID: {product.id}</p>
      <p>Nombre: {product.nombre}</p>
      <p>Precio: ${product.precio}</p>
      <p>Descripción: {product.descripcion}</p>
    </div>
  );
};

export default ItemDetailContainer;
