import vinyls from "../mockData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [detail, setDetail] = useState([])

    useEffect(() => {
      getItemDetail()
    }, [id])
    

    const getItemDetail = () => {
      setDetail(vinyls.find(detail => detail.id === id))
    }

  return (
    <div>
        {detail && <ItemDetail detail= {detail}/>}
    </div>
  )
}

export default ItemDetailContainer;