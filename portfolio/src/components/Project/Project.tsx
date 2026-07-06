import { motion } from "framer-motion";
import { Container, SectionTitle, ProjectCard } from "./styles";
import githubIcon from "../../assets/github.svg";

const PROJECTS = [
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense management application that enables users to track income and expenses, visualize spending patterns, and securely manage financial records through an intuitive dashboard.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/banss02/ExpenseTracker-clg",
    color: "var(--purple)",
  },
  {
    title: "Hybrid Quantum-Safe API Gateway",
    description:
      "A research-driven API gateway integrating post-quantum cryptography with Qiskit simulations to evaluate quantum-resistant encryption and secure API communication.",
    tech: ["Python", "Qiskit", "Flask", "PQC", "REST API"],
    github: "https://github.com/banss02/Hybrid-PQC-Classical-VPN-Handshake-Prototype",
    color: "var(--purple)",
  },
  {
    title: "Robust ML Intrusion Detection System",
    description:
      "An intelligent intrusion detection system that leverages machine learning algorithms to detect cyber threats and classify network traffic, enabling accurate and real-time threat detection.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask"],
    github: "https://github.com/banss02/ML-Adversarial-IDS-mini",
    color: "var(--purple)",
  },
];

export function Project() {
  return (
    <Container id="project">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <SectionTitle>My Projects</SectionTitle>
        <p className="section-sub">Things I've built that I'm proud of</p>
      </motion.div>

      <div className="projects">
        {PROJECTS.map(({ title, description, tech, github, color }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <ProjectCard
              as={motion.div}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              accentColor={color}
            >
              <div className="card-glow" />
              <header>
                <svg width="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <div className="project-links">
                  <motion.a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={githubIcon} alt="GitHub" />
                  </motion.a>
                </div>
              </header>

              <div className="body">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>

              <footer>
                <ul className="tech-list">
                  {tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </footer>
            </ProjectCard>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
