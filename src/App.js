import './App.css';
import Navbar from './components/Navbar.js';
import Catalogo from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
