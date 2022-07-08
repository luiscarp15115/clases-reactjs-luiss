import './item.css'
import {Link} from 'react-router-dom';

function Item(props){
    return(
        <div className="producto">
            <h3 className='titulo-prod'>{props.prodNombre}</h3>
            <p className='marca-prod'>{props.prodMarca}</p>
            <p className='marca-prod'>{props.prodDescripcion}</p>
            <p className='cat-prod'>{props.prodCategoria}</p>
            <p className='precio-prod'>{props.prodPrecio}</p>
            <Link to={`/item/${props.prodId}`} className='link'>Home</Link>
        </div>
    )
}

export default Item;