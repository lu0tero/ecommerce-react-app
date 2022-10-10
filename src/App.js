import './App.css';
import logo from './logo.gif'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartProvider';

// Components
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import CartWidget from './components/NavBar/CartWidget/CartWidget';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';

function App() {
 
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <header>
            <div className='logo-container'>
              <img className='logo' src={logo}/>
            </div>
            <NavBar />
            <CartWidget/>
          </header>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='vinyls' element={<ItemListContainer/>}/>
            <Route path='contact' element={<h1>Contact</h1>}/>
            <Route path='about-us' element={<About/>}/>
            <Route path='details/:id' element={<ItemDetailContainer/>}/>
            <Route path='category/:genre' element={<ItemListContainer/>}/>
            <Route path='cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
