import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useLocation } from 'wouter';

export default function NewPaymentModal() {
  const [show, setShow] = useState(true);
  const [, setLocation] = useLocation();

  const [title, setTitle] = useState(undefined)
  const [description, setDescription] = useState(undefined)
  const [type, setType] = useState(undefined)
  const [amount, setAmount] = useState(undefined)
  const [contact, setContact] = useState(undefined)
  const [arrayInLS, setArrayInLS] = useState(localStorage.getItem('payments'))


  const handleClose = () => {
    console.log({ title, description, type, amount, contact });
    validation ? handleSubmit() : setLocation('/')
    setLocation('/')
    setShow(false)
  };


  const handleSubmit = () => {
    const newPayment = {
      key: arrayInLS ? JSON.parse(arrayInLS).length + 1 : 0 + 1,
      title: title,
      type: type,
      amount: amount, 
      contact: contact, 
      description: description,
      payments: []
  }

  const newArray = [newPayment]
  const updateArray = arrayInLS && [...JSON.parse(arrayInLS), newPayment]

    arrayInLS 
      ? localStorage.setItem('payments', JSON.stringify(updateArray))
      : localStorage.setItem('payments', JSON.stringify(newArray)) 
      
    //localStorage.setItem('payments', [...arrayPayments, JSON.stringify(newPayment)])
  }

  const validation = title && description && type && amount

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modal-header'>
            <Modal.Title>
                {'Agregar nuevo abono'}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <small>Todos los campos son obligatorios...</small>
          <Form>
              <Form.Group
                className="mb-3"
                controlId="form.title"
                onChange={(event) =>
                  setTitle(event.target.value)
                }
                >
              <Form.Label>Titulo</Form.Label>
              <Form.Control as="input" rows={3} />
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="form.description"
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="form.type"
              onChange={(event) => 
                setType(event.target.value == 1 ? 'Ingreso' : 'Egreso')
              }
            >
              <Form.Label>Tipo</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecciona una opcion</option>
                <option value="1">Ingreso</option>
                <option value="2">Egreso</option>
            </Form.Select>
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="form.amount"
                onChange={(event) =>
                  setAmount(event.target.value)
                }
                >
              <Form.Label>Cantidad</Form.Label>
              <Form.Control as="input" rows={3} />
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="form.contact"
                onChange={(event) =>
                  setContact(event.target.value)
                }
                >
              <Form.Label>Contacto</Form.Label>
              <Form.Control as="input" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose} disabled={!validation}>
            Añadir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
