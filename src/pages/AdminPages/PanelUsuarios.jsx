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
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage] = useState(8); // Número de usuarios por página

  const obtenerUsuarios = async () => {
    const result = await clientAxios.get(
      "/usuarios/listaUsuarios",
      configHeaders
    );
    setUsuarios(result.data.usuarios);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      obtenerUsuarios();
    }
  }, [usuarios]);

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = usuarios.slice(indexOfFirstUser, indexOfLastUser);

  // Cambiar la página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(usuarios.length / itemsPerPage);
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

  const eliminarUsuario = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedUsuarios = usuarios.filter((usuario) => usuario.id !== id);
        setUsuarios(updatedUsuarios);
        localStorage.setItem("usuarios", JSON.stringify(updatedUsuarios));
        Swal.fire({
          title: "¡Eliminado!",
          text: "El usuario ha sido eliminado.",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <div className="container-usuario-text">
        <h2 className="d-flex justify-content-center align-items-center">
          Panel de administacion usuarios
        </h2>
      </div>
      <Container className="container-table">
        <TableC
          dataItems={currentUsers}
          idPagina={"usuarios"}
          setIsLoading={setIsLoading}
          set={setUsuarios}
          eliminarItem={eliminarUsuario}
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
    </>
  );
};

export default PanelUsuarios;
