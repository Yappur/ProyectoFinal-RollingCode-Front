import Table from "react-bootstrap/Table";
const TableC = ({ dataUsers, idPagina }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          {idPagina === "usuarios" ? (
            <tr>
              <th>ID</th>
              <th>Usuarios</th>
              <th>Gmail</th>
              <th>Rol</th>
              <th>Bloqueado</th>
            </tr>
          ) : (
            <tr>
              <th>ID</th>
              <th>Clase</th>
              <th>Descripcion</th>
              <th>Imagen</th>
            </tr>
          )}
        </thead>
        <tbody>
          {idPagina === "usuarios"
            ? dataUsers.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.gmail}</td>
                  <td>{usuario.role}</td>
                  <td>{usuario.bloqueado ? "Sí" : "No"}</td>
                </tr>
              ))
            : dataUsers.map((clase) => (
                <tr key={clase.id}>
                  <td>{clase.id}</td>
                  <td>{clase.titulo}</td>
                  <td>{clase.descripcion}</td>
                  <td>{clase.imagen}</td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableC;
