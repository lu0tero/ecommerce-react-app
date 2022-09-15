import { Link } from "react-router-dom";
import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({lista}) => {
  return (
    <div className="item-container">
      {
        lista.map((vinyl) => (
          <Link className="link" key= {vinyl.id} to={'/details/' + vinyl.id}>
            <Item 
            title= {vinyl.title} 
            artist= {vinyl.artist} 
            price= {vinyl.price} 
            img= {vinyl.img}/>
          </Link>
        ))
      }
    </div>
  )
}

export default ItemList