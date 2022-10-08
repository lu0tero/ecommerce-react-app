// CSS
import './Banner.css';

// GIF
import bannergif from '../../images/bannergif.gif'

const Banner = () => {
  return (
    <div className='banner-container'>
        <img className='banner' src={bannergif} alt='banner'/>
    </div>
  )
}

export default Banner;