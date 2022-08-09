import './item.css'
import {Link} from 'react-router-dom';

function Item(props){
    return(
        <div className="producto">
            <div className='img-product'>
                <img src={props.prodImg} className="img-detail-product" />
            </div>
            <h3 className='titulo-prod'>{props.prodNombre}</h3>
            <p className='marca-prod'>{props.prodMarca}</p>
            <Link to={`/category/${props.prodCategoria}`} className='cat-prod'>{props.prodCategoria}</Link>
            <div className='prod-precio-gen'>
            <p className={props.prodOferta ? 'precio-oferta' : 'precio-prod'}>${props.prodPrecio}</p>
            {props.prodOferta && 
                <p className='precio-prod'>${props.prodPreciorebajo}</p>
            }
            </div>
            <Link to={`/item/${props.prodId}`} className='link-product'>Ver producto</Link>
        </div>
    )
}

export default Item;