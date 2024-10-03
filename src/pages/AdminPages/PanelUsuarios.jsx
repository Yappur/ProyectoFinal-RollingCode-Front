import { cambiarTituloPagina } from "../../helpers/cambiarTitulos";
import Container from "react-bootstrap/Container";
import TableC from "../../components/TableC";
import "../../css/PagesCSS/PanelUsuarios.css";
import { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const PanelUsuarios = () => {
  cambiarTituloPagina("PanelUsuarios");

  const [usuarios, setUsuarios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage] = useState(8); // Número de usuarios por página

  const obtenerUsuarios = () => {
    const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(usuariosLs);
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

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
  return (
    <>
      <div className="container-usuario-text">
        <h2 className="d-flex justify-content-center align-items-center">
          Panel de administacion usuarios
        </h2>
      </div>
      <Container className="container-table">
        <TableC dataItems={currentUsers} idPagina={"usuarios"} />
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
