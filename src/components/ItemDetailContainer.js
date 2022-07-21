import { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail.js";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDocs, collection, query, where} from 'firebase/firestore'



function ItemDetailContainer() {
    const {itemId} = useParams()
    const [detail, setDetail] = useState([]);
    /*
    useEffect(() => {
        fetch('../data.json')
        .then((resp) => resp.json())
        .then((data) => setDetail(data.find(producto => producto.id === parseInt(itemId)))
        )
    }, [])
    */
    useEffect(() => {
        const db = getFirestore();

        const q= query(collection(db,"data"), where('id','==',parseInt(itemId)))
        
        getDocs(q).then((product) =>{
            
                setDetail(product.docs.map((doc) => doc.data()))
        })
    },[])
    console.log(detail)
    return (
        <>
     <ItemDetail props={detail} />
        </>
    );
}



export default ItemDetailContainer;