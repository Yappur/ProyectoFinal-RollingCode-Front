import { Table, Container } from "react-bootstrap";
import "../css/ComponentsCSS/TableBeneficiosC.css";

const TableBeneficiosC = () => {
  return (
    <Container>
      <div className="table-responsive">
        <Table striped bordered hover className="tabla-custom">
          <thead>
            <tr>
              <th>Beneficio</th>
              <th>Descripción</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Acceso 24/7</td>
              <td>Accede al gimnasio a cualquier hora del día.</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Clases personalizadas</td>
              <td>Sesiones con entrenadores personales.</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Nutrición</td>
              <td>Plan de alimentación personalizado.</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Zona de spa</td>
              <td>Incluye sauna y masajes.</td>
              <td>✅</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TableBeneficiosC;
