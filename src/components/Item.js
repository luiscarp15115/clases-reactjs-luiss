import './item.css'

function Item(props){
    return(
        <div className="producto">
            <h3 className='titulo-prod'>{props.prodNombre}</h3>
            <p className='marca-prod'>{props.prodMarca}</p>
            <p className='marca-prod'>{props.prodDescripcion}</p>
            <p className='cat-prod'>{props.prodCategoria}</p>
            <p className='precio-prod'>{props.prodPrecio}</p>
        </div>
    )
}

export default Item;