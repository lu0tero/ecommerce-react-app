import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({detail}) => {
  const [cartStock, setCartStock] = useState(0);

  return (
    <section className='detail-container'>
      <div className="detail-card">
          <img src={detail.img}/>
          <div className="detail-info">
              <h2>{detail.title}</h2>
              <h3>{detail.price}</h3>
              <p>{detail.description}</p>
              <ul className='tracklist'>{detail.tracks}</ul>
              <div className="btn-container">
                {cartStock < 10 && <ItemCount setCartStock= {setCartStock} stock= {10} cartStock={cartStock}/>}
                <Link to='/cart'>
                  <button className='cart-btn'>Agregar al carrito</button>
                </Link>
              </div>
          </div>
      </div>
    </section>
  )
}

export default ItemDetail;