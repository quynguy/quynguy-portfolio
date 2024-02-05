import React from 'react';
import VisitCounter from './VisitCounter';

function Contact() {
  return (
    <div className="contact-container">
      <div id="contact" className="contact-me">
        <h2>Contact Me</h2>
        <p>Email: wQuyenLe.dev@gmail.com</p>
        <p>Phone: +1 (682) 217-7096</p>
        <p>Location: Texas, USA</p>
      </div>

      <div className="visit-counter">
          <VisitCounter />
          <p>Let's collaborate! What should we make?</p>
        </div>

    </div>
  );
}

export default Contact;
