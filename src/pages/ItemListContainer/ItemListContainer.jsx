import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import vinyls from '../../components/mockData'
import ItemList from '../../components/ItemList/ItemList';
import loader from '../../../src/loader.gif'

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [productList, setProductList] = useState([])


    useEffect(() => {
      getVinyls
      .then((response) => {
        setProductList(response)
      })
      .finally(() => (setLoading(false)))
    }, [])
    

    const getVinyls = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(vinyls)
        }, 2000);
    })

    return (
        
        <section className='itemlist-container'>
            {loading ? <img className='loader' src={loader} /> : ''}
            <ItemList lista= {productList}/>
        </section>
    )
}

export default ItemListContainer;