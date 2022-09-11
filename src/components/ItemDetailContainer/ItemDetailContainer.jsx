import vinyls from "../mockData";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])
    let id = '2'

    useEffect(() => {
      getItemDetail
      .then((response) => {
        setDetail(response)
      })
    }, [])
    

    const getItemDetail = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(vinyls.find((detail) => detail.id === id))
        }, 2000);
    }) 

  return (
    <div>
        <ItemDetail detail= {detail}/>
    </div>
  )
}

export default ItemDetailContainer