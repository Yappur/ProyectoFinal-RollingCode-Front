import React, { useEffect, useState } from "react";
import axios from "axios";
import FormTurneroC from "../components/FormTurneroC";

const Turnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);

  useEffect(() => {
    obtenerTurnos();
  }, []);

  const obtenerTurnos = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const { data } = await axios.get("/turnos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTurnos(data);
    } catch (error) {
      console.error("Error al obtener los turnos:", error);
    }
  };

  const eliminarTurno = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`/api/turnos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      obtenerTurnos();
    } catch (error) {
      console.error("Error al eliminar el turno:", error);
    }
  };

  return (
    <div>
      <h1>Gestión de Turnos</h1>
      <button onClick={() => setFormVisible(true)}>Crear Turno</button>
      <ul>
        {turnos.map((turno) => (
          <li key={turno._id}>
            <p>Fecha: {new Date(turno.fecha).toLocaleDateString()}</p>
            <p>Hora: {turno.hora}</p>
            <p>Clase: {turno.clase.nombre}</p>
            <button onClick={() => eliminarTurno(turno._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {formVisible && (
        <FormTurneroC
          turno={turnoSeleccionado}
          onClose={() => {
            setFormVisible(false);
            setTurnoSeleccionado(null);
          }}
          onUpdate={obtenerTurnos}
        />
      )}
    </div>
  );
};

export default Turnos;
