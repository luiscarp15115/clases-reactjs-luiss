import React, { useState } from 'react';
import './Cart.css';
import {useCartContext} from '../store/CartContext'
import { Link } from 'react-router-dom';
import CartDetail from './CartDetail';
import {getFirestore, doc, getDoc, collection, addDoc} from 'firebase/firestore'
import Form from './Form.js';
const Cart = () => {
    const {carrito, borrarCarrito, totalcart} = useCartContext();
    const [finalCompra, newFinalCompra] = useState (false)
    const order = {
        buyer: {
            name:"Luis",
            phone:"1231231",
            email:"asd@gmail.com"
        },
        item:carrito.map(producto => ({id: producto.id, nombre: producto.nombre, precio: producto.precio,precioOferta: producto.preciorebajado, cantidad: producto.cantidad})),
        total:totalcart
    }

    if(carrito.length === 0 ) {
        return(
            <>
            <p>No hay productos en tu carrito</p>
            <Link to='/category'>Añadir productos</Link>
            </>
        )
    }
    else{
        const compraForm = () => {
            newFinalCompra(true)
        }
return (
        <div className='cart'>
            <h1>Carrito</h1>
            <div className='carrito-main'>
            {
                carrito.map(producto => <CartDetail producto={producto}></CartDetail>)
            }
            </div>
            <p>Total: ${totalcart}</p>
            <button onClick={compraForm}>Terminar compra</button>
            <button onClick={()=>borrarCarrito()}>Borrar Carrito</button>
            {finalCompra &&
                <Form/>
            }
        </div>
        )
    }
}

export default Cart;