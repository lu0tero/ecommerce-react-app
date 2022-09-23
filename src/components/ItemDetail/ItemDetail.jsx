import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({detail}) => {
  const [count, setCount] = useState(1);

  const {addToCart, clear, removeItem} = useContext(CartContext)

  function onAdd(detail) {
    addToCart(detail, count)
  }

  const clearCart = () => {
    clear()
  }

  const removeItemCart = () => {
    removeItem(detail.id)
  }

  return (
    <section className='detail-container'>
      <div className="detail-card">
          <Link to='/vinyls'>
            <button className='back-btn'>Back</button>
          </Link>
          <img src={detail.img}/>
          <div className="detail-info">
              <h2>{detail.title}</h2>
              <h3>{detail.price}</h3>
              <p>{detail.description}</p>
              <ul className='tracklist'>{detail.tracks}</ul>
              <div className="btn-container">
                {count < 10 && <ItemCount setCount= {setCount} stock= {10} count={count}/>}
                <Link to='/cart'>
                  <button className='cart-btn' onClick={() => onAdd(detail)}>Agregar al carrito</button>
                </Link>
                <button className='clear-btn' onClick={clearCart}>Vaciar carrito</button>
                <button className='remove-btn' onClick={removeItemCart}>Eliminar</button>
              </div>
          </div>
      </div>
    </section>
  )
}

export default ItemDetail;