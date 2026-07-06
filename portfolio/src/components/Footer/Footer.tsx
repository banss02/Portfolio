import { motion } from "framer-motion";
import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'

const SOCIALS = [
  { href: "https://www.linkedin.com/in/bansi-sinojia", src: linkedin, alt: "LinkedIn" },
  { href: "https://github.com/banss02", src: githubIcon, alt: "GitHub" },
  { href: "https://wa.me/91YOURMOBILENUMBER?text=Hi%20Bansi,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.", src: whatsapp, alt: "WhatsApp" },
];

export function Footer() {
  return (
    <Container className="footer">
      <a href="http://www.Bansisinojia.com/" className="logo">
        www.Bansisinojia.com
      </a>

      <div className="made-with">
        <span>Built with</span>
        <img src={reactIcon} alt="React" />
        <span>React</span>
      </div>

      <div className="social-media">
        {SOCIALS.map(({ href, src, alt }) => (
          <motion.a
            key={alt}
            href={href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={src} alt={alt} />
          </motion.a>
        ))}
      </div>
    </Container>
  )
}
