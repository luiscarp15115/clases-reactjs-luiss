import React from 'react'
import './CartDetail.css';
import {useCartContext} from '../store/CartContext'

const CartDetail = ({producto})=>{
    const {borrarProducto} = useCartContext()
    return (
        <div className='item-cart' >
                <h2>{producto.tipo} {producto.nombre}</h2>
                <p>{producto.cantidad}u</p>
                <p>${producto.precio}</p>
                <p>Total: {producto.precio*producto.cantidad}</p>
                <button onClick={() => borrarProducto(producto.id)}>Eliminar producto</button>
        </div>
    )
}

export default CartDetail;