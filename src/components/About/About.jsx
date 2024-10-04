import React from "react";
import "./About.css";
import user from "../../assets/user-2.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={user} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>A Propos de nous</h3>
        <h2>
          ZANGA CASTEL <span>(Directeur de WenSchool SARL.)</span>
        </h2>

        <p>
          Lorem ipsum dolor, sit. Dolores ipsa aut in, voluptate ipsum,
          desesimus saepe quisquam. Incidunt neque impedit doloribus perferendis
          necessitatibus culpa nostrum aliquam tempora officia!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          tempora, autem in optio non cum cumque de facilis expedita laborum
          amet ab repudiandae dolore voluptatibus nam corrupti sapiente iure
          est! Explicabo, distinctio quae.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          tempora asper. Repellat, at delectus?
        </p>
      </div>
    </div>
  );
};

export default About;
