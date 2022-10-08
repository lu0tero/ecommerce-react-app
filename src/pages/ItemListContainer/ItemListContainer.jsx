// React
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getFirestore, getDocs, query, where} from 'firebase/firestore'

// Components
import ItemList from '../../components/ItemList/ItemList';
import loader from '../../../src/loader.gif'

// CSS
import './ItemListContainer.css'

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [productList, setProductList] = useState([]);
    const { genre } = useParams();

    useEffect(() => {
      getVinyls.then((response) => { setProductList(response)}).finally(() => (setLoading(false))) 
    }, [genre]);
    

    const getVinyls = new Promise ((resolve, reject) => {
        const db = getFirestore();
        const queryBase = collection(db, 'items');
        setTimeout(() => {
            const querySnapshot = genre ? query(queryBase, where('genre', '==', genre) ) : queryBase
            getDocs(querySnapshot)
            .then((response) => {
                const data = response.docs.map((product) => {
                    return { id: product.id, ...product.data()}
                });
                resolve(data);
            });
        }, 1500);
    });

    return (
        <section className='itemlist-container'>
            {loading ? <img className='loader' src={loader} /> : ''}
            <ItemList lista= {productList}/>
        </section>
    )
}

export default ItemListContainer;