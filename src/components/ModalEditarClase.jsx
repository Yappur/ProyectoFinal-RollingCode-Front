import React, { useState, useEffect } from "react";
import clientAxios from "../helpers/axios.config";

const ModalEditarClase = ({ clase, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    nombreClase: clase.nombreClase || "",
    descripcion: clase.descripcion || "",
    img: clase.img || "",
  });

  useEffect(() => {
    setFormData({
      nombreClase: clase.nombreClase || "",
      descripcion: clase.descripcion || "",
      img: clase.img || "",
    });
  }, [clase]);

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
        `/clases/${clase._id}`,
        formData,
        config
      );

      if (response.data) {
        onUpdate({
          ...clase,
          ...formData,
          _id: clase._id,
        });
      }
    } catch (error) {
      console.error("Error al actualizar clase:", error);
      alert(error.response?.data?.mensaje || "Error al actualizar la clase");
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
            <h5 className="modal-title">Editar Clase</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Nombre de la Clase</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.nombreClase}
                  onChange={(e) =>
                    setFormData({ ...formData, nombreClase: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea
                  className="form-control"
                  value={formData.descripcion}
                  onChange={(e) =>
                    setFormData({ ...formData, descripcion: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Imagen URL</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.img}
                  onChange={(e) =>
                    setFormData({ ...formData, img: e.target.value })
                  }
                />
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

export default ModalEditarClase;
