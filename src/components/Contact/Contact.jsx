import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3cf00e74-1f31-4268-a190-10c80ab2b8f8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Success sending");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Posez nous vos questions
          <img src={msg_icon} alt="" />
        </h3>
        <p>
          Vous avez besoins de plus de rensignements sur nos services, nos
          activités, nos formations, ou alors vous désirez tout simplement nous
          contacter ? Renseignez ce formulaire et nous vous répondrons dès que
          possible.
        </p>
        <ul>
          <li>
          <IoMail width={50} className="icon-contact"/>
            castel.zanga@wenix.net
          </li>
          <li>
          <BsFillTelephoneFill width={50} className="icon-contact"/>
            +237 655 83 48 69 / 672 91 18 47
          </li>
          <li>
          <FaLocationDot width={50} className="icon-contact"/>
            Kribi-Petit Paris, face CIME-Impôts, Cameroun.
          </li>
          <li>
          <FaFacebook width={50} className="icon-contact "/>
            <a href="https://www.facebook.com/profile.php?id=61561152725960" className="link-icon">Nous suivre sur facebook</a>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Votre nom</label>
          <input
            type="text"
            name="name"
            placeholder="Entrez votre nom"
            required
          />
          <label>Numéro de téléphone</label>
          <input
            type="text"
            name="phone"
            placeholder="Entrez votre numéro de téléphone"
            required
          />
          <label>Adresse mail</label>
          <input
            type="email"
            name="email"
            placeholder="Entrez votre adresse mail"
            required
          />
          <label>Entrez votre message</label>
          <textarea
            type="text"
            name="message"
            rows="6"
            placeholder="Votre message ici"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Envoyer votre message <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
