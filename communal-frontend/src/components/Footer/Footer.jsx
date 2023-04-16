import React from 'react';
import './Footer.css';

function Footer(props) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer__content">
      <h3 className="footer__autor">from Renat Ibragimov</h3>
      <p className="footer__copyright">&copy;{year}</p>
    </footer>
  );
}

export default Footer;
