import './NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="list-container">
                <Link to='/' className='link'>
                    <li className="nav-item">Home</li>
                </Link>

                <Link to='/vinyls' className='link'>
                    <li className="nav-item">Vinyls</li>
                </Link>

                <Link to='/about-us' className='link'>
                    <li className="nav-item">About us</li>
                </Link>
            </ul>
           
        </nav>
    )
}

export default NavBar