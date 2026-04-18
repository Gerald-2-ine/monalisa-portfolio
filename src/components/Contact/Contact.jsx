import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d3hbcmd",
        "template_0uaocdm",
        form.current,
        "I9TkuEZs3ALIbl6r9"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;