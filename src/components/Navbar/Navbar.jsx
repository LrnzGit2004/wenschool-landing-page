import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo_ws from "../../assets/logo_ws.png";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  //Creeon la logique du changement de couleur de la NavBar
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 450 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo_ws} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={toggleMenu}
          >
            Acceuil
          </Link>
        </li>
        <li>
          <Link
            to="program"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={toggleMenu}
          >
            Nos services
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={toggleMenu}
          >
            A propos
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={toggleMenu}
          >
            Témoignages
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-230}
            duration={500}
            onClick={toggleMenu}
            className="btn"
          >
            Contactez-nous
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
