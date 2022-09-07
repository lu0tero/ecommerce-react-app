import './styles.css'
import { useState } from 'react';

const ItemCount = ({stock}) => {
  const [cartStock, setCartStock] = useState(0);
  const addItem = () => cartStock < stock ? setCartStock(cartStock + 1) : console.log('Se llego al limite'); 
  const subItem = () => cartStock > 0 ? setCartStock(cartStock - 1) : console.log('No se puede llegar a numero negativo'); 
  return (
    <div className='btn-container'>
        <div className='counter-container'>
          <button className="item-btn" onClick={subItem}>-</button>
          <p className='item-number'>{cartStock}</p>
          <button className="item-btn" onClick={addItem}>+</button>
        </div>
    </div>
  )
}

export default ItemCount;