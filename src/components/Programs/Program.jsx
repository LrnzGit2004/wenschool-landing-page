import React, { useState } from "react";
import "./Program.css";
import '../../assets/banner.png'
import {programs} from '../../assets/assets'
import banner from "../../assets/banner.png"




const Program = () => {

  const [selectedSection, setSelectedSection] = useState('general')

  return (
    <>
      <div className="container-program">
        <div className="menu-program">
          <img src={banner} alt="" width={500} />
          <ul>
            <li onClick={()=>setSelectedSection('general')}>Services généraux</li>
            <li onClick={()=>setSelectedSection('etablissement')}>Pour les établissements</li>
            <li onClick={()=>setSelectedSection('parent')}>Pour les parents</li>
          </ul>
          <button className="btn depliant">Télécharger le dépliant →</button>
        </div>
        <div className="discribe-content">
          <div className="services-list">
            <ul>
            {programs[selectedSection].map((item, index) => (
              <li key={index} className="custom-bullet">{item}</li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
