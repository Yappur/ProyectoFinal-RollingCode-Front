import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../css/ComponentsCSS/CardC.css";

const CardC = () => {
  return (
    <div className="container-card">
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col key={idx}>
            <Card border="primary">
              <Card.Img variant="top" src="/src/assets/img/gym1image.png" />
              <Card.Body>
                <Card.Title>GIMNASIO</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="outline-primary">Ver Mas</Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardC;
