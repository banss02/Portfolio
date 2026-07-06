import { motion } from "framer-motion";
import { Container, SectionTitle, ContactCard } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

const CONTACTS = [
  { icon: emailIcon, label: "Email", href: "mailto:bansissinojia1234@gmail.com", text: "bansissinojia1234@gmail.com" },
  { icon: phoneIcon, label: "Phone", href: "tel:+919663074246", text: "(+91) 9663074246" },
];

export function Contact() {
  return (
    <Container id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="section-sub">Have a question or an opportunity? Let's connect.</p>
      </motion.div>

      <div className="contacts">
        {CONTACTS.map(({ icon, label, href, text }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <ContactCard
              as={motion.a}
              href={href}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="icon-wrap">
                <img src={icon} alt={label} />
              </div>
              <div>
                <span className="contact-label">{label}</span>
                <span className="contact-text">{text}</span>
              </div>
            </ContactCard>
          </motion.div>
        ))}
      </div>

      <Form />
    </Container>
  );
}
