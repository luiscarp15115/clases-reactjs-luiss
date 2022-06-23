import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Carrito from './components/CartWidget.js';
import Catalogo from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carrito />
      <Catalogo />
    </div>
  );
}

export default App;
