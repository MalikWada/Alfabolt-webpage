import React from 'react';

export default function Navbar() {
  const openWhatsApp = () => {
    const phoneNumber = '923245300625'; 
    const message = 'Hi, I would like to know more about your services.'; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <nav className="navbar">
      <button className="whatsapp-button" onClick={openWhatsApp}>
        Contact Us
      </button>
    </nav>
  );
}
