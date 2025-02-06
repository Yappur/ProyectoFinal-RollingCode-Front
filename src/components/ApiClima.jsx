import { useState, useEffect } from "react";
import axios from "axios";
import { Alert, Card, Row, Col, Container, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ClimaComponente = () => {
  const [datosClima, setDatosClima] = useState(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);
  const apiKey = "0b3faf7e8253a23e8c15b8076e4ec357";

  const obtenerUbicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        manejarExitoUbicacion,
        manejarErrorUbicacion
      );
    } else {
      setError("La geolocalización no es compatible con este navegador.");
      setCargando(false);
    }
  };

  const manejarExitoUbicacion = async (posicion) => {
    const { latitude, longitude } = posicion.coords;
    await obtenerDatosClima(latitude, longitude);
  };

  const manejarErrorUbicacion = () => {
    setError("No se pudo obtener la ubicación.");
    setCargando(false);
  };

  const obtenerDatosClima = async (lat, lon) => {
    try {
      const respuesta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`
      );
      setDatosClima(respuesta.data);
      setError("");
    } catch (err) {
      console.log(err.response ? err.response.data : err.message);
      setError("Error al obtener el clima.");
      setDatosClima(null);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerUbicacion();
  }, []); //Fixed: Added empty dependency array []

  const obtenerMensajePositivo = () => {
    const mensajes = [
      "¡Hoy será un día excelente!",
      "El clima es perfecto para tener un gran día",
      "Aprovecha este hermoso día",
      "Sonríe, el día está lleno de posibilidades",
      "Hoy es un buen día para ir a ENERGYM",
    ];
    return mensajes[Math.floor(Math.random() * mensajes.length)];
  };

  if (cargando) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container className="d-flex justify-content-center align-items-center">
      {error && <Alert variant="danger">{error}</Alert>}

      {datosClima && (
        <Card
          className="text-center"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <Card.Body>
            <Card.Title className="mb-2">Clima en {datosClima.name}</Card.Title>
            <Row>
              <Col>
                <img
                  src={`https://openweathermap.org/img/wn/${datosClima.weather[0].icon}@2x.png`}
                  alt={datosClima.weather[0].description}
                  className="mx-auto d-block"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>{Math.round(datosClima.main.temp)}°C</h2>
                <p className="text-capitalize">
                  {datosClima.weather[0].description}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <strong>Humedad:</strong> {datosClima.main.humidity}%
                </p>
                <p>
                  <strong>Viento:</strong>{" "}
                  {Math.round(datosClima.wind.speed * 3.6)} km/h
                </p>
              </Col>
            </Row>
            <Alert variant="success" className="mt-1">
              {obtenerMensajePositivo()}
            </Alert>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default ClimaComponente;
