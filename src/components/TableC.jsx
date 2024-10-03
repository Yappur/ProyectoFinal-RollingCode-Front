import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button"; // Asegúrate de importar el botón

const TableC = ({ dataItems = [], idPagina, eliminarItem }) => {
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
              <th>Acciones</th>
            </tr>
          ) : (
            <tr>
              <th>ID</th>
              <th>Clase</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Acciones</th>
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
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => eliminarItem(usuario.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))
            : dataItems.map((clase) => (
                <tr key={clase.id}>
                  <td>{clase.id}</td>
                  <td>{clase.nombre}</td>
                  <td>{clase.descripcion}</td>
                  <td>
                    <img
                      src={clase.imagen}
                      alt={clase.nombre}
                      style={{ width: "85px", height: "85px" }}
                    />
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => eliminarItem(clase.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableC;
