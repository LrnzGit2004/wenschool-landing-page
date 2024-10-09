import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2024 Wenschool &bull; Tous droits réservés.</p> {/* Alt+0169 */}
      <ul>
        <li>Conditions générales d'utilisation</li> &bull;
        <li>Politique de confidentialité</li>
      </ul>
    </div>
  );
};

export default Footer;
