import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({detail}) => {
  const [count, setCount] = useState(1);

  const {addToCart} = useContext(CartContext)

  function onAdd(detail) {
    addToCart(detail, count);
  }

  return (
    <section className='detail-container'>
      <div className="detail-card">
          <Link to='/vinyls'>
            <button className='back-btn'><i className="fa-solid fa-chevron-left"></i></button>
          </Link>
          <img src={detail.img}/>
          <div className="detail-info">
              <h2>{detail.title}</h2>
              <h3>${detail.price}</h3>
              <p>{detail.description}</p>
              <ul className='tracklist'>{detail.tracks}</ul>
              <div className="btn-container">
                {count < 10 && <ItemCount setCount= {setCount} stock= {10} count={count}/>}
                <button className='cart-btn' onClick={() => onAdd(detail)}>Add to cart</button>
              </div>
          </div>
      </div>
    </section>
  )
}

export default ItemDetail;