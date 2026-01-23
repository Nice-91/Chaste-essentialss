import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import "./Navbar.css";

import {
  FaHome,
  FaStore,
  FaMale,
  FaFemale,
  FaGem,
  FaHatCowboy,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);


  const handleScroll = (e, id) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link
          to="/"
          onClick={() => {
            closeMenu();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="Chaste Essentials Logo" />
          <span>Chaste Essentials</span>
        </Link>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            <FaHome className="nav-link-icon" /> Home
          </a>
        </li>

        <li>
          <a href="#shop" onClick={(e) => handleScroll(e, "shop")}>
            <FaStore className="nav-link-icon" /> Shop
          </a>
        </li>

       

        {/* Keep Shop category links as separate routes */}
        <li>
          <Link to="/shop/men" onClick={closeMenu}>
            <FaMale className="nav-link-icon" /> Men
          </Link>
        </li>

        <li>
          <Link to="/shop/women" onClick={closeMenu}>
            <FaFemale className="nav-link-icon" /> Women
          </Link>
        </li>

        <li>
          <Link to="/shop/beauty" onClick={closeMenu}>
            <FaGem className="nav-link-icon" /> Beauty
          </Link>
        </li>

        <li>
          <Link to="/shop/accessories" onClick={closeMenu}>
            <FaHatCowboy className="nav-link-icon" /> Accessories
          </Link>
        </li>

        <li>
          <a href="#values" onClick={(e) => handleScroll(e, "values")}>
            <FaGem className="nav-link-icon" /> Values
          </a>
        </li>

        <li>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            <FaEnvelope className="nav-link-icon" /> Contact
          </a>
        </li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
