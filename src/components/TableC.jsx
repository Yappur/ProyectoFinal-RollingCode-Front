import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ModalEditarClase from "./ModalEditarClase";
import Swal from "sweetalert2";
import clientAxios, { configHeaders } from "../helpers/axios.config";

const TableC = ({
  dataItems = [],
  idPagina,
  eliminarItem,
  actualizarClase,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [claseSeleccionada, setClaseSeleccionada] = useState(null);

  const handleEliminar = (id) => {
    if (!id) {
      console.error("ID no válido:", id);
      return;
    }
    eliminarItem(id);
  };

  const handleCambiarRol = async (usuario) => {
    try {
      const result = await Swal.fire({
        title: "¿Cambiar rol de usuario?",
        text: `¿Deseas cambiar el rol de ${usuario.nombreUsuario} de ${
          usuario.role
        } a ${usuario.role === "user" ? "admin" : "user"}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, cambiar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        const response = await clientAxios.put(
          `/usuarios/cambiarRol/${usuario._id}`,
          {},
          configHeaders
        );

        if (response.status === 200) {
          Swal.fire({
            title: "¡Rol actualizado!",
            text: "El rol del usuario ha sido actualizado exitosamente.",
            icon: "success",
          });
          // Recargar la lista de usuarios
          window.location.reload();
        }
      }
    } catch (error) {
      console.error("Error al cambiar rol:", error);
      Swal.fire({
        title: "Error",
        text: "No se pudo cambiar el rol del usuario",
        icon: "error",
      });
    }
  };

  const handleToggleBloqueo = async (usuario) => {
    try {
      const result = await Swal.fire({
        title: `¿${usuario.bloqueado ? "Desbloquear" : "Bloquear"} usuario?`,
        text: `¿Deseas ${usuario.bloqueado ? "desbloquear" : "bloquear"} a ${
          usuario.nombreUsuario
        }?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Sí, ${
          usuario.bloqueado ? "desbloquear" : "bloquear"
        }`,
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        const response = await clientAxios.put(
          `/usuarios/toggleBloqueo/${usuario._id}`,
          {},
          configHeaders
        );

        if (response.status === 200) {
          Swal.fire({
            title: "¡Estado actualizado!",
            text: `El usuario ha sido ${
              usuario.bloqueado ? "desbloqueado" : "bloqueado"
            } exitosamente.`,
            icon: "success",
          });
          // Recargar la lista de usuarios
          window.location.reload();
        }
      }
    } catch (error) {
      console.error("Error al cambiar estado de bloqueo:", error);
      Swal.fire({
        title: "Error",
        text: "No se pudo cambiar el estado del usuario",
        icon: "error",
      });
    }
  };

  const handleEditar = (clase) => {
    setClaseSeleccionada(clase);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setClaseSeleccionada(null);
  };

  const handleUpdateClase = async (updatedClase) => {
    try {
      await actualizarClase(updatedClase);
      handleCloseModal();
    } catch (error) {
      console.error("Error al actualizar la clase:", error);
      alert("Error al actualizar la clase");
    }
  };

  const handleToggleDisponibilidad = async (clase) => {
    try {
      const updatedClase = { ...clase, disponible: !clase.disponible };

      // Llamada a la API para actualizar la disponibilidad en la base de datos
      await clientAxios.put(`/clases/${clase._id}`, updatedClase);

      // Actualizar el estado local
      actualizarClase(updatedClase);
    } catch (error) {
      console.error("Error al cambiar disponibilidad:", error);
      alert("No se pudo cambiar la disponibilidad de la clase.");
    }
  };

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          {idPagina === "usuarios" ? (
            <tr>
              <th>ID</th>
              <th>Usuarios</th>
              <th>Gmail</th>
              <th>Rol</th>
              <th>Bloqueado</th>
              <th>Acciones</th>
            </tr>
          ) : (
            <tr>
              <th>ID</th>
              <th>Clase</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Disponible</th>
              <th>Acciones</th>
            </tr>
          )}
        </thead>
        <tbody>
          {idPagina === "usuarios"
            ? dataItems.map(
                (usuario) =>
                  usuario && (
                    <tr key={usuario._id}>
                      <td>{usuario._id || "Sin ID"}</td>
                      <td>{usuario.nombreUsuario || "Sin nombre"}</td>
                      <td>{usuario.emailUsuario || "Sin email"}</td>
                      <td>{usuario.role || "Sin rol"}</td>
                      <td>{usuario.bloqueado ? "Sí" : "No"}</td>
                      <td>
                        <div className="d-flex gap-2 justify-content-center">
                          <Button
                            variant="warning"
                            onClick={() => handleCambiarRol(usuario)}
                          >
                            {usuario.role === "user"
                              ? "Hacer Admin"
                              : "Hacer Usuario"}
                          </Button>
                          <Button
                            variant={
                              usuario.bloqueado ? "success" : "secondary"
                            }
                            onClick={() => handleToggleBloqueo(usuario)}
                          >
                            {usuario.bloqueado ? "Desbloquear" : "Bloquear"}
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => handleEliminar(usuario._id)}
                          >
                            Eliminar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
              )
            : dataItems.map(
                (clase) =>
                  clase && (
                    <tr key={clase._id}>
                      <td>{clase._id || "Sin ID"}</td>
                      <td>{clase.nombreClase || "Sin nombre"}</td>
                      <td>{clase.descripcion || "Sin descripción"}</td>
                      <td>
                        <img
                          src={clase.img || "placeholder.png"}
                          alt={clase.nombre || "Clase sin nombre"}
                          style={{ width: "85px", height: "85px" }}
                        />
                      </td>
                      <td>{clase.disponible ? "✅" : "❌"}</td>

                      <td>
                        <Button
                          variant={clase.disponible ? "success" : "secondary"}
                          onClick={() => handleToggleDisponibilidad(clase)}
                        >
                          {clase.disponible ? "Deshabilitar" : "Habilitar"}
                        </Button>
                        <div className="d-flex gap-2 justify-content-center">
                          <Button
                            variant="danger"
                            onClick={() => handleEliminar(clase._id)}
                          >
                            Eliminar
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => handleEditar(clase)}
                          >
                            Editar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
              )}
        </tbody>
      </Table>

      {showModal && (
        <ModalEditarClase
          clase={claseSeleccionada}
          onClose={handleCloseModal}
          onUpdate={handleUpdateClase}
        />
      )}
    </>
  );
};

export default TableC;
