import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModalUI(params) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const typeValue = {
    'Ingreso': 1,
    'Egreso': 2
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Abrir Detalle
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modal-header'>
            <Modal.Title>
                {params.title}
               
            </Modal.Title>
            <div className='modal-title-amount'>${params.amount}</div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
                className="mb-3"
                controlId="form.description"
                >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" rows={3} defaultValue={params.description} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="form.type"
            >
              <Form.Label>Tipo</Form.Label>
              <Form.Select aria-label="Default select example" defaultValue={typeValue[params.type]}>
                <option>Selecciona una opcion</option>
                <option value="1">Ingreso</option>
                <option value="2">Egreso</option>
            </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="form.addPayment"
            >
              <Form.Label>Agregar abono</Form.Label>
              <Form.Control as="input" placeholder='Ingresa una cantidad' />
              <Button>Ok</Button>
            </Form.Group>
            Abonos...
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose} disabled={true}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
