import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero container">
        <div className="hero-text">
        <h1>La digitalisation au service de l'éducation</h1>
        <h4>Plateforme éducative digitale de gestion des établissements scolaires du Cameroun</h4>
        <a href="https://wenschool.wenix.net/" target="blank"><button className="btn connect">Se connecter <FaArrowRight /></button></a>
      </div>
    </div>
  );
};

export default Hero;
