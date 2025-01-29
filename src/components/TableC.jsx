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
            ? dataItems.map(
                (usuario) =>
                  usuario && (
                    <tr key={usuario._id}>
                      <td>{usuario._id || "Sin ID"}</td>
                      <td>{usuario.nombreUsuario || "Sin nombre"}</td>
                      <td>{usuario.emailUsuario || "Sin email"}</td>
                      <td>{usuario.role || "Sin rol"}</td>
                      <td>{usuario.bloqueado ? "Sí" : "No"}</td>
                      <td>
                        <div className="d-flex gap-2 justify-content-center">
                          <Button
                            variant="danger"
                            onClick={() => handleEliminar(usuario._id)}
                          >
                            Eliminar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
              )
            : dataItems.map(
                (clase) =>
                  clase && (
                    <tr key={clase._id}>
                      <td>{clase._id || "Sin ID"}</td>
                      <td>{clase.nombreClase || "Sin nombre"}</td>
                      <td>{clase.descripcion || "Sin descripción"}</td>
                      <td>
                        <img
                          src={clase.img || "placeholder.png"}
                          alt={clase.nombre || "Clase sin nombre"}
                          style={{ width: "85px", height: "85px" }}
                        />
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-center">
                          <Button
                            variant="danger"
                            onClick={() => handleEliminar(clase._id)}
                          >
                            Eliminar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
              )}
        </tbody>
      </Table>
    </>
  );
};

export default TableC;
