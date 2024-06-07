import React from 'react';
import './Contact.css';

 function Contact() {
  return (
    <section id="contact" className="contact--section">
      <div>
        <h2>Contact Me</h2>
        <p className="text-lg">
        If you have any questions or would like to contact us, please send an Message. <br/>Thank you!
        </p>
      </div>
      <form className="contact--form--container">
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
