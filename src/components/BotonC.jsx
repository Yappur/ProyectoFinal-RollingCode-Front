import "../css/ComponentsCSS/BotonesC.css";
import { useNavigate } from "react-router-dom";

const BotonC = ({ to, children }) => {
  const navigate = useNavigate();
  const handleClick = (ev) => {
    ev.preventDefault();
    navigate(to);
  };
  return (
    <div className="botonComponent-contenedor">
      <a href={to} className="botonComponent" onClick={handleClick}>
        {children}
      </a>
    </div>
  );
};

export default BotonC;
