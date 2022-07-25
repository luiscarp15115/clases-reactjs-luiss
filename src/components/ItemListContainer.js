import './ItemListContainer.css'
import {useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import {getFirestore, doc, getDocs, collection} from 'firebase/firestore'
function ItemListContainer() {
    const [productosFetch, setProductos] = useState([])
    /*
    useEffect(() => {{
        fetch('data.json')
            .then((resp) => resp.json())
            .then((data) => setProductos(data))
            
    }
    }, [])

    */

    useEffect(() => {
        const db = getFirestore();

        const producRef= collection(db,"data")
        
        getDocs(producRef).then((product) =>{
                setProductos(product.docs.map(doc=>({id:doc.id, ...doc.data()})))
        })
    },[])

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