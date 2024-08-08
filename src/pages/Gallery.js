import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Gallery() {
  return (
    <Container>
      <h2>Gallery</h2>
      <Row>
        <Col md={4}>
          <Image src="image1.jpg" thumbnail />
        </Col>
        <Col md={4}>
          <Image src="image2.jpg" thumbnail />
        </Col>
        <Col md={4}>
          <Image src="image3.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
