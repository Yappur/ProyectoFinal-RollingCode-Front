import React from "react";
import { cambiarTituloPagina } from "../helpers/cambiarTitulos";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const PlanesPage = () => {
  cambiarTituloPagina("Planes de Gimnasio");

  const planes = [
    {
      title: "PASE LIBRE",
      description:
        "Acceso ilimitado a las instalaciones de la sucursal, al área de máquinas, la zona de cintas y la asistencia de un profesional encargado de elaborar tu plan personalizado.",
      whatsappLink: "https://wa.me/5493815745933",
    },
    {
      title: "PASE LIBRE SUMANDO A UN AMIGO",
      description:
        "Obtienes los beneficios de un pase libre si traes a un amigo.",
      whatsappLink: "https://wa.me/5493815745933",
    },
    {
      title: "TRIMESTRAL",
      description:
        "Obtienes los beneficios de un pase libre a un precio único por tres meses, lo cual te proporciona el tiempo necesario para alcanzar tus objetivos.",
      whatsappLink: "https://wa.me/5493815745933",
    },
  ];

  return (
    <div className="page-container">
      <Container className="text-center">
        <h1 className="container-page">Nuestros Planes</h1>
        <Row className="justify-content-center align-items-center">
          {planes.map((plan, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{plan.title}</Card.Title>
                  <Card.Text>{plan.description}</Card.Text>
                  <Button
                    variant="success"
                    href={plan.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comunícate por WhatsApp
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PlanesPage;
