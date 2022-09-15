import vinyls from "../../components/mockData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [detail, setDetail] = useState([])

    useEffect(() => {
      getItemDetail.then((response) => {
        setDetail(response)
      })
    }, [id])
    
    

    const getItemDetail = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(vinyls.find(detail => detail.id === id))
      })
    })

  return (
    <div>
        {detail && <ItemDetail detail= {detail}/>}
    </div>
  )
}

export default ItemDetailContainer;