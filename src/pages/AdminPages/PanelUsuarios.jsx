import { cambiarTituloPagina } from "../../helpers/cambiarTitulos";
import Container from "react-bootstrap/Container";
import TableC from "../../components/TableC";
import "../../css/PagesCSS/PanelUsuarios.css";
import { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import clientAxios, { configHeaders } from "../../helpers/axios.config";
import Swal from "sweetalert2";

const PanelUsuarios = () => {
  cambiarTituloPagina("PanelUsuarios");

  const [usuarios, setUsuarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Ajustado a 5 para coincidir con el backend
  const [totalUsuarios, setTotalUsuarios] = useState(0);

  const obtenerUsuarios = async () => {
    try {
      const desde = (currentPage - 1) * itemsPerPage;
      console.log("Solicitando usuarios desde:", desde); // Para debugging

      const result = await clientAxios.get("usuarios/listaUsuarios", {
        ...configHeaders,
        params: {
          desde,
          limite: itemsPerPage,
        },
      });

      console.log("Respuesta del servidor:", result.data); // Para debugging

      if (result.data.usuarios && Array.isArray(result.data.usuarios)) {
        setUsuarios(result.data.usuarios);
        setTotalUsuarios(result.data.total);
      }
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      Swal.fire({
        title: "Error",
        text: "No se pudieron cargar los usuarios",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, [currentPage]);

  const eliminarUsuario = async (id) => {
    try {
      if (!id) {
        throw new Error("ID de usuario no válido");
      }

      console.log("Intentando eliminar usuario con ID:", id); // Para debugging

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
        const response = await clientAxios.delete(
          `usuarios/borrado/${id}`,
          configHeaders
        );

        if (response.status === 200) {
          Swal.fire({
            title: "¡Eliminado!",
            text: "El usuario ha sido eliminado.",
            icon: "success",
          });

          // Verificar si necesitamos cambiar de página
          if (usuarios.length === 1 && currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
          } else {
            obtenerUsuarios();
          }
        }
      }
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      Swal.fire({
        title: "Error",
        text: error.response?.data?.mensaje || "No se pudo eliminar el usuario",
        icon: "error",
      });
    }
  };

  const totalPages = Math.ceil(totalUsuarios / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setIsLoading(true);
  };

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

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "200px" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container-usuario-text">
        <h2 className="d-flex justify-content-center align-items-center">
          Panel de administración usuarios
        </h2>
        <p className="text-center">Total de usuarios: {totalUsuarios}</p>
      </div>
      <Container className="container-table">
        {usuarios.length > 0 ? (
          <TableC
            dataItems={usuarios}
            idPagina="usuarios"
            eliminarItem={eliminarUsuario}
          />
        ) : (
          <p className="text-center">No hay usuarios registrados</p>
        )}
      </Container>

      {totalUsuarios > itemsPerPage && (
        <div className="d-flex justify-content-center align-items-center mt-3">
          <Pagination>
            <Pagination.First
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            />
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {paginationItems}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
            <Pagination.Last
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      )}
    </>
  );
};

export default PanelUsuarios;
