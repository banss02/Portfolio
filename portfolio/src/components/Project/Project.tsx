import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
//import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>

      <div className="projects">

        {/* Expense Tracker */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">
                <a
                  href="https://github.com/banss02/ExpenseTracker-clg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>

                {/* Add your deployed link here */}
                {/* <a href="YOUR_VERCEL_LINK" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Demo" />
                </a> */}
              </div>
            </header>

            <div className="body">
              <h3>Expense Tracker</h3>
              <p>
                A full-stack expense management application that enables users to
                track income and expenses, visualize spending patterns, and
                securely manage financial records through an intuitive dashboard.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>JWT</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Hybrid Quantum-Safe API Gateway */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">
                <a
                  href="https://github.com/banss02/Hybrid-PQC-Classical-VPN-Handshake-Prototype"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>

            <div className="body">
              <h3>Hybrid Quantum-Safe API Gateway</h3>
              <p>
                A research-driven API gateway integrating post-quantum
                cryptography with Qiskit simulations to evaluate
                quantum-resistant encryption and secure API communication.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Qiskit</li>
                <li>Flask</li>
                <li>PQC</li>
                <li>REST API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Robust ML IDS */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">
                <a
                  href="https://github.com/banss02/ML-Adversarial-IDS-mini"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>

            <div className="body">
              <h3>Robust Machine Learning Intrusion Detection System</h3>
              <p>
                An intelligent intrusion detection system that leverages machine
                learning algorithms to detect cyber threats and classify network
                traffic, enabling accurate and real-time threat detection.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Scikit-learn</li>
                <li>Pandas</li>
                <li>NumPy</li>
                <li>Flask</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}