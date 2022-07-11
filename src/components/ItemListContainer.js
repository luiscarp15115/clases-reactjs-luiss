import './ItemListContainer.css'
import {useEffect, useState } from 'react';
import ItemList from './ItemList.js';

function ItemListContainer() {
    const [productosFetch, setProductos] = useState([])

    useEffect(() => {{
        fetch('data.json')
            .then((resp) => resp.json())
            .then((data) => setProductos(data))
            
    }
    }, [])

    return (
        <div className='catalogo-main'>
            <div className=''>
                <h2 className='titulo-catalogo'>Mira nuestras ofertas !!!</h2>
                <p className='descripcion'>Productos en ofetas</p>
            </div>
            <div >
                <ItemList className='catalogo' productos={productosFetch} />
            </div>
            
        </div>
    );
}

export default ItemListContainer;