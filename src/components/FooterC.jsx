import "../css/ComponentsCSS/FooterC.css";

const FooterC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-section logo">
          <img
            src="../src/assets/img/Energymfavicon.png"
            alt="Logo del Gimnasio"
            className="footer-logo"
          />
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Teléfono: +123 456 7890</p>
          <p>Email: info@gimnasio.com</p>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <ul className="social-media">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contactos</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default FooterC;
