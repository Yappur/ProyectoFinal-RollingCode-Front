import React from "react";
import "../css/PagesCSS/AboutPage.css";
import myImage from "../assets/img/programadorDalmiro.jpeg";
import myPicture from "../assets/img/programadorMateo.jpeg";
import myFoto from "../assets/img/programadorGerardo.jpeg";
import myPic from "../assets/img/programadorSantiago.jpeg";

const AboutPage = () => {
  return (
    <div className="container-about">
      <h2>
        "Nuestro equipo está dedicado a impulsarte hacia tus objetivos con
        pasión, experiencia y un enfoque personalizado."
      </h2>
      <div className="presentation-container">
        {" "}
        {}
        <div className="card-about">
          <img src={myImage} alt="Foto 1" className="presentation-image" />
          <h3>Dalmiro</h3>
          <p>Desarrollador backend</p>
        </div>
        <div className="card-about">
          <img src={myPicture} alt="Foto 2" className="presentation-image" />
          <h3>Mateo</h3>
          <p>Desarrolador fronted</p>
        </div>
        <div className="card-about">
          <img src={myFoto} alt="Foto 3" className="presentation-image" />
          <h3>Gerardo</h3>
          <p>Especialista en seguridad web</p>
        </div>
        <div className="card-about">
          <img src={myPic} alt="Foto 4" className="presentation-image" />
          <h3>Santiago</h3>
          <p>Diseñador web</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
