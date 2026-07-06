import { Container, ContainerSucces } from "./styles";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import validator from "validator";

export function Form() {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");

  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email));
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!", {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "success",
      });
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thank you for reaching out!</h3>
        <p>I've received your message and will get back to you soon.</p>

        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to Top
        </button>

        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Send Me a Message</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />

        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <ReCAPTCHA
          sitekey="YOUR_RECAPTCHA_SITE_KEY"
          onChange={() => setIsHuman(true)}
        />

        <button
          type="submit"
          disabled={
            state.submitting ||
            !name ||
            !validEmail ||
            !message ||
            !isHuman
          }
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <ToastContainer />
    </Container>
  );
}