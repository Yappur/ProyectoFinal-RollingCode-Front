import React, { useState, useEffect } from "react";
import { Calendar, Trash2 } from "lucide-react";
import ModalEditarT from "../../components/ModalEditarT";
import clientAxios from "../../helpers/axios.config";
import "../../css/PagesCSS/Turnos.css";

const VerTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingTurno, setEditingTurno] = useState(null);
  const [clases, setClases] = useState([]);

  useEffect(() => {
    fetchTurnos();
    fetchClases();
  }, []);

  const fetchClases = async () => {
    try {
      const token = sessionStorage.getItem("token").replace(/['"]+/g, "");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await clientAxios.get("/clases", config);
      setClases(response.data.clases || []);
    } catch (error) {
      console.error("Error al cargar las clases:", error);
    }
  };

  const fetchTurnos = async () => {
    try {
      const token = sessionStorage.getItem("token").replace(/['"]+/g, "");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await clientAxios.get("/turnos/turnosUsuario", config);
      setTurnos(response.data.turnos || response.data || []);
      setLoading(false);
    } catch (err) {
      handleError(err);
      setLoading(false);
    }
  };

  const handleError = (err) => {
    const errorMessage =
      err.code === "ERR_NETWORK"
        ? "Error de conexión con el servidor"
        : err.response?.data?.mensaje || "Error al procesar la solicitud";
    setError(errorMessage);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de que deseas eliminar este turno?"))
      return;

    try {
      const token = sessionStorage.getItem("token").replace(/['"]+/g, "");
      await clientAxios.delete(`/turnos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTurnos(turnos.filter((turno) => turno._id !== id));
    } catch (err) {
      handleError(err);
    }
  };

  const handleUpdate = (updatedTurno) => {
    setTurnos(
      turnos.map((t) => (t._id === updatedTurno._id ? updatedTurno : t))
    );
  };

  if (loading) {
    return <div className="spinner-border text-primary" role="status" />;
  }

  return (
    <div className="container py-5 ver-turnos">
      <div className="d-flex align-items-center gap-2 mb-4">
        <Calendar className="me-2" />
        <h1 className="mb-0">Mis Turnos</h1>
      </div>

      {error && (
        <div className="alert alert-danger">
          {error}
          <button
            onClick={() => window.location.reload()}
            className="btn btn-outline-danger btn-sm ms-2"
          >
            Reintentar
          </button>
        </div>
      )}

      <div className="row">
        {turnos.length === 0 && !error ? (
          <div className="col-12 text-center py-5">
            <p className="text-muted">No tienes turnos programados.</p>
          </div>
        ) : (
          turnos.map((turno) => (
            <div key={turno._id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <h3 className="card-title h5 mb-3">
                      {turno.clase?.nombre || "Clase sin nombre"}
                    </h3>
                    <div className="d-flex gap-2">
                      <button
                        onClick={() => setEditingTurno(turno)}
                        className="btn btn-outline-primary btn-sm"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(turno._id)}
                        className="btn btn-outline-danger btn-sm"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="card-text">
                    <p className="mb-2">
                      <strong>Fecha:</strong>{" "}
                      {new Date(turno.fecha).toLocaleDateString("es-ES")}
                    </p>
                    <p className="mb-2">
                      <strong>Hora:</strong> {turno.hora}
                    </p>
                    {turno.clase?.descripcion && (
                      <p className="mb-0">
                        <strong>Descripción:</strong> {turno.clase.descripcion}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {editingTurno && (
        <ModalEditarT
          turno={editingTurno}
          onClose={() => setEditingTurno(null)}
          onUpdate={handleUpdate}
          clases={clases}
        />
      )}
    </div>
  );
};

export default VerTurnos;
