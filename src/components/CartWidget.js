import './CartWidget.css';
import carritoimg from './carrito.png';

function CartWidget() {
    

    return (
        
        
        <div className='img-carrito'>
            <img src={carritoimg} className="carrito-img" />
        </div>

    );
  }

export default CartWidget;