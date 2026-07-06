import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { Container, GradientText, CTAButton, OutlineButton, Badge, BadgesRow, SocialLink } from "./styles";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const BADGES = ["Java", "React", "Python", "Cybersecurity", "ML/AI", "Node.js"];

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-content">
        <motion.p className="greeting" {...fadeUp(0.1)}>
          Hey there 👋, I'm
        </motion.p>

        <motion.h1 {...fadeUp(0.2)}>
          <GradientText>Bansi Sinojia</GradientText>
        </motion.h1>

        <motion.h2 className="role" {...fadeUp(0.35)}>
          Software Engineer &amp; <span className="accent">Cyber Security</span>
        </motion.h2>

        <motion.p className="tagline" {...fadeUp(0.45)}>
          Building secure, scalable full-stack applications and exploring the frontier of post-quantum cryptography.
        </motion.p>

        <motion.div {...fadeUp(0.55)}>
          <BadgesRow>
            {BADGES.map((b, i) => (
              <Badge
                key={b}
                as={motion.span}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
              >
                {b}
              </Badge>
            ))}
          </BadgesRow>
        </motion.div>

        <motion.div className="cta-row" {...fadeUp(0.7)}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact">
              <CTAButton
                as={motion.button}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </CTAButton>
            </NavHashLink>
            <NavHashLink smooth to="#project">
              <OutlineButton
                as={motion.button}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </OutlineButton>
            </NavHashLink>
          </BrowserRouter>
        </motion.div>

        <motion.div className="social-row" {...fadeUp(0.85)}>
          <SocialLink
            href="https://www.linkedin.com/in/bansi-sinojia"
            target="_blank"
            rel="noreferrer"
            as={motion.a}
            whileHover={{ scale: 1.15, y: -2 }}
          >
            <img src={linkedin} alt="LinkedIn" />
          </SocialLink>
          <SocialLink
            href="https://github.com/banss02"
            target="_blank"
            rel="noreferrer"
            as={motion.a}
            whileHover={{ scale: 1.15, y: -2 }}
          >
            <img src={githubIcon} alt="GitHub" />
          </SocialLink>
        </motion.div>
      </div>

      {/* Decorative glow orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
    </Container>
  );
}
