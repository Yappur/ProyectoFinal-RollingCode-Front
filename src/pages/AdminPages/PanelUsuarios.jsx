import { cambiarTituloPagina } from "../../helpers/cambiarTitulos";
import Container from "react-bootstrap/Container";
import TableC from "../../components/TableC";
import "../../css/PagesCSS/PanelUsuarios.css";
import { useState, useEffect } from "react";

const PanelUsuarios = () => {
  cambiarTituloPagina("PanelUsuarios");

  const [usuarios, setUsuarios] = useState([]);

  const obtenerUsuarios = () => {
    const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(usuariosLs);
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);
  return (
    <>
      <div className="container-admin-table">
        <h2>Panel de administrador</h2>
        <Container className="container-table">
          <TableC dataUsers={usuarios} idPagina={"usuarios"} />
        </Container>
      </div>
    </>
  );
};

export default PanelUsuarios;
