import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
//import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="http://www.Bansisinojia.com/" className="logo">
        <span>www.Bansi</span>
        <span>sinojia.com</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
       <a
      href="https://www.linkedin.com/in/bansi-sinojia"
      target="_blank"
     rel="noreferrer"
     >
     <img src={linkedin} alt="LinkedIn" />
      </a>

    <a
       href="https://github.com/banss02"
       target="_blank"
     rel="noreferrer"
        >
       <img src={githubIcon} alt="GitHub" />
      </a>

      <a
      href="https://wa.me/91YOURMOBILENUMBER?text=Hi%20Bansi,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
    target="_blank"
     rel="noreferrer"
     >
     <img src={whatsapp} alt="WhatsApp" />
        </a>
        {/* <a
          href="https://www.instagram.com/takshakshetty_"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div> */}
      </div>
    </Container>
  )
}
 
  
