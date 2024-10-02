import "../css/ComponentsCSS/FooterC.css";

const FooterC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-section logo">
          <img
            src="https://res.cloudinary.com/doh6efk57/image/upload/v1727832010/EnergymFavicon_kbtwim.png"
            alt="Logo del Gimnasio"
            className="footer-logo"
          />
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Teléfono: +381 447 9781</p>
          <p>Email: EnerGym@gimnasio.com</p>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <ul className="social-media">
            <li>
              <a href="*">Facebook</a>
            </li>
            <li>
              <a href="*">Instagram</a>
            </li>
            <li>
              <a href="*">Twitter</a>
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
              <a href="/planes">Servicios</a>
            </li>
            <li>
              <a href="/contact">Contactos</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default FooterC;
