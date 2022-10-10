// React
import {Link, NavLink} from 'react-router-dom';

// Components
import Dropdown from '../Dropdown/Dropdown';

// CSS
import './NavBar.css';

const NavBar = () => {

    return (
        <nav className="navbar">
            <ul className="list-container">
                <Link to='/' className='link'>
                    <li className="nav-item home">Home</li>
                </Link>

                <Dropdown/>

                <Link to='/about-us' className='link'>
                    <li className="nav-item about-us">About us</li>
                </Link>
            </ul>
           
        </nav>
    )
}

export default NavBar;