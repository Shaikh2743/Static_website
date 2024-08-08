import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ContentSection({ image, text, reverse }) {
  return (
    <Container className="my-5">
      <Row className={`align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
        <Col md={6}>
          <img src={image} alt="Content" className="img-fluid" />
        </Col>
        <Col md={6}>
          <p>{text}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContentSection;
