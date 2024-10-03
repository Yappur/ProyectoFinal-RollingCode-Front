import Table from "react-bootstrap/Table";

const TableC = ({ dataItems = [], idPagina }) => {
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
              <th>Descripción</th>
              <th>Imagen</th>
            </tr>
          )}
        </thead>
        <tbody>
          {idPagina === "usuarios"
            ? dataItems.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.gmail}</td>
                  <td>{usuario.role}</td>
                  <td>{usuario.bloqueado ? "Sí" : "No"}</td>
                </tr>
              ))
            : dataItems.map((clase) => (
                <tr key={clase.id}>
                  <td>{clase.id}</td>
                  <td>{clase.nombre}</td> {/* Cambié titulo a nombre */}
                  <td>{clase.descripcion}</td>
                  <td>
                    <img
                      src={clase.imagen}
                      alt={clase.nombre}
                      style={{ width: "50px", height: "50px" }} // Tamaño fijo para la imagen
                    />
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableC;
