import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 2,
    title: 'Black and White Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const ProductScreen = () => {
  return (
    <Container>
      <Row>
        {productsArr.map((product) => (
          <Col xs={5} md={3} key={product.id}>
            <div className="card">
              <Image src={product.imageUrl} alt={product.title} rounded className="card-img-top img-fluid" />
              <div className="card-body d-flex flex-column">
                <div className="card-title">{product.title}</div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text mb-0">Price: ${product.price}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductScreen;
