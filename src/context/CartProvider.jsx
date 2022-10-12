// React
import {  useState } from "react";
import { CartContext} from './cartContext';

// SweetAlert
import Swal from "sweetalert2";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    // Añadir al carrito
    const addToCart = (item, quantity) => {
        if (isInCart(item.title)) {
          Swal.fire({
            icon: 'error',
            title: 'This product is already in cart',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          setCart([...cart, {...item, quantity}])
          Swal.fire({
            icon: 'success',
            title: 'Product added successfully',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
          });
        };
        console.log('cart', [...cart, {...item, quantity}])
    };


    // Funcion para verificar si el producto ya se encuentra en el carrito
    const isInCart = (title) => {
      return cart.some((item) => item.title === title);
  };


    // Limpiar carrito
    const clear = () => {
      setCart([]);
      console.log(cart);
    };

    // Eliminar item de forma individual
    const removeItem = (itemTitle) => {
      setCart(cart.filter((item) => item.title !== itemTitle));
      console.log(cart);
    }

    // Sumar productos
    const sumQuantity = cart.reduce((acc, item) => {
      return acc += item.quantity;
    }, 0);

    // Obtener precio total
    const getTotalPrice = cart.reduce((acc, item) => {
      return acc += parseInt(item.price) * item.quantity;
    }, 0);

  return (
    <CartContext.Provider value={{cart, addToCart, clear, removeItem, sumQuantity, getTotalPrice}}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;