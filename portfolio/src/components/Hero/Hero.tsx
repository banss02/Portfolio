import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import Hello from "../../assets/Hello.gif";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h1>Bansi Sinojia</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={400}>
          <h3>Software Engineer</h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={600}>
          <p className="small-resume">
            Passionate about Full-Stack Development & Cyber Security
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={800}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact Me
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1000}>
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
          </div>
        </ScrollAnimation>
      </div>

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1000}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}