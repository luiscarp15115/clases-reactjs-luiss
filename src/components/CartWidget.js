import './CartWidget.css';
import carritoimg from './carrito.png';
import {useCartContext} from '../store/CartContext'


const CartWidget = () => {
    const {contadorcart} = useCartContext();
    return (
        <>
        <div className='img-carrito'>
            <img src={carritoimg} className="carrito-img" />
                 <p>{contadorcart || ' '}</p>
        </div>
        
        </>
    );
  }

export default CartWidget;