import './Cart.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/cartContext';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2';
import moment from 'moment/moment';


const Cart = () => {
    const {cart, removeItem, clear, getTotalPrice} = useContext(CartContext)

    const clearCart = () => {
        clear()
      }

       
    const createOrder = () => {
        const db = getFirestore();

        const order = {
            buyer: {
                name: 'Mateo',
                phone: '1125687242',
                email: 'mateo@test.com'
            },
            item: cart, 
            total: getTotalPrice,
            date: moment().format()
        };
        const queryCollection = collection(db, 'orders');
        addDoc(queryCollection, order)
        .then(({id}) => {
            console.log(id)
            Swal.fire({
                icon: 'success',
                title: 'Product purchased successfully',
                /* showConfirmButton: false,
                timer: 1500 */
              })
        })
        .catch(() => Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
          }))
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
                    <div key={item.title} className='product-cart'>
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
            <button onClick={createOrder} className='purchase-btn'>Purchase</button>
        </div>
    </section>
  )
}

export default Cart;