/* eslint-disable */
import React, { useContext } from 'react';
import Navigation from '../components/navigation';
import { Card, Row, Col } from 'react-bootstrap';
import DetailButton from '../components/detailButton';
import ProductsContext from '../context/ProductsContext';

export default function Home() {
  const { cards } = useContext(ProductsContext);

  return (
    <>
      <Navigation />
      <h1>Products</h1>
      <div className="container">
        <Row xs={1} md={3} className="g-4">
          {cards.map(function (card) {
            return (
              <Col>
                <Card style={{ width: '18rem' }} key={card.id}>
                  <Card.Img
                    variant="top"
                    src={card.image}
                    class="img-fluid"
                    style={{ height: '260px', objectFit: 'contain' }}
                  />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <DetailButton {...card} />
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
