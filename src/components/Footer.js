import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 Arc Welding Engineering Works</p>
            <div>
              <FaFacebook className="mx-2" />
              <FaTwitter className="mx-2" />
              <FaInstagram className="mx-2" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
