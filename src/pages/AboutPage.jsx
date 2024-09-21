import React, { useState } from "react";
import "../css/PagesCSS/AboutPage.css";
const AboutPage = () => {
  return (
    <div className="container-about">
      <h2>Sobre Nosotros</h2>
      <p>
        En <strong>[Nombre del Gimnasio]</strong>, creemos que cada persona
        tiene objetivos y necesidades únicas. Ofrecemos un enfoque personalizado
        que se adapta a cada uno de nuestros miembros, ya sea que busques perder
        peso, ganar músculo o mejorar tu condición física.
      </p>
    </div>
  );
};

export default AboutPage;
