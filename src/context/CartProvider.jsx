import {  useState } from "react";
import { CartContext} from './cartContext';


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
          alert('Ya esta en el carrito')
        } else {
          setCart([...cart, {...item, quantity}])
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
   
  return (
    <CartContext.Provider value={{cart, addToCart, clear, removeItem}}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;