import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.js";
import productoimg from "./a50.jpg";



function ItemDetailContainer() {
    const productsMock ={
        id: 1,
        nombre: "A50",
        categoria: "Celular",
        descripcion: "Galaxy A50 es estética pura. Ya sea que elijas un moderno blanco o negro, o un brillante coral o azul, su diseño delgado se acopla cómodamente a tu mano.",
        precio: 50000,
        img:"https://www.notebookcheck.org/uploads/tx_nbc2/SamsungGalaxyA50__1_.JPG"
    };

    const [detail, setDetail] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productsMock);
            }, 2000);
        });
        getData.then(data => setDetail(data));
    }, [])

    return (
        <ItemDetail props={detail} />
    );
}

export default ItemDetailContainer;