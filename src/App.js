import './App.css';
import logo from './logo.gif'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/NavBar/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Item from './components/Item/Item';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
 
  return (
    <BrowserRouter>
      <div>
        <header>
          <div className='logo-container'>
            <img className='logo' src={logo}/>
            <h1 className='title'>Music Getaway</h1>
          </div>
          <NavBar />
          <CartWidget/>
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='contact' element={<h1>Contact</h1>}/>
          <Route path='about-us' element={<h1>About Us</h1>}/>
          <Route path='details/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
