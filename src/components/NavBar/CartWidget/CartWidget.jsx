import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../../context/cartContext';

const CartWidget = () => {
  const {cart, sumQuantity} = useContext(CartContext)
  return (
    <div className="cart-container">
        <Link to='/cart' className='link'>
          <span>{sumQuantity}</span>
          <i className="fa-solid fa-cart-shopping cart"></i>
        </Link>
        <Link className='link' to='/contact'>
          <button className='contact-btn'>Contact</button>
        </Link>
    </div>
  )
}

export default CartWidget;