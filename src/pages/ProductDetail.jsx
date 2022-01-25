/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/navigation';
import { Card, ListGroup } from 'react-bootstrap';
import ProductsContext from '../context/ProductsContext';

/* eslint-disable */
export default function ProductDetail() {
  const { cards } = useContext(ProductsContext);
  let { Slug } = useParams();
  const card = cards[Slug - 1];

  return (
    <>
      <Navigation />
      <div className="container">
        <Card style={{ width: '18rem' }} key={card.id}>
          <Card.Img
            variant="top"
            src={card.image}
            class="img-fluid"
            style={{ height: '260px', objectFit: 'contain' }}
          />
          <Card.Body>
            <Card.Title> {card.title}</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item variant="success">
                Price: ${card.price}
              </ListGroup.Item>
              <ListGroup.Item>Description: {card.description}</ListGroup.Item>
              <ListGroup.Item>Category: {card.category}</ListGroup.Item>
              <ListGroup.Item>Rate: {card.rating.rate}</ListGroup.Item>
              <ListGroup.Item>Count: {card.rating.count}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
