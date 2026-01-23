import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="home-section">


      {/* Animated background elements */}
      <div className="background-overlay">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      {/* Main content */}
      <div className="home-container">
        <div className={`home-content ${isVisible ? 'visible' : ''}`}>
          {/* Badge */}
          <div className="new-collection-badge">
            <span className="badge-dot"></span>
            {/* <span className="badge-text">New Collection Available</span> */}
          </div>

          {/* Main heading */}
          <h1 className="home-title">
            <span className="title-gradient">Premium Beauty</span>
            <br />
            <span className="title-white">& Essentials</span>
          </h1>

          {/* Subtitle */}
          <p className="home-subtitle">
            Discover curated collections of stylish products for men and women. 
            <span className="subtitle-accent"> Elevate your everyday.</span>
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="#shop" className="btn btn-primary">
              <span className="btn-content">
                Shop Now
                <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            
            
          </div>

          {/* Trust indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <svg className="trust-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fast Delivery ⚡</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Authentic Products</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 Support 💬</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <svg className="scroll-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Home;