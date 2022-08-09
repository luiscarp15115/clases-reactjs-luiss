import './ItemListContainer.css'
import {useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import {getFirestore, doc, getDocs, collection, query,where} from 'firebase/firestore'
import { useParams } from 'react-router-dom';
function ItemListContainer() {
    const [productosFetch, setProductos] = useState([])
    const {catName} = useParams()
    

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
        if(catName){
        const queryCat= query(producRef, where('tipo','==',catName))
        getDocs(queryCat).then((product) =>{
                setProductos(product.docs.map(doc=>({id:doc.id, ...doc.data()})))
        })
        }
        else{
            getDocs(producRef).then((product) =>{
                setProductos(product.docs.map(doc=>({id:doc.id, ...doc.data()})))
        })
        }
    },[catName])

    return (
        <div className='catalogo-main'>
            <div className=''>
                {catName 
                    ?<h2 className='titulo-catalogo'>{catName}</h2>
                    :<h2 className='titulo-catalogo'>Mira nuestras ofertas !!!</h2>
                }
                <p className='descripcion'>Productos en ofetas</p>
            </div>
            
            <div >
                <ItemList className='catalogo' productos={productosFetch} />
            </div>
            
        </div>
    );
}

export default ItemListContainer;