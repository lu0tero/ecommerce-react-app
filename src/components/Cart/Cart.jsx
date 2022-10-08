// React
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/cartContext';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

// CSS
import './Cart.css';

// SweetAlert
import Swal from 'sweetalert2';

// Momentjs
import moment from 'moment/moment';


const Cart = () => {
    const {cart, removeItem, clear, getTotalPrice} = useContext(CartContext);
    const [order, setOrder] = useState({
        buyer: {
            name: '',
            phone: '',
            email: '',
        },
        items: cart,
        total: getTotalPrice,
        date: moment().format('DD/MM/YYYY')
    });

    const clearCart = () => {
        clear();
      };

       
    const createOrder = () => {
        const db = getFirestore();
        const queryCollection = collection(db, 'orders');
        addDoc(queryCollection, order)
        .then(({id}) => {
            console.log(id);
            Swal.fire({
                icon: 'success',
                title: 'Product purchased successfully',
              });
        })
        .catch(() => Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
          }));
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        setOrder({
            ...order,
            buyer: {
                ...order.buyer,
                [e.target.name]: e.target.value
            }
        });
    };

  return (
    <div>
        <div className='formTitle-container'>
            <h3 className='form-title'>Complete the form to proceed with your buy</h3>
        </div>
        <section className='form-container'>
            <div>
                <img src='https://i.gifer.com/origin/e4/e4ac5c8bad09a35b478bb65e80d179bd.gif'/>
            </div>
            <form>
                <div className='input-container'>
                    <label>Name</label>
                    <input name='name' type="text" value={order.buyer.name} onChange={handleInputChange}/>
                </div>

                <div className='input-container'>
                    <label>Phone</label>
                    <input name='phone' type='text' value={order.buyer.phone} onChange={handleInputChange} />
                </div>

                <div className='input-container'>
                    <label>Email</label>
                    <input name='email' type='email' value={order.buyer.email} onChange={handleInputChange} />
                </div>

            </form>
        </section>

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
    </div>
  )
}

export default Cart;