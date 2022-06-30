import { useEffect, useState } from 'react';
import './ItemList.css';
import Item from './Item.js';
function ItemList() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch('data.json')
                .then((resp) => resp.json())
                .then((data) => setProductos(data))
        }, 2000)
    }, [])

    return (
        <>
            <div className='productos'>
                {productos.map(producto => <Item prodNombre={producto.nombre} prodMarca={producto.marca} prodCategoria={producto.tipo} prodPrecio={producto.precio} />)}
            </div>
        </>
    )
}

export default ItemList;