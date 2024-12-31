import "../../css/ComponentsCSS/AcordeonClasesCss.css";

const Accordion = () => {
  return (
    <div className="accordion">
      <details>
        <summary>
          <img
            src="https://res.cloudinary.com/doh6efk57/image/upload/v1734142001/logo-Kappa-640x360_l6wtvd.png"
            alt="Vista previa Imagen 1"
          />
        </summary>
        <div className="content">
          <img
            src="https://res.cloudinary.com/doh6efk57/image/upload/v1734142001/logo-Kappa-640x360_l6wtvd.png"
            alt="Imagen 1"
          />
        </div>
      </details>

      <details>
        <summary>
          <img
            src="https://res.cloudinary.com/doh6efk57/image/upload/v1734142001/logo-Kappa-640x360_l6wtvd.png"
            alt="Vista previa Imagen 2"
          />
        </summary>
        <div className="content">
          <img
            src="https://res.cloudinary.com/doh6efk57/image/upload/v1734142001/logo-Kappa-640x360_l6wtvd.png"
            alt="Imagen 2"
          />
        </div>
      </details>

      <details>
        <summary>
          <img
            src="https://res.cloudinary.com/doh6efk57/image/upload/v1734142001/logo-Kappa-640x360_l6wtvd.png"
            alt="Vista previa Imagen 3"
          />
        </summary>
        <div className="content">
          <img
            src="https://res.cloudinary.com/doh6efk57/image/upload/v1734142001/logo-Kappa-640x360_l6wtvd.png"
            alt="Imagen 3"
          />
        </div>
      </details>
    </div>
  );
};

export default Accordion;
