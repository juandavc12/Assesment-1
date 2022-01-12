/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Navigation from '../components/navigation';
import { Card, Row, Col } from 'react-bootstrap';
import DetailButton from '../components/detailButton';

const URL = "https://fakestoreapi.com/products";


export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <>
    <Navigation />
      <h1 >Products</h1>
      <Row xs={1} md={3} className="g-4">
        {cards.map(function (card) {
          return (
            <Col>
            <Card style={{ width: '18rem' }} key={card.id}>
              <Card.Img variant="top" src={card.image} class="img-fluid"/>
              <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <DetailButton {...card}/>
              </Card.Body>
            </Card>
            </Col>
          );
        })}
      </Row>

    </>
  );
}
