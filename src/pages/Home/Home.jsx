// React
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

// Components
import Banner from "../../components/Banner/Banner";

// CSS
import '../Home/Home.css';

const Home = () => {

  const [mainVinyls, setMainVinyls] = useState([]);

  useEffect(() => {
    getMainVinyls()
  }, []);
  

  const getMainVinyls = () => {
    const db = getFirestore();
    const queryCollection = collection(db, 'items');
    const queryFilter = query(queryCollection, where('main', '==', true));
    getDocs(queryFilter)
    .then(res => {
      const data = res.docs.map(product => ({...product.data()}));
      setMainVinyls(data);
    });

  };

  return (
    <div>
        <Banner/>

        <section className="best-sellers">
          <h2>Best Sellers</h2>
          <div className="mainVinyls-container">
              { mainVinyls.map((item) => {
              return (
                <div key={item.title} className='main-card'>
                  <div className='main-img-container'>
                    <img src={item.img} alt={item.title} className='main-img' />
                  </div>
                  <h4 className='main-title'>{item.title}</h4>
                  <h5 className='main-artist'>{item.artist}</h5>
                  <p className='main-price'>${item.price}</p>
              </div>
              )
            })}
          </div>
        </section>
    </div>
  )
}

export default Home;