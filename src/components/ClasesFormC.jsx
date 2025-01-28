import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ClasesFormC = ({ addClase }) => {
  const [show, setShow] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() && descripcion.trim() && imagen.trim()) {
      addClase({ id: Date.now(), nombre, descripcion, imagen });
      setNombre("");
      setDescripcion("");
      setImagen("");
      handleClose(); // Cierra el modal después de añadir la clase
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Añadir Clase
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Nueva Clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNombreClase">
              <Form.Label>Nombre de la Clase</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre de la clase"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescripcionClase" className="mt-3">
              <Form.Label>Descripción de la Clase</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingresa la descripción de la clase"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formImagenClase" className="mt-3">
              <Form.Label>URL de la Imagen</Form.Label>

              <Form.Control
                type="text"
                placeholder="Ingresa la URL de la imagen"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Guardar Clase
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ClasesFormC;
