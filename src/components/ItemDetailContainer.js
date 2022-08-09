import { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail.js";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore'



function ItemDetailContainer() {
    
    const [detail, setDetail] = useState([]);
    const {itemId} = useParams()
   
    
    useEffect(() => {
        const db = getFirestore();
        const q= doc(db,'data',itemId)
        getDoc(q)
            .then(product =>setDetail({id:product.id, ...product.data()}))
    },[])

    console.log(detail)
    return (
        <>
     <ItemDetail props={detail} />
        </>
    );
}



export default ItemDetailContainer;