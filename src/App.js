import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Carrito from './components/CartWidget.js';
import Catalogo from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carrito />
      <Catalogo />
      <div className='stock'>
        <ItemCount stock={5} inicial={0}/>
        <ItemCount stock={10} inicial={0}/>
        <ItemCount stock={1} inicial={0}/>
        <ItemCount stock={10} inicial={0}/>
        <ItemCount stock={5} inicial={0}/>
      </div>
    </div>
  );
}

export default App;
