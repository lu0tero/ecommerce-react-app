import './NavBar.css';
import {Link, NavLink} from 'react-router-dom';

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

                <NavLink to='/category/Pop' className='link'>
                    <li className="nav-item">Pop</li>
                </NavLink>

                <NavLink to='/category/Rock' className='link'>
                    <li className="nav-item">Rock</li>
                </NavLink>

                <NavLink to='/category/Indie' className='link'>
                    <li className="nav-item">Indie</li>
                </NavLink>

                <Link to='/about-us' className='link'>
                    <li className="nav-item">About us</li>
                </Link>
            </ul>
           
        </nav>
    )
}

export default NavBar