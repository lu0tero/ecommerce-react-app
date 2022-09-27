import './App.css';
import logo from './logo.gif'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartProvider';

// Componentes
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/NavBar/CartWidget/CartWidget';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
 
  return (
    <CartProvider>
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
            <Route path='/' element={<Home/>}/>
            <Route path='vinyls' element={<ItemListContainer/>}/>
            <Route path='contact' element={<h1>Contact</h1>}/>
            <Route path='about-us' element={<h1>About Us</h1>}/>
            <Route path='details/:id' element={<ItemDetailContainer/>}/>
            <Route path='category/:genre' element={<ItemListContainer/>}/>
            <Route path='cart' element={<Cart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
