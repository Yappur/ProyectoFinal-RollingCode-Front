import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import clientAxios, { configHeaders } from "../helpers/axios.config";

const TableC = ({ dataItems = [], idPagina, eliminarItem }) => {
  const handleEliminar = (id) => {
    if (!id) {
      console.error("ID no válido:", id);
      return;
    }
    console.log("Eliminando elemento con ID:", id); // Para debugging
    eliminarItem(id);
  };

  return (
    <>
      <Table striped bordered hover responsive>
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
                <tr key={usuario._id}>
                  <td>{usuario._id}</td>
                  <td>{usuario.nombreUsuario}</td>
                  <td>{usuario.emailUsuario}</td>
                  <td>{usuario.role}</td>
                  <td>{usuario.bloqueado ? "Sí" : "No"}</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <Button
                        variant="danger"
                        onClick={() => handleEliminar(usuario._id)} // Cambiado de usuario.id a usuario._id
                      >
                        Eliminar
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            : dataItems.map((clase) => (
                <tr key={clase._id}>
                  <td>{clase._id}</td>
                  <td>{clase.nombre}</td>
                  <td>{clase.descripcion}</td>
                  <td>
                    <img
                      src={clase.img}
                      alt={clase.nombre}
                      style={{ width: "85px", height: "85px" }}
                    />
                  </td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <Button
                        variant="danger"
                        onClick={() => handleEliminar(clase._id)} // Cambiado de clase.id a clase._id
                      >
                        Eliminar
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableC;
