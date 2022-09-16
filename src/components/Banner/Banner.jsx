import './Banner.css'
import banner from '../../images/banner.png'
import notes from '../../images/notes.png'

const Banner = () => {
  return (
    <div className='banner-container'>
        
        <img src={banner} alt='banner'/>
        
        <div className='banner-title'>
            <h2> Get your <br/> favourites albums <br/> <span>here</span> </h2>
        </div>
    </div>
  )
}

export default Banner