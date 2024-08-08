import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

function TopBar() {
  return (
    <div className="top-bar bg-dark text-white py-2">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <img src="/logo.png" alt="Logo" className="logo" />
          </Col>
          <Col md={4}>
            <Form inline>
              <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Col>
          <Col md={4} className="text-right">
            <Button variant="outline-light">
              <FaUser /> Login
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopBar;
