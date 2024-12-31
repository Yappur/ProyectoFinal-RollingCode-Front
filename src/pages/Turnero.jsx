import React, { useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import "../css/PagesCSS/Turnos.css";

const Turnero = () => {
  const [turnos, setTurnos] = useState([]);
  const [nuevoTurno, setNuevoTurno] = useState({
    nombreUsuario: "", // Este podría ser el nombre del usuario autenticado, si aplica
    fecha: "",
    horaInicio: "",
    clase: "Crossfit", // Valor por defecto
  });

  // Manejar los cambios en el formulario
  const handleInputChange = (e) => {
    setNuevoTurno({ ...nuevoTurno, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = sessionStorage.getItem("token"); // Recuperar el token almacenado para autenticación
      const response = await fetch("http://localhost:3001/turnos/crearTurno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Incluir el token en el encabezado
        },
        body: JSON.stringify(nuevoTurno),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el turno");
      }

      const data = await response.json();
      setTurnos([...turnos, data]); // Agregar el nuevo turno a la tabla
      setNuevoTurno({
        nombreUsuario: "",
        fecha: "",
        horaInicio: "",
        horaFin: "",
        clase: "Crossfit", // Reiniciar el formulario
      });
      alert("Turno registrado con éxito");
    } catch (error) {
      console.error("Error al registrar el turno:", error.message);
      alert("Hubo un error al registrar el turno.");
    }
  };

  return (
    <Container className="container-turnero">
      <h2>Turnero del Gimnasio</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre del Usuario</Form.Label>
          <Form.Control
            type="text"
            name="nombreUsuario"
            value={nuevoTurno.nombreUsuario}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            name="fecha"
            value={nuevoTurno.fecha}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Hora de Inicio</Form.Label>
          <Form.Control
            type="time"
            name="horaInicio"
            value={nuevoTurno.horaInicio}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Clase</Form.Label>
          <Form.Control
            as="select"
            name="clase"
            value={nuevoTurno.clase}
            onChange={handleInputChange}
            required
          >
            <option value="Crossfit">Crossfit</option>
            <option value="Funcional">Funcional</option>
            <option value="Pilates">Pilates</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Agendar Turno
        </Button>
      </Form>

      <h3 className="mt-4">Turnos Agendados</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre del Usuario</th>
            <th>Fecha</th>
            <th>Hora de Inicio</th>
            <th>Hora de Fin</th>
            <th>Clase</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno, index) => (
            <tr key={index}>
              <td>{turno.nombreUsuario}</td>
              <td>{new Date(turno.fecha).toLocaleDateString()}</td>
              <td>{turno.horaInicio}</td>
              <td>{turno.horaFin}</td>
              <td>{turno.clase}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Turnero;
