import { cambiarTituloPagina } from "../../helpers/cambiarTitulos";
import Container from "react-bootstrap/Container";
import TableC from "../../components/TableC"; // Asegúrate de que este componente pueda manejar clases
import "../../css/PagesCSS/PanelClases.css";
import Pagination from "react-bootstrap/Pagination";
import ClasesFormC from "../../components/ClasesFormC"; // Componente para añadir clases
import { useState, useEffect } from "react";

const PanelClases = () => {
  cambiarTituloPagina("PanelClases");

  const [clases, setClases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage] = useState(8); // Número de clases por página

  const obtenerClases = () => {
    const clasesLs = JSON.parse(localStorage.getItem("clases")) || [];
    setClases(clasesLs);
  };

  useEffect(() => {
    obtenerClases();
  }, []);

  const indexOfLastClase = currentPage * itemsPerPage;
  const indexOfFirstClase = indexOfLastClase - itemsPerPage;
  const currentClases = clases.slice(indexOfFirstClase, indexOfLastClase);

  // Cambiar la página
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

  const addClase = (nuevaClase) => {
    const updatedClases = [...clases, nuevaClase];
    setClases(updatedClases);
    localStorage.setItem("clases", JSON.stringify(updatedClases));
  };

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
          <TableC dataItems={currentClases || []} idPagina={"clases"} />
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
