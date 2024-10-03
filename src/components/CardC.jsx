import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/ComponentsCSS/CardC.css";
import { useNavigate } from "react-router-dom";

const CardC = ({ clase, to, texto }) => {
  const navigate = useNavigate();

  // Manejador de navegación
  const handleNavigate = () => {
    navigate(to);
  };

  return (
    // Asegúrate de retornar el JSX aquí
    <div className="container-card">
      {["Dark"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          border="light"
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Img variant="top" src={clase.imagen} alt={clase.nombre} />
          <Card.Body>
            <Card.Title>{clase.nombre}</Card.Title>
            <Card.Text>
              {clase.descripcion.length > 100
                ? `${clase.descripcion.substring(0, 100)}...`
                : clase.descripcion}
            </Card.Text>
            <Button variant="primary" onClick={handleNavigate}>
              {texto}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardC;
