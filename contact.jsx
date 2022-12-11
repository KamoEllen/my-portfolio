import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p>Get in touch with me:</p>
      <ul>
        <li>
          <h3>Email</h3>
          <p>Send me an email at <a href="mailto:hello@example.com">hello@example.com</a>.</p>
        </li>
        <li>
          <h3>Phone</h3>
          <p>Give me a call at (555) 555-5555.</p>
        </li>
        <li>
          <h3>Social media</h3>
          <p>Connect with me on social media:</p>
          <ul>
            <li><a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
