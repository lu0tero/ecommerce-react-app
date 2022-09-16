import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-container">
        <div className='cart-number'></div>
        <i className="fa-solid fa-cart-shopping cart"></i>
        <Link className='link' to='/contact'>
          <button className='contact-btn'><a>Contact</a></button>
        </Link>
    </div>
  )
}

export default CartWidget;