// CSS
import './Item.css'

const Item = ({title, artist, price, img}) => {
  return (
    <div className="product-card">
      <div className='vinyl-img-container'>
        <img src={img} alt={title} className='vinyl-img' />
      </div>
      <h4 className='vinyl-title'>{title}</h4>
      <h5 className='vinyl-artist'>{artist}</h5>
      <p className='vinyl-price'>${price}</p>
    </div>
  )
}

export default Item;