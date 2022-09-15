import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({detail}) => {
  return (
    <section className='detail-container'>
      <div className="detail-card">
          <img src={detail.img}/>
          <detail className="detail-info">
              <h2>{detail.title}</h2>
              <h3>{detail.price}</h3>
              <p>{detail.description}</p>
              <ul className='tracklist'>{detail.tracks}</ul>
              <ItemCount stock= {10}/>
          </detail>
      </div>
    </section>
  )
}

export default ItemDetail;