import './Cart.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/cartContext';


const Cart = () => {
    const {cart, removeItem, clear, getTotalPrice} = useContext(CartContext)

    const clearCart = () => {
        clear()
      }

  return (
    <section className="productAdd-container">
            <div className="cart-info">
                <h1 className='cart-welcome'>Here are your vinyls 📀</h1>
                <i className="fa-solid fa-trash icon" onClick={clearCart}></i>
            </div>
        <div className='itemCart-container'>
            {
                cart.length === 0 ? 
                <div className='empty-container'>
                    <h3>Empty...</h3>
                    <Link to='/vinyls'>
                        <button className='shop-btn'>
                            Shop now 😎
                        </button>
                    </Link>
                </div> :
                cart.map((item) => (
                    <div key={item.id} className='product-cart'>
                        <div className='vinyl-img-cart'>
                            <img src={item.img} alt={item.title} className='vinyl-img' />
                        </div>
                        <h4 className='vinyl-title-cart'>{item.title}</h4>
                        <h5 className='vinyl-artist-cart'>{item.artist}</h5>
                        <span className='cart-quantity'>{item.quantity}</span>
                        <span className='vinyl-price-cart'>${item.price}</span>
                        <button className='remove-btn' onClick={() => removeItem(item.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
        <div className='totalPrice-container'>
            <h3 className='total-price'>Total price: ${getTotalPrice}</h3>
            <button className='purchase-btn'>Purchase</button>
        </div>
    </section>
  )
}

export default Cart;