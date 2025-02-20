import React, { useState, useEffect } from "react";
import clientAxios, { configHeaders } from "../helpers/axios.config";

const ModalEditarTurno = ({ turno, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    fecha: "",
    hora: "",
    clase: "",
  });

  const [clasesDisponibles, setClasesDisponibles] = useState([]);

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
    if (turno) {
      // Asegurarse de que los datos se formateen correctamente
      setFormData({
        fecha: turno.fecha?.split("T")[0] || "",
        hora: turno.hora || "",
        // Manejar tanto el caso donde clase es un objeto como cuando es un ID
        clase:
          typeof turno.clase === "object"
            ? turno.clase?._id
            : turno.clase || "",
      });
    }
  }, [turno]);

  useEffect(() => {
    const obtenerClases = async () => {
      try {
        const response = await clientAxios.get(
          "/clases/listaClases",
          configHeaders
        );
        const clases = Array.isArray(response.data.clases)
          ? response.data.clases
          : [];
        setClasesDisponibles(clases);
      } catch (error) {
        console.error("Error al obtener las clases:", error);
        setClasesDisponibles([]);
      }
    };
    obtenerClases();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fechaAjustada = new Date(
        `${formData.fecha}T${formData.hora}:00-03:00`
      );

      const updatedTurno = {
        _id: turno._id,
        fecha: fechaAjustada.toISOString(),
        hora: formData.hora,
        clase: formData.clase,
        usuario: turno.usuario,
      };

      const response = await clientAxios.put(
        `/turnos/${turno._id}`,
        updatedTurno,
        configHeaders
      );

      if (response.data) {
        const updatedData = response.data.turno || response.data;
        onUpdate(updatedData);
        onClose();
      }
    } catch (error) {
      console.error("Error al actualizar el turno:", error);
      alert(error.response?.data?.mensaje || "Error al actualizar el turno");
    }
  };
  const isWeekday = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Turno</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Fecha</label>
                <input
                  type="date"
                  className="form-control"
                  value={formData.fecha}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => {
                    const selectedDate = e.target.value;
                    if (isWeekday(selectedDate)) {
                      setFormData({ ...formData, fecha: selectedDate });
                    } else {
                      alert("Por favor, selecciona un día hábil.");
                    }
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Hora</label>
                <select
                  className="form-select"
                  value={formData.hora}
                  onChange={(e) =>
                    setFormData({ ...formData, hora: e.target.value })
                  }
                  required
                >
                  <option value="" disabled>
                    Selecciona una hora
                  </option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Clase</label>
                <select
                  className="form-select"
                  value={formData.clase}
                  onChange={(e) =>
                    setFormData({ ...formData, clase: e.target.value })
                  }
                  required
                >
                  <option value="" disabled>
                    Selecciona una clase
                  </option>
                  {clasesDisponibles.map((clase) => (
                    <option key={clase._id} value={clase._id}>
                      {clase.nombreClase}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEditarTurno;
