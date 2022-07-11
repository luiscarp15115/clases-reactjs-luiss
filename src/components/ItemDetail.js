import Itemcount from './ItemCount.js';
import './ItemDetail.css';

const ItemDetail = ({ props }) => {

    const onAdd = (prodcarrito) =>{
        console.log({prodcarrito}`Agregado al carrito`)
    }

    return (
        <div className='detail' >
            <div className='detail-gen detail-grid'>
                <img src={props.img} className="img-detail" />
                <div className='detail-description'>
                    <h2 className='title-detail'>{props.tipo} {props.nombre}</h2>
                    <p className='description-detail'>Descripcion: {props.descripcion}</p>
                    <p className='price-detail'>Precio: ${props.precio}</p>
                        <Itemcount stock={props.stock} inicial={0} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;