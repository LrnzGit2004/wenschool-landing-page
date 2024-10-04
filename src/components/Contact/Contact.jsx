import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

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
            <img src={mail_icon} alt="" />
            lorenzoeric2004@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +237 655 83 48 69
          </li>
          <li>
            <img src={location_icon} alt="" />
            Kribi, Cameroun
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
