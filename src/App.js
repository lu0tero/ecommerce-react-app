import './App.css';
import logo from './logo.gif'
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <header>

      <div className='logo-container'>
        <img className='logo' src={logo}/>
        <h1 className='title'>Music Getaway</h1>
      </div>

      <NavBar/>
      <CartWidget/>
      <ItemListContainer greeting={"Bienvenido"}>

      </ItemListContainer>
    </header>

  );
}

export default App;
