import { useState, useEffect } from "react";
import "../css/ComponentsCSS/WhatsappC.css";

const WhatsappContact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="botones-bottomRight">
      <div className="boton-ScrollToTop">
        {isVisible && (
          <button
            onClick={scrollToTop}
            style={{
              width: "45px",
              height: "45px",
              backgroundColor: "white",
              color: "black",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "20px",
              marginTop: "10px", // Espacio entre los botones
            }}
          >
            <strong>↑</strong>
          </button>
        )}
      </div>
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
