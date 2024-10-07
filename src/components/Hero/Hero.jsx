import React from "react";
import "./Hero.css";
// import Marquee from "../Marquee/Marquee";

const Hero = () => {
  return (
    <div className="hero container">
      {/* <Marquee/> */}
      <div className="hero-text">
        <h1>La digitalisation au service de l'éducation💯</h1>
        {/* <h4>
          La solution digitale pour suivre l'éducation de vos enfants sans vous déplacer
        </h4> */}
        <a href="https://wenschool.wenix.net/" target="blank"><button className="btn connect">Se connecter →</button></a>
      </div>
    </div>
  );
};

export default Hero;
