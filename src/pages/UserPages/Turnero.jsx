import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import clientAxios from "../../helpers/axios.config";
import "../../css/PagesCSS/Turnos.css";
import "../../css/index.css";

const AppointmentManager = () => {
  const [clases, setClases] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const availableTimes = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];

  useEffect(() => {
    fetchClases();
  }, []);

  const fetchClases = async () => {
    try {
      const response = await clientAxios.get("/clases/listaClases", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      const data = response.data;
      setClases(data.clases || []);
    } catch (error) {
      console.error("Error al cargar clases:", error);
      setError("Error al cargar las clases");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const token = sessionStorage.getItem("token").replace(/['"]+/g, "");

      const response = await clientAxios.post(
        "/turnos/crearTurno",
        {
          fecha: selectedDate,
          hora: selectedTime,
          clase: selectedClass,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setSuccess("Turno creado exitosamente");
      setSelectedDate("");
      setSelectedTime("");
      setSelectedClass("");
    } catch (error) {
      console.error("Error al crear turno:", error);
      if (error.response?.status === 401) {
        setError(
          "Sesión expirada o inválida. Por favor, vuelve a iniciar sesión."
        );
      } else {
        setError(error.response?.data?.mensaje || "Error al crear el turno");
      }
    }
  };

  return (
    <div className="container-general app-mejorVista container py-1 turnero">
      <h1 className="estilo-degradado mb-4">¡Reserva tu Turno!</h1>
      <div className="formulario-turnos">
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-center">
            <Calendar className="me-2 " />
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* Fecha */}
              <div className="mb-3">
                <label className="form-label">Fecha</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="form-control"
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>

              {/* Hora */}
              <div className="mb-3">
                <label className="form-label">Hora</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="">Selecciona un horario</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clase */}
              <div className="mb-3">
                <label className="form-label">Clase</label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="">Selecciona una clase</option>
                  {clases.map((clase) => (
                    <option key={clase._id} value={clase._id}>
                      {clase.nombreClase}
                    </option>
                  ))}
                </select>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <button type="submit" className="btn btn-primary w-100">
                Reservar Turno
              </button>
            </form>
          </div>
        </div>
      </div>
      <h3 className="section-subtitle mt-4">
        Si te confundistes con el horario o día, podes cambiarlo o cancelarlo{" "}
      </h3>
    </div>
  );
};

export default AppointmentManager;
