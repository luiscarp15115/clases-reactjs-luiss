import './Navbar.css';
import Carrito from './CartWidget.js';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <header className='header-grid'>
                <div className='titulo'>
                <Link to='/' className='titulo-name'>Tecno Tiendita</Link>
                </div>
                <div className='navbar-links'>
                    <Link to='/Home'className='link'>Home</Link>
                    <Link to='/category' className='link'>Catalogo</Link>
                    <Link to='/category/Celulares' className='link'>Celulares</Link>
                    <Link to='/category/Televisores' className='link'>Televisores</Link>
                </div>
                <div className='carrito'>
                    <Link to='/cart'>
                        <Carrito />
                    </Link>
                </div>
        </header>
    );
  }
  export default Navbar;