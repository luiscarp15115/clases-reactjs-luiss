import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList.js';

function ItemListContainer() {

    const { catId } = useParams()
    const [productosFetch, setProductos] = useState([])

    useEffect(() => {
        {
            fetch('../data.json')
                .then((resp) => resp.json())
                .then((data) => {
                    if (catId) {
                        setProductos(data.filter(producto => producto.tipo === catId))
                    }
                    else {
                        setProductos(data)
                    }
                })

        }
    }, [catId])
    console.log(productosFetch)
    console.log(catId)


    return (
        <>
            <div className=''>
                <h2 className='titulo-catalogo'>Mira nuestras ofertas !!!</h2>
                <p className='descripcion'>Productos en ofetas</p>
            </div>
            <div>
                <ItemList className='catalogo' productos={productosFetch} />
            </div>

        </>
    );
}

export default ItemListContainer;