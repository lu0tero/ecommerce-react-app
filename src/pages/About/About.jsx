import './About.css'
import vinyl from '../../images/vinyl.gif'

const About = () => {
  return (
    <div>
        <section className="aboutUs-container">
            <img className='about-img' src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/musica-gratis-paginas-web-programas-que-puedes-utilizar.jpg?itok=O9DZ1UzT" alt="about-us-img" />

            <div className='info-container'>
                <h3>About <br /> <span className='aboutUs-title'> Modern Sound</span></h3>

                <ul className='info-list'>
                    <li>Best sound quality</li>
                    <li>Products made with love</li>
                    <li>Good music = happy heart</li>
                </ul>

                <div className='about-icon'>
                    <div className='animated-container'>
                        <img className='animated-world' src="https://cdn.discordapp.com/attachments/732453916658368552/1029552855478181938/1068-international-music-lineal.gif" alt="" />                     
                        <img className='animated-vinyl' src={vinyl} alt="vinyl" />
                        <img className='animated-heart' src="https://cdn.discordapp.com/attachments/732453916658368552/1029555051003383848/20-love-heart-lineal_1.gif" alt="heart" />
                    </div>
                </div>
            </div>
        
        </section>
    </div>
  )
}

export default About