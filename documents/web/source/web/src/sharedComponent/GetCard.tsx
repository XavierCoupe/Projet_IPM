import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ExtractCardFromPerenual from './ExtractCardFromPerenual';

interface CardProps {
  name: string;
  description: string;
  image: string;
  id: string
}

const GetCard: React.FC<CardProps> = ({ name, description, image, id }: CardProps) => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <div style={{padding:'1rem'}}>
        <Card style={{ width: '18rem', height: '25rem' }}> 
          <Card.Img variant="top" src={image} style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
              <h6>
                <Badge bg="secondary">New</Badge>
              </h6>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>Voir plus</Button>
          </Card.Body>
        </Card>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ExtractCardFromPerenual id={id}/>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
}

export default GetCard