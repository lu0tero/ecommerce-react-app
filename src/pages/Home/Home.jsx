import Banner from "../../components/Banner/Banner"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"

const Home = () => {

  const [mainVinyls, setMainVinyls] = useState([])

  useEffect(() => {
    getMainVinyls()
  }, [])
  

  const getMainVinyls = () => {
    const db = getFirestore();
    const queryCollection = collection(db, 'items');
    const queryFilter = query(queryCollection, where('main', '==', true))
    getDocs(queryFilter)
    .then(res => {
      const data = res.docs.map(product => ({...product.data()}))
      setMainVinyls(data)
    })
    
    const showMainVinyls = () => {
     
    }

  }

  return (
    <div>
        <Banner/>
        <section>{ mainVinyls.map((item) => {
        <div>
          <h1>{item.title}</h1>
          <p>{item.price}</p>
        </div>
      })}</section>
    </div>
  )
}

export default Home;