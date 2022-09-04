import './App.css';
import { useState } from 'react';
import logo from './logo.gif'
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const stock = 10;
  const [cartStock, setCartStock] = useState(0);
  const [itemStock, setItemStock] = useState(0)
  const addItem = () => cartStock < stock ? setCartStock(cartStock + 1) : console.log('Se llego al limite'); 
  const subItem = () => cartStock > 0 ? setCartStock(cartStock - 1) : console.log('No se puede llegar a numero negativo'); 
  return (
    <div>
      <header>
        <div className='logo-container'>
          <img className='logo' src={logo}/>
          <h1 className='title'>Music Getaway</h1>
        </div>
        <NavBar />
        <CartWidget cartStock= {cartStock}/>
      </header>
      <ItemListContainer greeting={"Bienvenido"}></ItemListContainer>

      <ItemCount add= {addItem} sub= {subItem} cartStock= {cartStock}/>
    </div>

  );
}

export default App;
