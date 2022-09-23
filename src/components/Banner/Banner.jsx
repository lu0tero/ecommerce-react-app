import './Banner.css';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';

const Banner = () => {
  return (
    <div className='banner-container'>
      <img className='banner' src={banner3} alt='banner'/>
      <img className='banner' src={banner2} alt='banner'/>
    </div>
  )
}

export default Banner;