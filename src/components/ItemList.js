import { useEffect, useState } from 'react';
import './ItemList.css';
import Item from './Item.js';
function ItemList(props) {
    return (
            <div className='productos'>
                {props.productos.map((producto) => (
                <Item
                prodId={producto.id}
                prodNombre={producto.nombre} 
                prodMarca={producto.marca} 
                prodCategoria={producto.tipo}
                prodOferta={producto.oferta} 
                prodPrecio={producto.precio}
                prodPreciorebajo={producto.preciorebajado}
                prodImg={producto.img} 
                />
                ))}
            </div>
    )
}

export default ItemList;