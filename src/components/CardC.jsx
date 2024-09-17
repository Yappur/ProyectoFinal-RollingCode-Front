import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/ComponentsCSS/CardC.css";

const CardC = ({ titulo, descripcion, imagen }) => {
  return (
    <div className="container-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Button variant="primary">Ver Mas</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardC;
