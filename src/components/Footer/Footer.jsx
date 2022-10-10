import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer-title'>
            <h2>Follow us!</h2>
        </div>

        <div className="icon-container">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-twitter"></i>
        </div>

        <div>
            <button className='contact-btn'>Contact</button>
        </div>
    </footer>
  )
}

export default Footer;