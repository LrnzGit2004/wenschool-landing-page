import React from "react";
import "./Hero.css";
// import Marquee from "../Marquee/Marquee";

const Hero = () => {
  return (
    <div className="hero container">
      {/* <Marquee/> */}
      <div className="hero-text">
        <h1>La digitalisation au service de l'éducation💯</h1>
        <h4>
          La solution WenSchool apporte une réelle innovation et de réels
          avantages à la digitalisation du système éducatif camerounais. Elle se
          positionne comme une porte d'entrée dans le digital grace à son
          logiciel de gestion d'établissement, et bien d'autres services.
        </h4>
        <a href="https://wenschool.wenix.net/" target="blank"><button className="btn connect">Se connecter →</button></a>
      </div>
    </div>
  );
};

export default Hero;
