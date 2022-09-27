import {  useState } from "react";
import { CartContext} from './cartContext';

// SweetAlert
import Swal from "sweetalert2";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
          Swal.fire({
            icon: 'error',
            title: 'This product is already in cart',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          setCart([...cart, {...item, quantity}])
          Swal.fire({
            icon: 'success',
            title: 'Product added successfully',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
          })
        }
        console.log('cart', [...cart, {...item, quantity}])
    };

    const isInCart = (id) => {
      return cart.some((item) => item.id === id);
  }

    const clear = () => {
      setCart([]);
      console.log(cart)
    }

    const removeItem = (itemId) => {
      const deleteProduct = cart.filter((item) => item.id !== itemId);
      setCart([...deleteProduct]);
      console.log(cart)
    }

    const sumQuantity = cart.reduce((acc, item) => {
      return acc += item.quantity;
    }, 0);

    const getTotalPrice = cart.reduce((acc, item) => {
      return acc += parseInt(item.price) * item.quantity;
    }, 0)

  return (
    <CartContext.Provider value={{cart, addToCart, clear, removeItem, sumQuantity, getTotalPrice}}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;