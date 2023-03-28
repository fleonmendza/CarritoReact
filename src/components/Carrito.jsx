import "../styles/carrito.css";

export const Carrito = ({ pokemonesCarrito, addQuantity, dimissQuantity, deleteItem }) => {

  return (

    <div className="Carrito">
      {(pokemonesCarrito.length === 0)? (<h2 className="titleCarrito">Carrito Vacio</h2>) : (pokemonesCarrito.map((item) => {
        return (
          <div key={item.id} className="CarritoItem">
            <img id="imgCarrito" src={item.img} alt="" />
            <div className="text">
              <span>{item.name}</span>
            </div>
            <span>{item.cantidad}</span>
            <div className="containerButtons">
              <button className="btnsCarrito"
                      onClick={()=> dimissQuantity(item.id, item.cantidad)}
              >-</button>
              <button
                className="btnsCarrito"
                onClick={() => addQuantity(item.id)}
              >
                +
              </button>
              <button className="btnsCarrito"
                      onClick={()=> deleteItem(item.id)}
              >x</button>
            </div>
          </div>
        );
      }))}

    </div>
  );
};
