import './About.css'

const About = () => {
  return (
    <div>
        <section className="aboutUs-container">
            <img className='about-img' src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/musica-gratis-paginas-web-programas-que-puedes-utilizar.jpg?itok=O9DZ1UzT" alt="about-us-img" />

            <div className='info-container'>
                <h3>About <br /> <span className='aboutUs-title'> Modern Sound</span></h3>

                <div className='about-icon'>
                    <div>
                        <i className="fa-solid fa-headphones"></i>                      
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>

                    <div>
                        <i className="fa-solid fa-record-vinyl"></i>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>

                    <div>
                        <i className="fa-regular fa-face-smile"></i>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        
        </section>
    </div>
  )
}

export default About