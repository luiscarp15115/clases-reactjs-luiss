import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Catalogo from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Catalogo />
    </div>
  );
}

export default App;
