import React, { useState } from "react";
import "../styles/carrito.css";

export const Carrito = ({ pokemonesCarrito }) => {

  return (
    <div className="Carrito">
        {pokemonesCarrito.map((item)=>{return(
            <div key={item.id} id="CarritoItem">
            <img id="imgCarrito" src={item.img} alt="" />
            <div class="text">
              <span>{item.name}</span>
            </div>
            <span>{item.cantidad}</span>
            <div>
              <button className="btnDisminuirCantidad">
                -
              </button>
              <button className="btnAumentarCantidad">
                +
              </button>
              <button className="btnEliminar" id="btnEliminar">
                x
              </button>
            </div>
          </div>
        )})}

    </div>
  );
};
