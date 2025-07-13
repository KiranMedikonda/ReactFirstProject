import React from 'react';

const Footer: React.FC = () => (
  <footer style={{ background: '#222', color: '#fff', textAlign: 'center', padding: '1rem', fontSize: '1rem' }}>
    &copy; {new Date().getFullYear()} ShopZone. All rights reserved.
    <br />
    Developed by Kiran Medikonda
    <br />
    Contact: +91 9642414003
    <br />
  </footer>
);

export default Footer;
