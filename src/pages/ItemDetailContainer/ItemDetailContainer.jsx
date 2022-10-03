import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../../components/ItemDetail/ItemDetail";


const ItemDetailContainer = () => {

    const {id} = useParams();
    const [detail, setDetail] = useState([]);

    const db = getFirestore();
    const queryDoc = doc(db, 'items', id);

    
    useEffect(() => {
      getItemDetail()
    }, [id]);

    const getItemDetail = () => {
      getDoc(queryDoc).then((res) => {
        setDetail(res.data())
      })
      .catch((err) => console.log(err))
    }

  return (
    <div>
        {detail && <ItemDetail detail= {detail}/>}
    </div>
  )
}

export default ItemDetailContainer;