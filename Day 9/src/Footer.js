import React from 'react';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/path-to-your-logo.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Your Company Name</p>
      </div>
    </footer>
  );
};

export default Footer;
