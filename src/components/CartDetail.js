import React from 'react'
import './CartDetail.css';
import {useCartContext} from '../store/CartContext'

const CartDetail = ({producto})=>{
    const {borrarProducto} = useCartContext()

    return (
        <div className='item-cart' >
                <h2 className='item-title-cart'>{producto.tipo} {producto.nombre}</h2>
                <p>{producto.cantidad}u</p>
                {producto.oferta
                    ?<div className='prod-precio-gen'><p className='precio-oferta'>${producto.precio}</p><p>${producto.preciorebajado}</p></div>
                    :<p>${producto.precio}</p>
                }                
                {producto.oferta
                    ?<p>Total: {producto.preciorebajado*producto.cantidad}</p>
                    :<p>Total: {producto.precio*producto.cantidad}</p>
                }
                
                <button onClick={() => borrarProducto(producto.id)}>Eliminar producto</button>
        </div>
    )
}

export default CartDetail;