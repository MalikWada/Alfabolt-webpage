import React from 'react';
import './LandingPage.css';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">⚡ Alfabolt</div>
        <nav className="nav">
          <a href="#">Services</a>
          <a href="#">Industries</a>
          <a href="#">Our Work</a>
          <a href="#">Pricing</a>
          <a href="#">Contact Us</a>
          <button className="send-request">Send Request ➤</button>
        </nav>
      </header>

      <main className="hero">
        <h1>Custom Software Development Tailored to Your Business Needs</h1>
        <p>
          Looking for a reliable custom software development company? We build
          scalable, secure, bespoke solutions to help your business grow.
        </p>
        <button className="contact-button">📞 Contact Us</button>
      </main>

      <section className="core-services">
        <h2>Core Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2889/2889732.png"
                alt="Mobile App"
              />
            </div>
            <h3>Mobile App Development</h3>
            <p>Develop scalable mobile apps optimised for high performance.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2799/2799199.png"
                alt="Web App"
              />
            </div>
            <h3>Web App Development</h3>
            <p>Complete engineering solutions for high-performance web apps.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048941.png"
                alt="API Development"
              />
            </div>
            <h3>API Development</h3>
            <p>
              Boost your systems with our custom APIs, designed for seamless integration and outstanding performance.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
                alt="AI Agents"
              />
            </div>
            <h3>AI Agents</h3>
            <p>Unlock new possibilities for your business with AI Agents.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
