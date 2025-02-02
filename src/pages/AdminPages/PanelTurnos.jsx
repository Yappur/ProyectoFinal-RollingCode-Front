import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import TableTurnos from "../../components/TableTurnos";
import Pagination from "react-bootstrap/Pagination";
import clientAxios, { configHeaders } from "../../helpers/axios.config";
import Swal from "sweetalert2";

const PanelTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const obtenerTurnos = async () => {
    try {
      console.log("Obteniendo turnos...");

      // Verifica si los headers están bien definidos
      console.log("Headers usados:", configHeaders);

      const result = await clientAxios.get("/turnos/listaTurnos", {
        headers: configHeaders.headers,
      });

      if (Array.isArray(result.data)) {
        setTurnos(result.data);
        console.log("Turnos cargados correctamente:", result.data);
      } else {
        console.error("Formato inesperado de datos:", result.data);
      }
    } catch (error) {
      console.error("Error al obtener turnos:", error.response?.data || error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error.response?.data?.mensaje || "No se pudieron cargar los turnos",
      });
    } finally {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    obtenerTurnos();
  }, []);

  const eliminarTurno = async (id) => {
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!",
      });

      if (result.isConfirmed) {
        await clientAxios.delete(`/turnos/${id}`, configHeaders);
        setTurnos((prevTurnos) =>
          prevTurnos.filter((turno) => turno._id !== id)
        );
        Swal.fire({
          title: "¡Eliminado!",
          text: "El turno ha sido eliminado.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error al eliminar el turno:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al eliminar el turno",
      });
    }
  };

  const actualizarTurno = async (updatedTurno) => {
    try {
      const response = await clientAxios.put(
        `/turnos/${updatedTurno._id}`,
        updatedTurno,
        configHeaders
      );

      if (response.data && response.data.turno) {
        setTurnos((prevTurnos) =>
          prevTurnos.map((turno) =>
            turno._id === response.data.turno._id ? response.data.turno : turno
          )
        );

        Swal.fire({
          icon: "success",
          title: "¡Éxito!",
          text: "El turno ha sido actualizado correctamente",
        });
      }
    } catch (error) {
      console.error("Error al actualizar el turno:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.mensaje || "Error al actualizar el turno",
      });
    }
  };

  // Paginación
  const indexOfLastTurno = currentPage * itemsPerPage;
  const indexOfFirstTurno = indexOfLastTurno - itemsPerPage;
  const currentTurnos = turnos.slice(indexOfFirstTurno, indexOfLastTurno);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(turnos.length / itemsPerPage);
  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="body-turnos">
      <div className="container-turno-text">
        <h1 className="container-admin estilo-degradado d-flex justify-content-center align-items-center">
          Panel de administración de turnos
        </h1>
      </div>
      <Container className="container-table">
        <TableTurnos
          dataItems={currentTurnos}
          eliminarItem={eliminarTurno}
          actualizarTurno={actualizarTurno}
        />
      </Container>
      <div className="d-flex justify-content-center align-items-center">
        <Pagination>
          <Pagination.First onClick={() => setCurrentPage(1)} />
          <Pagination.Prev
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          />
          {paginationItems}
          <Pagination.Next
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
          />
          <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
        </Pagination>
      </div>
    </div>
  );
};

export default PanelTurnos;
