import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>Engineered By Pranshul Pradhan 🙂</p>
      <p>Copyright © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
