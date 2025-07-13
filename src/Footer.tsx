import React from 'react';

const Footer: React.FC = () => (
  <footer style={{ background: '#222', color: '#fff', textAlign: 'center', padding: '1rem', fontSize: '1rem' }}>
    &copy; {new Date().getFullYear()} ShopZone. All rights reserved.
  </footer>
);

export default Footer;
