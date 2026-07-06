import { motion } from "framer-motion";
import { Container, SectionTitle, SkillIcon, InfoCard } from "./styles";
import Bansi from "../../assets/Bansi.png";
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

const SKILLS = [
  { src: python, alt: "Python" },
  { src: java, alt: "Java" },
  { src: jsIcon, alt: "JavaScript" },
  { src: reactIcon, alt: "React" },
  { src: typescriptIcon, alt: "TypeScript" },
  { src: htmlIcon, alt: "HTML" },
  { src: cssIcon, alt: "CSS" },
  { src: boostrapIcon, alt: "Bootstrap" },
];

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <motion.div {...fadeLeft(0)}>
          <SectionTitle>About Me</SectionTitle>
        </motion.div>

        <motion.p {...fadeLeft(0.1)}>
          Hi, I'm Bansi — a Computer Science student specialising in Cybersecurity, passionate about building secure, modern web applications and exploring the frontier of post-quantum cryptography.
        </motion.p>

        <motion.p {...fadeLeft(0.2)} style={{ marginTop: "1.6rem" }}>
          I love bridging the gap between elegant front-end experiences and robust, security-first back-end systems.
        </motion.p>

        <motion.div {...fadeLeft(0.3)}>
          <InfoCard>
            <h3>🎓 Education</h3>
            <h4>B.Tech — Computer Science &amp; Engineering (Cyber Security)</h4>
            <p>N.M.A.M Institute of Technology, Nitte &nbsp;|&nbsp; July 2023 – Present</p>
            <p className="highlight">8.82 CGPA</p>
          </InfoCard>
        </motion.div>

        <motion.div {...fadeLeft(0.4)}>
          <InfoCard>
            <h3>💼 Experience</h3>
            <h4>Software Developer</h4>
            <p>Bajaj Finserv &nbsp;|&nbsp; July 2026 – Present</p>
            <p>Pune, India</p>
          </InfoCard>
        </motion.div>

        <motion.h3 className="skills-heading" {...fadeLeft(0.5)}>
          Core Skills
        </motion.h3>

        <div className="hard-skills">
          {SKILLS.map(({ src, alt }, i) => (
            <motion.div
              key={alt}
              className="hability"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
            >
              <SkillIcon
                as={motion.div}
                whileHover={{ scale: 1.15, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={src} alt={alt} />
              </SkillIcon>
              <span>{alt}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="about-image">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="image-wrapper"
        >
          <img src={Bansi} alt="Bansi Sinojia" />
          <div className="image-glow" />
        </motion.div>
      </div>
    </Container>
  );
}
