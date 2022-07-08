import './App.css';
import Navbar from './components/Navbar.js';
import Catalogo from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} ></Route>
        <Route path='/Home' element={<Home />} ></Route>
        <Route path='/category' element={<ItemListContainer />} ></Route>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
      </Routes> 
    </div>
  );
}

export default App;
