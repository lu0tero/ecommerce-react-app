import './ItemCount.css'

const ItemCount = ({stock, setCartStock, cartStock}) => {
  const addItem = () => cartStock < stock ? setCartStock(cartStock + 1) : console.log('Se llego al limite'); 
  const subItem = () => cartStock > 0 ? setCartStock(cartStock - 1) : console.log('No se puede llegar a numero negativo'); 
  return (
    <div className='itemcount-container'>
        <div className='counter-container'>
          <button className="item-btn" onClick={subItem}><i className="fa-solid fa-minus"></i></button>
          <span className='item-number'>{cartStock}</span>
          <button className="item-btn" onClick={addItem}><i className="fa-solid fa-plus"></i></button>
        </div>
    </div>
  )
}

export default ItemCount;