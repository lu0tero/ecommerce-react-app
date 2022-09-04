import './styles.css'

const ItemCount = (props) => {
  return (
    <div className='btn-container'>
        <div className='counter-container'>
          <button className="item-btn" onClick={props.sub}>-</button>
          <p className='item-number'>{props.cartStock}</p>
          <button className="item-btn" onClick={props.add}>+</button>
        </div>
        <button className='productadd-btn'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;