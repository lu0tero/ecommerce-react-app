// CSS
import './ItemCount.css'

const ItemCount = ({stock, setCount, count}) => {
  const addItem = () => count < stock ? setCount(count + 1) : console.log('Se llego al limite'); 
  const subItem = () => count > 0 ? setCount(count - 1) : console.log('No se puede llegar a numero negativo'); 
  return (
    <div className='itemcount-container'>
        <div className='counter-container'>
          <button className="item-btn" onClick={subItem}><i className="fa-solid fa-minus"></i></button>
          <span className='item-number'>{count}</span>
          <button className="item-btn" onClick={addItem}><i className="fa-solid fa-plus"></i></button>
        </div>
    </div>
  )
}

export default ItemCount;