import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ClasesFormC = ({ addClase }) => {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    nombreClase: "",
    descripcion: "",
    img: "",
    categoria: "CrossFit", // Valor por defecto según tu schema
  });

  const handleClose = () => {
    setShow(false);
    // Limpiar el formulario al cerrar
    setFormData({
      nombreClase: "",
      descripcion: "",
      img: "",
      categoria: "CrossFit",
    });
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombreClase.trim() && formData.descripcion.trim()) {
      addClase(formData);
      handleClose();

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

                name="nombreClase"
                placeholder="Ingresa el nombre de la clase"
                value={formData.nombreClase}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescripcionClase" className="mt-3">
              <Form.Label>Descripción de la Clase</Form.Label>
              <Form.Control
                as="textarea"
                name="descripcion"
                rows={3}
                placeholder="Ingresa la descripción de la clase"
                value={formData.descripcion}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCategoriaClase" className="mt-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                name="categoria"
                placeholder="Categoria"
                value={formData.categoria}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formImagenClase" className="mt-3">
              <Form.Label>URL de la Imagen</Form.Label>
              <Form.Control
                type="text"
                name="img"
                placeholder="Ingresa la URL de la imagen"
                value={formData.img}
                onChange={handleChange}
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
