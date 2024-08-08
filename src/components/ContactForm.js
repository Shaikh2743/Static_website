// src/components/ContactForm.js
import React from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cntrxp4', 'template_pi6aybb', e.target, '2scBCKjgfV8odtk_F')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message. Please try again later.');
      });
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Phone Number:
        <input type="text" name="phone" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Address:
        <input type="text" name="address" required />
      </label>
      <label>
        Service Needed:
        <textarea name="message" required></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
