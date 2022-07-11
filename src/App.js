import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer.js';
import Footer from './components/Footer';
import CartDetail from './components/CartDetail';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} ></Route>
        <Route path='/Home' element={<Home />} ></Route>
        <Route path='/category' element={<ItemListContainer />} ></Route>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
        <Route path='/cart' element={<CartDetail/>}></Route>
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
