import './ItemListContainer.css'
import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';
function ItemListContainer() {
    return (
        <>
            <div className=''>
                <h2 className='titulo-catalogo'>Mira nuestras ofertas !!!</h2>
                <p className='descripcion'>Productos en ofetas</p>
            </div>
            <div className='catalogo'>
                <ItemList/>
            </div>
        </>
    );
}

export default ItemListContainer;