import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
       <p>Have a question or an opportunity?</p>
        <p>Let's connect and build something amazing together.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:bansissinojia1234@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:bansissinojia1234@gmail.com">bansissinojia1234@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919663074246"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919663074246">(+91) 9663074246</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}