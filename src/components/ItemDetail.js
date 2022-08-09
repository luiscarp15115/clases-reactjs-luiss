import Itemcount from './ItemCount.js';
import './ItemDetail.css';
import './ItemListContainer.css';
import { useCartContext } from '../store/CartContext'

export const ItemDetail = ({ props }) => {
    const { agregarCarrito } = useCartContext()

    const onAdd = (cantidad) => {
        agregarCarrito(props, cantidad)
    }

    return (
        <div className='detail' >
            <div className='detail-gen detail-grid'>
                <img src={props.img} className="img-detail" />
                <div className='detail-description'>
                    <h2 className='title-detail'>{props.nombre}</h2>
                    <p className='description-detail'>Descripcion: {props.descripcion}</p>
                    <div className='prod-precio-gen'>
                    <p className={props.oferta ? 'precio-oferta' : 'precio-prod'}>${props.precio}</p>
                    {props.oferta &&
                        <p className='precio-prod'>${props.preciorebajado}</p>
                    }
                    </div>
                    <Itemcount stock={props.stock} inicial={0} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;