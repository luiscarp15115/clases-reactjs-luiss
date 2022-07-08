import './ItemListContainer.css'
import {useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import ItemDetailContainer from './ItemDetailContainer';
function ItemListContainer() {
    const [productosFetch, setProductos] = useState([])

    useEffect(() => {{
        fetch('data.json')
            .then((resp) => resp.json())
            .then((data) => setProductos(data))
            
    }
    }, [])
console.log(productosFetch)

    return (
        <>
            <div className=''>
                <h2 className='titulo-catalogo'>Mira nuestras ofertas !!!</h2>
                <p className='descripcion'>Productos en ofetas</p>
            </div>
            <div >
                <ItemList className='catalogo' productos={productosFetch} />
            </div>
            
        </>
    );
}

export default ItemListContainer;