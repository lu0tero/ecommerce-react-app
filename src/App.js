import './App.css';
import logo from './logo.gif'
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/NavBar/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Item from './components/Item/Item';


function App() {
 
  return (
    <div>
      <header>
        <div className='logo-container'>
          <img className='logo' src={logo}/>
          <h1 className='title'>Music Getaway</h1>
        </div>
        <NavBar />
        <CartWidget/>
      </header>
      <ItemListContainer></ItemListContainer>
    </div>

  );
}

export default App;
