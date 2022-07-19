import React from 'react';
import './Cart.css';
import {useCartContext} from '../store/CartContext'
import { Link } from 'react-router-dom';
import CartDetail from './CartDetail';
const Cart = () => {
    const {carrito, borrarCarrito, totalcart} = useCartContext();
    if(carrito.length === 0 ) {
        return(
            <>
            <p>No hay productos en tu carrito</p>
            <Link to='/category'>Añadir productos</Link>
            </>
        )
    }
    else{
return (
        <div className='cart'>
            <h1>Carrito</h1>
            {
                carrito.map(producto => <CartDetail producto={producto}></CartDetail>)
            }
            <p>Total: ${totalcart}</p>
            <button onClick={()=>borrarCarrito()}>Borrar Carrito</button>
        </div>
        )
    }
}

export default Cart;