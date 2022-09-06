import './styles.css'

const CartWidget = () => {
  return (
    <div className="cart-container">
        <div className='cart-number'></div>
        <i class="fa-solid fa-cart-shopping cart"></i>
        <button className='contact-btn'><a>Contact</a></button>
    </div>
  )
}

export default CartWidget;