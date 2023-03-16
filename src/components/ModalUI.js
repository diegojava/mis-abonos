import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
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

  const sumAmounts = (payments) => {
    let sum = 0
    payments.map(payment => {
      sum = sum + payment.amount
    })
    return sum
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Descripcion</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
              {
                params.payments.map((payment, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{payment.description}</td>
                      <td>{payment.amount}</td>
                    </tr>
                  )
                })
              }
              <tr>
                <td colSpan={2}>Total</td>
                <td colSpan={1}>{sumAmounts(params.payments)}</td>
              </tr>
              <tr>
                <td colSpan={2}>Resta/Falta</td>
                <td colSpan={1}>{params.amount - sumAmounts(params.payments)}</td>
              </tr>
              </tbody>
            </Table>
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
