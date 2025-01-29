import React, { useState, useEffect } from "react";
import clientAxios from "../helpers/axios.config";

const ModalEditar = ({ item, onClose, onUpdate, clases, type }) => {
  const [formData, setFormData] = useState({
    nombreClase: item?.nombreClase || "", // Para clases
    descripcion: item?.descripcion || "", // Para clases
    fecha: item?.fecha?.split("T")[0] || "", // Para turnos
    hora: item?.hora || "", // Para turnos
    clase: item?.clase?._id || "", // Para turnos, clase asociada
  });

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
    if (item) {
      setFormData({
        ...formData,
        nombreClase: item.nombreClase || "",
        descripcion: item.descripcion || "",
        fecha: item.fecha?.split("T")[0] || "",
        hora: item.hora || "",
        clase: item.clase?._id || "",
      });
    }
  }, [item]);

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

      let response;
      if (type === "turno") {
        response = await clientAxios.put(
          `/turnos/${item._id}`,
          formData,
          config
        );
        onUpdate(response.data.turno);
      } else if (type === "clase") {
        response = await clientAxios.put(
          `/clases/${item._id}`,
          formData,
          config
        );
        onUpdate(response.data.clase);
      }

      onClose();
    } catch (error) {
      alert(error.response?.data?.mensaje || "Error al actualizar el item");
    }
  };

  const isWeekday = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay(); // 0: Domingo, 6: Sábado
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
            <h5 className="modal-title">
              {type === "turno" ? "Editar Turno" : "Editar Clase"}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {type === "turno" ? (
                <>
                  <div className="mb-3">
                    <label className="form-label">Fecha</label>
                    <input
                      type="date"
                      className="form-control"
                      value={formData.fecha}
                      min={new Date().toISOString().split("T")[0]} // Fecha mínima: hoy
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
                      {clases.map((clase) => (
                        <option key={clase._id} value={clase._id}>
                          {clase.nombreClase}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-3">
                    <label className="form-label">Nombre de la Clase</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.nombreClase}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          nombreClase: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Descripción de la Clase
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.descripcion}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          descripcion: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </>
              )}
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

export default ModalEditar;
