import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import "../css/ComponentsCSS/RedesSocialesC.css";

const RedesSociales = () => {
  return (
    <div className="container-redes">
      <a href="*">
        <FaInstagram className="icon" />
      </a>
      <a href="*">
        <FaFacebook className="icon" />
      </a>
      <a href="*">
        <FaXTwitter className="icon" />
      </a>
    </div>
  );
};

export default RedesSociales;
