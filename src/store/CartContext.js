import React, { useState, useContext, useMemo } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)


const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (item, newCantidad) =>{
        const newCarrito = carrito.filter(producto => producto.id !== item.id);
        newCarrito.push({...item, cantidad: newCantidad});
        setCarrito(newCarrito)
    }



    const borrarCarrito = () => setCarrito([])
    const borrarProducto = (id) => setCarrito(carrito.filter(producto => producto.id != id))
    const repetidos = (id) => carrito.find(producto => producto.id === id)
    const totalcart = carrito.reduce((totcart, product )=> product.oferta ? (totcart + product.cantidad*parseInt(product.preciorebajado)) :(totcart + product.cantidad*product.precio)  , 0) 
    const contadorcart = carrito.reduce((cont, prod) => cont + prod.cantidad, 0 )

    return(
        <CartContext.Provider value={{
            borrarCarrito : borrarCarrito,
            borrarProducto : borrarProducto,
            repetidos:repetidos,
            agregarCarrito : agregarCarrito,
            totalcart:totalcart,
            contadorcart: contadorcart,
            carrito
        }}> 
            {children}
        </CartContext.Provider>
    )
}
    

export default CartProvider;