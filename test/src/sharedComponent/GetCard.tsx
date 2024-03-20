import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ExtractCardFromPerenual from './ExtractCardFromPerenual';

import '../style/global.css'

interface CardProps {
  name: string;
  image: string;
  id: string
}

const GetCard: React.FC<CardProps> = ({ name, image, id }: CardProps) => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className='CardEncapsulation'>
        <Card className='HerbadexCard'>
        {image == '/src/assets/comingSoon.png' ? 
            (<Card.Img variant="top" src={image} className='HerbadexCardImageSoon'/>):
            (<Card.Img variant="top" src={image} className='HerbadexCardImage'/>)}
          <Card.Body>
            <Card.Title>{name}</Card.Title>
              <h6>
                <Badge bg="secondary">New</Badge>
              </h6>
            <Button variant="primary" onClick={handleShow}>Voir plus</Button>
          </Card.Body>
        </Card>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='offcanvasTitle'><h3>Informations</h3></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ExtractCardFromPerenual id={id}/>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
}

export default GetCard