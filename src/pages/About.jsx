/* eslint-disable */
import React from 'react';
import image from '../Images/photo.jpg'
import Navigation from '../components/navigation';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function About() {
  return (
    <>
    <Navigation />

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
    <Card.Title>Juan Vargas</Card.Title>
    <Card.Text>
      Description: Assesment-I
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
      <ul> 3 Cosas aprendidas
        <li>
          React Router
        </li>
        <li>
          Wireframes
        </li>
        <li>
          Figma
        </li>
      </ul>
    </ListGroupItem>
    <ListGroupItem>Correo: juandavc12@hotmail.com</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://github.com/juandavc12">Github: juandavc12</Card.Link>
  </Card.Body>
</Card>
    </>
    
  )
}
