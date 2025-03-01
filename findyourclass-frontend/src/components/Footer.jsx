import React from 'react';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-5 fixed bottom-0">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - by Hannif Alkahfy</p>
      </aside>
    </footer>
  );
};

export default Footer;