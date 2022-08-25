import './App.css';
import logo from './logo.gif'
import NavBar from './components/NavBar';

function App() {
  return (
    <header>

      <div className='logo-container'>
        <img className='logo' src={logo}/>
        <h1 className='title'>Music Getaway</h1>
      </div>
      
      <NavBar/>
      <button className='contact-btn'><a>Contact</a></button>
    </header>
  );
}

export default App;
