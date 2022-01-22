import { FaEnvelope } from "react-icons/fa";



function Contact() {
  return (
  <section id="contact" class="contact">
      <div class="container contact-container">
        <h3 class="text-center p-4">Get in Touch</h3>
        <div class="mail-icon text-center">
          <FaEnvelope class="fa fa-envelope" size="60" />
        </div>
        <div class="email-btn col-lg-12 p-3 text-center">
          <a type="button" class="= btn btn-secondary" href='mailto:Tamirchn1@gmail.com'>
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
