import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ModalEditarT from "./ModalEditarT";

const TableTurnos = ({ dataItems = [], eliminarItem, actualizarTurno }) => {
  const [showModal, setShowModal] = useState(false);
  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);

  const handleEliminar = (id) => {
    if (!id) {
      console.error("ID no válido:", id);
      return;
    }
    eliminarItem(id);
  };

  const handleEditar = (turno) => {
    console.log("Turno seleccionado para editar:", turno); // Verifica aquí
    setTurnoSeleccionado(turno);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTurnoSeleccionado(null);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Clase</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataItems.map(
            (turno) =>
              turno && (
                <tr key={turno._id}>
                  <td>{turno._id}</td>
                  <td>{formatDate(turno.fecha)}</td>
                  <td>{turno.hora}</td>
                  <td>{turno.clase?.nombreClase || "N/A"}</td>
                  <td>{turno.usuario?.nombreUsuario || "N/A"}</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <Button
                        variant="danger"
                        onClick={() => handleEliminar(turno._id)}
                      >
                        Eliminar
                      </Button>
                      <Button
                        variant="warning"
                        onClick={() => handleEditar(turno)}
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
        <ModalEditarT
          turno={turnoSeleccionado}
          onClose={handleCloseModal}
          onUpdate={actualizarTurno}
        />
      )}
    </>
  );
};

export default TableTurnos;
