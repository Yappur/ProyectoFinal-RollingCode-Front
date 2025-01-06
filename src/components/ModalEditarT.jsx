import React, { useState, useEffect } from "react";
import { Calendar, Trash2, Edit2 } from "lucide-react";
import clientAxios from "../helpers/axios.config";
import "../css/PagesCSS/Turnos.css";

const ModalEditarT = ({ turno, onClose, onUpdate, clases }) => {
  const [formData, setFormData] = useState({
    fecha: turno.fecha.split("T")[0],
    hora: turno.hora,
    clase: turno.clase?._id,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("token").replace(/['"]+/g, "");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await clientAxios.put(
        `/turnos/${turno._id}`,
        formData,
        config
      );

      onUpdate(response.data.turno);
      onClose();
    } catch (error) {
      alert(error.response?.data?.mensaje || "Error al actualizar el turno");
    }
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
                  onChange={(e) =>
                    setFormData({ ...formData, fecha: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Hora</label>
                <input
                  type="time"
                  className="form-control"
                  value={formData.hora}
                  onChange={(e) =>
                    setFormData({ ...formData, hora: e.target.value })
                  }
                  required
                />
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
                  {clases.map((clase) => (
                    <option key={clase._id} value={clase._id}>
                      {clase.nombre}
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

export default ModalEditarT;
