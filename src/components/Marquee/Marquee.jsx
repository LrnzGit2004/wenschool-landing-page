import React from "react";
import "./Marquee.css";

const Marquee = () => {
  // Définissez votre liste d'éléments
  const listItems = [
    "CES ATOG BADA",
    "LYCEE BILINGUE DE DOMBE",
    "LYCEE BILINGUE DE KRIBI URBAIN",
    "LYCEE BILINGUE DE NIETE",
    "LYCEE DE GRAND BATANGA",
    "ENIEG DE KRIBI",
    "COLLEGE CATHOLIQUE BILINGUE SCIENTIFIQUE SAINT JEAN",
    "LYCEE WENSCHOOL",
    "INSTITUT SUPERIEUR DES SCIENCES ET TECHNOLOGIES DE L'OCEAN",
    "LYCEE BILINGUE AMBAM",
    "LYCEE DE CAMPO"
      
  ];

  return (
    <div className="marquee-container">
      <div className="marquee">
        <p>
          {listItems.map((item, index) => (
            <span key={index}>
              {item}

              {index < listItems.length - 1 && <span>&nbsp; ● &nbsp;</span>}
              {/* Ajoute un séparateur entre les éléments et le retire pour le dernier élément */}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Marquee;
