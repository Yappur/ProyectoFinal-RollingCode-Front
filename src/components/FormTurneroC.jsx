import React, { useEffect, useState } from "react";
import axios from "axios";

const FormularioTurno = ({ turno, onClose, onUpdate }) => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [clase, setClase] = useState("");
  const [clases, setClases] = useState([]);

  useEffect(() => {
    if (turno) {
      setFecha(turno.fecha.split("T")[0]);
      setHora(turno.hora);
      setClase(turno.clase._id);
    }
    obtenerClases();
  }, [turno]);

  const obtenerClases = async () => {
    try {
      const { data } = await axios.get("/clases");
      setClases(data);
    } catch (error) {
      console.error("Error al obtener las clases:", error);
    }
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const data = { fecha, hora, clase };
      if (turno) {
        await axios.put(`/turnos/${turno._id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post("/turnos/crearTurno", data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error al guardar el turno:", error);
    }
  };

  return (
    <div>
      <h2>{turno ? "Editar Turno" : "Crear Turno"}</h2>
      <form onSubmit={manejarSubmit}>
        <label>
          Fecha:
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </label>
        <label>
          Hora:
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </label>
        <label>
          Clase:
          <select
            value={clase}
            onChange={(e) => setClase(e.target.value)}
            required
          >
            <option value="">Selecciona una clase</option>
            {clases.map((clase) => (
              <option key={clase._id} value={clase._id}>
                {clase.nombre}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Guardar</button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default FormularioTurno;
