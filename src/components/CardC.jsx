import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/ComponentsCSS/CardC.css";

const CardC = ({ titulo, descripcion, imagen }) => {
  return (
    <>
      {["Dark"].map((variant) => (
        <div className="container-card">
          <Card
            bg={variant.toLowerCase()}
            border="light"
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
              <Card.Title>{titulo}</Card.Title>
              <Card.Text>{descripcion}</Card.Text>
              <Button variant="primary">Ver Mas</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default CardC;
