import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e:any) => {
    e.preventDefault();
    const currentForm = form.current;
    if (currentForm == null) return;
    emailjs.sendForm('service_XXXXXXXX', 'template_XXXXXXXX', currentForm, 'userpublicidXXXX');
    e.target.reset();      
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='cantact__option-icon'/>
            <h4>E-mail</h4>
            <h5>szubas99@gmail.com</h5>
            <a href="mailto:szubas99@gmail.com" target="_blanc">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='cantact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Sebastian Szuba</h5>
            <a href="https://m.me/sebastian.szuba.589" target="_blanc">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='cantact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+48 123-456-789</h5>
            <a href="https://api.whatsapp.com/send?phone" target="_blanc">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your message"
            required
          />
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};
