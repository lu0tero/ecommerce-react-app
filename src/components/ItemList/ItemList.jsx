import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({lista}) => {
  return (
    <div className="item-container">
      {
        lista.map((vinyl) => (
          <Item 
          title= {vinyl.title} 
          artist= {vinyl.artist} 
          price= {vinyl.price} 
          img= {vinyl.img}
          key= {vinyl.id}/>
        ))
      }
    </div>
  )
}

export default ItemList