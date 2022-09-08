import './Item.css'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({title, artist, price, img}) => {
  return (
    <div className="product-card">
      <img src={img} alt={title} className='vinyl-img' />
      <h4 className='vinyl-title'>{title}</h4>
      <h5 className='vinyl-artist'>{artist}</h5>
      <p className='vinyl-price'>{price}</p>
      <ItemCount stock= {10}/>
    </div>
  )
}

export default Item;