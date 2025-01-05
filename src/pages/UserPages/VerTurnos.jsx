import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import clientAxios from "../../helpers/axios.config";
import "../../css/PagesCSS/Turnos.css";

const VerTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const token = sessionStorage.getItem("token").replace(/['"]+/g, "");

        if (!token) {
          console.log("No se encontró el token en sessionStorage");
          setError("No has iniciado sesión o tu sesión ha expirado");
          setLoading(false);
          return;
        }

        // Configuración de la petición
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };

        // Realizar la petición
        const response = await clientAxios.get("/turnos/turnosUsuario", config);

        // Manejo de la respuesta
        if (response.data && Array.isArray(response.data.turnos)) {
          setTurnos(response.data.turnos);
        } else if (Array.isArray(response.data)) {
          setTurnos(response.data);
        } else {
          console.log("Formato de respuesta inesperado:", response.data);
          setTurnos([]);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error completo:", err);

        // Manejo específico de errores
        if (err.code === "ERR_NETWORK") {
          setError(
            "Error de conexión con el servidor. Por favor, verifica tu conexión a internet."
          );
        } else if (err.response?.status === 401) {
          setError(
            "La sesión ha expirado. Por favor, inicia sesión nuevamente."
          );
        } else if (err.response?.status === 403) {
          setError("No tienes permisos para acceder a estos recursos.");
        } else {
          setError(
            err.response?.data?.mensaje ||
              "Error al cargar los turnos. Por favor, intenta de nuevo."
          );
        }

        setLoading(false);
      }
    };

    fetchTurnos();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {process.env.NODE_ENV !== "production" && (
        <div className="alert alert-info mb-3">
          <small>
            Estado del token:{" "}
            {sessionStorage.getItem("token") ? "Presente" : "No encontrado"}
          </small>
        </div>
      )}

      <div className="d-flex align-items-center gap-2 mb-4">
        <Calendar className="me-2" />
        <h1 className="mb-0">Mis Turnos</h1>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          <p className="mb-2">{error}</p>
          <div className="d-flex gap-2">
            <button
              onClick={() => window.location.reload()}
              className="btn btn-outline-danger btn-sm"
            >
              Reintentar
            </button>
            {error.includes("sesión") && (
              <button
                onClick={() => (window.location.href = "/login")}
                className="btn btn-primary btn-sm"
              >
                Ir al login
              </button>
            )}
          </div>
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
                  <h3 className="card-title h5 mb-3">
                    {turno.clase?.nombre || "Clase sin nombre"}
                  </h3>
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
    </div>
  );
};

export default VerTurnos;
