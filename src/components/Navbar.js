import './Navbar.css';
import Carrito from './CartWidget.js';
function Navbar() {
    return (
        <header>
            <div className='navbar'>
                <div className='titulo'>
                    <h1> Tecno Tiendita </h1>
                </div>
                <div className='navbar-links'>
                    <a src="#" className='link'>Home</a>
                    <a src="#" className='link'>Catalogo</a>
                    <a src="#" className='link'>Preguntas Frecuentes</a>
                    <a src="#" className='link'>Contactanos</a>
                </div>
                <div className='carrito'>
                    <Carrito />
                </div>
            </div>
        </header>
    );
  }
  export default Navbar;