import './Dropdown.css';
import { Link, NavLink } from 'react-router-dom';

const Dropdown = () => {
  return (
    <div>
        <div class="sec-center"> 	
            <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
            <label className="for-dropdown" htmlFor="dropdown">Vinyls</label>
            <div className="section-dropdown"> 
                <Link to='/vinyls' className='link'>
                    <li className="nav-item">All</li>
                </Link>

                <div className='space-divider'></div>

                <NavLink to='/category/Pop' className='link'>
                    <li className="nav-item">Pop</li>
                </NavLink>
                
                <NavLink to='/category/Rock' className='link'>
                    <li className="nav-item">Rock</li>
                </NavLink>
                
                <NavLink to='/category/Indie' className='link'>
                    <li className="nav-item">Indie</li>
                </NavLink>

            </div>
        </div>
    </div>
  )
}

export default Dropdown;