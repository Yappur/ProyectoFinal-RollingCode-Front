import React from "react";
import "../css/ComponentsCSS/WhatsappC.css";

const WhatsappContact = () => {
  return (
    <div className="whatsapp">
      <a
        href="https://wa.me/5493814479781"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../src/assets/img/WaLogo.svg" alt="whatsapp" />
      </a>
    </div>
  );
};

export default WhatsappContact;
