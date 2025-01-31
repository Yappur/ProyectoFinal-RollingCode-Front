import { cambiarTituloPagina } from "../../helpers/cambiarTitulos";
import Container from "react-bootstrap/Container";
import TableC from "../../components/TableC";
import "../../css/PagesCSS/PanelClases.css";
import Pagination from "react-bootstrap/Pagination";
import ClasesFormC from "../../components/ClasesFormC";
import { useState, useEffect } from "react";
import clientAxios, { configHeaders } from "../../helpers/axios.config";
import Swal from "sweetalert2";

const PanelClases = () => {
  cambiarTituloPagina("PanelClases");

  const [clases, setClases] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const obtenerClases = async () => {
    try {
      const result = await clientAxios.get(
        "/clases/listaClases",
        configHeaders
      );
      if (Array.isArray(result.data.clases)) {
        setClases(result.data.clases);
      } else {
        console.error("El formato de datos no es el esperado");
      }
    } catch (error) {
      console.error("Error al obtener clases:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al cargar las clases",
      });
    } finally {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    obtenerClases();
  }, []);

  // Función para actualizar clase
  const actualizarClase = async (updatedClase) => {
    try {
      const response = await clientAxios.put(
        `/clases/${updatedClase._id}`,
        updatedClase,
        configHeaders
      );

      if (response.data) {
        // Actualizar el estado local
        setClases((prevClases) =>
          prevClases.map((clase) =>
            clase._id === updatedClase._id ? response.data : clase
          )
        );

        Swal.fire({
          icon: "success",
          title: "¡Éxito!",
          text: "La clase ha sido actualizada correctamente",
        });
      }
    } catch (error) {
      console.error("Error al actualizar la clase:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.mensaje || "Error al actualizar la clase",
      });
    }
  };

  const eliminarClase = async (id) => {
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminarlo!",
      });

      if (result.isConfirmed) {
        await clientAxios.delete(`/clases/${id}`, configHeaders);

        setClases((prevClases) =>
          prevClases.filter((clase) => clase._id !== id)
        );

        Swal.fire({
          title: "¡Eliminado!",
          text: "La clase ha sido eliminada.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error al eliminar la clase:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al eliminar la clase",
      });
    }
  };

  const addClase = async (nuevaClase) => {
    try {
      console.log("Datos a enviar:", nuevaClase); // Para depuración

      const response = await clientAxios.post(
        "/clases/crearClase",
        nuevaClase,
        configHeaders
      );

      if (response.data && response.data.clase) {
        setClases((prevClases) => [...prevClases, response.data.clase]);

        Swal.fire({
          icon: "success",
          title: "¡Éxito!",
          text: "Clase creada correctamente",
        });
      } else {
        console.error("Respuesta inesperada:", response.data);
      }
    } catch (error) {
      console.error("Error completo:", error.response?.data);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.msg || "Error al crear la clase",
      });
    }
  };
  // Paginación
  const indexOfLastClase = currentPage * itemsPerPage;
  const indexOfFirstClase = indexOfLastClase - itemsPerPage;
  const currentClases = clases.slice(indexOfFirstClase, indexOfLastClase);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(clases.length / itemsPerPage);
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
    <>
      <div className="body-clases">
        <div className="container-clase-text">
          <h2 className="d-flex justify-content-center align-items-center">
            Panel de administración de clases
          </h2>
        </div>
        <div className="add-clase">
          <ClasesFormC addClase={addClase} />
        </div>
        <Container className="container-table">
          <TableC
            dataItems={currentClases || []}
            idPagina="clases"
            eliminarItem={eliminarClase}
            actualizarClase={actualizarClase}
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
    </>
  );
};

export default PanelClases;
