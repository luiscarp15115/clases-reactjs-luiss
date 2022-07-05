import './ItemDetail.css';
const ItemDetail = ({props}) =>{
    
    return(
        <div className='detail'>
            <div className='detail-gen'>
                <img src={props.img} className="img-detail" />
                <h2 className='title-detail'>{props.categoria} {props.nombre}</h2>
                <p className='description-detail'>{props.descripcion}</p>
                <p className='price-detail'>${props.precio}</p>
            
            </div>
            </div>
    );
}

export default ItemDetail;