import { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail.js";
import { useParams } from "react-router-dom";



function ItemDetailContainer() {
    const {itemId} = useParams()

    const [detail, setDetail] = useState([]);
    
    useEffect(() => {
        fetch('../data.json')
        .then((resp) => resp.json())
        .then((data) => setDetail(data.find(producto => producto.id === parseInt(itemId)))
        )
    }, [])
    console.log(detail)

    return (
        <>
     <ItemDetail props={detail} />
        </>
    );
}



export default ItemDetailContainer;