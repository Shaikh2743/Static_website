import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
// import './Testimonials.css'; // Assuming you create a CSS file for additional styling

function Testimonials() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">Testimonials</h2>
      <Row className="gy-4">
        <Col md={4}>
          <Card className="h-100 testimonial-card">
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">CEO, TechCorp</Card.Subtitle>
              <Card.Text>
                "Great service and high-quality work! The team at Arc Welding Engineering Works exceeded our expectations and delivered outstanding results. We highly recommend their services."
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">5 stars</Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 testimonial-card">
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Project Manager, BuildRight</Card.Subtitle>
              <Card.Text>
                "Highly recommend Arc Welding Engineering Works. Their attention to detail and commitment to excellence is evident in every project they undertake. A trustworthy partner for any welding needs."
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">5 stars</Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 testimonial-card">
            <Card.Body>
              <Card.Title>Mark Wilson</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Operations Manager, SteelMakers</Card.Subtitle>
              <Card.Text>
                "Professional and reliable. The team at Arc Welding Engineering Works consistently delivers top-notch welding solutions. Their expertise and customer service are unmatched."
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">5 stars</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
