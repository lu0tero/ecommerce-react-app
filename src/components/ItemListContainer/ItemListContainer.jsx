import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import vinyls from '../mockData';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [productList, setProductList] = useState([])


    useEffect(() => {
      getVinyls
      .then((response) => {
        setProductList(response)
      })
    }, [])
    

    const getVinyls = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(vinyls)
        }, 2000);
    })

    return (
        <section className='itemlist-container'>
            <ItemList lista= {productList}/>
        </section>
    )
}

export default ItemListContainer;