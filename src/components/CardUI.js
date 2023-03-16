import Card from 'react-bootstrap/Card';
import ModalUI from './ModalUI';

export default function CardUI (params) {
  return (
    <Card style={{ width: '18rem', backgroundColor: 'transparent' }}>
      <Card.Body>
        <Card.Title>{params.title || 'Sin titulo'}</Card.Title>
        <Card.Text>
          {params.type} - {params.amount} <br />
          {params.description} <br />
          
        </Card.Text>
        <Card.Footer>
          Contacto: {params.contact}
        </Card.Footer>
        <ModalUI title={params.title} description={params.description} amount={params.amount} type={params.type} payments={params.payments} />
      </Card.Body>
    </Card>
  );
}