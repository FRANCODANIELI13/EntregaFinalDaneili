import React from "react";

const ItemListContainer = () => {
  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        <Producto title="Anillo" categoria="Categoría A" price={500} >
            <image src={"../Images/Anillo.png"}></image>
        </Producto>
        <Producto title="Collar" categoria="Categoría B" price={600}  >
        <image src={"../Images/Collar.png"}></image>
        </Producto>
      </div>
    </>
  );
}
export default ItemListContainer;