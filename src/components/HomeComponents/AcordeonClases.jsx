import React from "react";
import "./Accordion.css"; // Asegúrate de tener el archivo CSS correspondiente

const Accordion = () => {
  return (
    <div>
      <details>
        <summary>Imagen 1</summary>
        <div className="content">
          <img src="image1.jpg" alt="Imagen 1" />
        </div>
      </details>

      <details>
        <summary>Imagen 2</summary>
        <div className="content">
          <img src="image2.jpg" alt="Imagen 2" />
        </div>
      </details>

      <details>
        <summary>Imagen 3</summary>
        <div className="content">
          <img src="image3.jpg" alt="Imagen 3" />
        </div>
      </details>
    </div>
  );
};

export default Accordion;
