import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert, Card, Row, Col } from "react-bootstrap";
import "../css/ComponentsCSS/Clima.css";

const ApiClima = () => {
  const [ApiClimaData, setApiClimaData] = useState(null);
  const [error, setError] = useState("");
  const apiKey = "0b3faf7e8253a23e8c15b8076e4ec357"; // Asegúrate de usar tu clave API

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handlePositionSuccess,
        handlePositionError
      );
    } else {
      setError("Geolocalización no es soportada por este navegador.");
    }
  };

  const handlePositionSuccess = async (position) => {
    const { latitude, longitude } = position.coords;
    await fetchApiClima(latitude, longitude);
  };

  const handlePositionError = (error) => {
    console.log(error);
    setError("No se pudo obtener la ubicación.");
  };

  const fetchApiClima = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      setApiClimaData(response.data);
      setError("");
    } catch (err) {
      console.log(err.response ? err.response.data : err.message);
      setError("Error al obtener el clima.");
      setApiClimaData(null);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="ApiClima-container d-flex justify-content-center align-items-center">
      {error && <Alert variant="danger">{error}</Alert>}

      {ApiClimaData && (
        <Card className="mt-3 ApiClima-card" style={{ width: "300px" }}>
          <Card.Body>
            <Card.Title>Clima en {ApiClimaData.name}</Card.Title>
            <Card.Text>
              <Row>
                <Col md={6}>
                  <strong>Temperatura:</strong> {ApiClimaData.main.temp} °C
                </Col>
                <Col md={6}>
                  <strong>Humedad:</strong> {ApiClimaData.main.humidity}%
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Descripción:</strong>{" "}
                  {ApiClimaData.weather[0].description}
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    src={`https://openweathermap.org/img/wn/${ApiClimaData.weather[0].icon}@2x.png`}
                    alt={ApiClimaData.weather[0].description}
                    className="ApiClima-icon"
                  />
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ApiClima;
