import React, { useState, useContext } from "react";

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
    
    console.log(carrito)
    return(
        <CartContext.Provider value={{
            borrarCarrito : borrarCarrito,
            borrarProducto : borrarProducto,
            repetidos:repetidos,
            agregarCarrito : agregarCarrito 
        }}> 
            {children}
        </CartContext.Provider>
    )
}
    

export default CartProvider;