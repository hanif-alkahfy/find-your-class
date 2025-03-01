import React from 'react';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-black text-center mb-5">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - Hannif Alkahfy</p>
      </aside>
    </footer>
  );
};

export default Footer;