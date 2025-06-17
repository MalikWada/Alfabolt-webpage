import React, { useEffect, useState } from 'react';
import './CookieAlert.css'; 

export default function CookieAlert() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookieAccepted');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-bar-alert">
      <p>We use cookies to improve your experience.</p>
      <div className="cookie-bar-buttons">
        <button onClick={() => setVisible(false)}>Decline</button>
        <button className="accept" onClick={handleAccept}>OK, I Understand</button>
      </div>
    </div>
  );
}
