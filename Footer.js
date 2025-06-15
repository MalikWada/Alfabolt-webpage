import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="cookie-bar">
        <p>We use cookies</p>
        <div className="cookie-buttons">
          <button>Decline</button>
          <button className="accept">OK, I Understand</button>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <h2>⚡ Alfabolt</h2>
          <p>© 2025 All Rights Reserved</p>
          <div className="awards">
            <span>🏆 ml-award</span>
            <span>💡 nlp-award</span>
            <span>🌟 rising-talent</span>
            <span>🔥 top-rated</span>
          </div>
        </div>

        <div className="footer-columns">
          <div>
            <h4>Services</h4>
            <ul>
              <li>Mobile App Development</li>
              <li>Web App Development</li>
              <li>API Development</li>
              <li>AI Agents</li>
              <li>Cloud Optimisation</li>
              <li>Product Analytics</li>
              <li>Data Migration</li>
              <li>UI/UX</li>
            </ul>
          </div>

          <div>
            <h4>Our Work</h4>
            <ul>
              <li>Nomod YC S21</li>
              <li>Workpay YC W22</li>
              <li>Preglife</li>
              <li>Trucker Path</li>
              <li>Lucky Truck</li>
            </ul>
          </div>

          <div>
            <h4>Industries</h4>
            <ul>
              <li>Fintech</li>
              <li>HR Tech</li>
              <li>Social</li>
              <li>Health Tech</li>
              <li>Logistics</li>
              <li>Insurance</li>
            </ul>
          </div>

          <div>
            <h4>Technologies</h4>
            <ul>
              <li>Laravel</li>
              <li>Django</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Vue.js</li>
              <li>React Native</li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>📞 +971 56 148 7671</li>
              <li>📞 +92 324 5300 625</li>
              <li>📧 info@alfabolt.com</li>
              <li>📍 Office 2205-2206, NSTP, NUST H-12, Islamabad</li>
            </ul>
          </div>
        </div>

        <div className="footer-actions">
          <button className="view-pricing">View Pricing</button>
          <button className="quote-btn">Get a Quote</button>
        </div>
      </div>
    </footer>
  );
}
