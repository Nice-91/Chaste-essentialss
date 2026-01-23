import React from "react";
import {
  FaHome,
  FaShoppingBag,
  FaGem,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Contact.css";
import logo from "../../assets/logo.jpeg";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-top">
        {/* LEFT: Brand */}
        <div className="contact-brand">
          <div className="contact-logo-text">
            <img src={logo} alt="Chaste Essentials Logo" className="contact-logo" />
            <span className="contact-logo-text-name">Chaste Essentials</span>
          </div>
          <p>
            Premium scents & everyday essentials,<br />
            thoughtfully packaged with comfort and <br /> care for our valued customers.
          </p>
        </div>

        {/* MIDDLE: Quick Links */}
        <div className="contact-links">
          <h3>Quick Links</h3>
          <a href="#home"><FaHome /> Home</a>
          <a href="#shop"><FaShoppingBag /> Shop</a>
          <a href="#values"><FaGem /> Values</a>
          <a href="#contact"><FaEnvelope /> Contact</a>
        </div>

        {/* RIGHT: Social / Order */}
        <div className="contact-social">
          <h3>Order with us</h3>
          <a
            href="https://wa.me/250787444606"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="https://instagram.com/chaste_essentials"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://www.tiktok.com/@am_stanka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok /> TikTok
          </a>
          <a href="tel:+250787444606" className="contact-call">
            <FaPhoneAlt /> Call: +250 787 444 606
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="contact-bottom">
        <hr />
        <p>
          © 2025 Chaste Essentials. All rights reserved. Crafted with elegance. Built by Nice 
        </p>
      </div>
    </section>
  );
}
