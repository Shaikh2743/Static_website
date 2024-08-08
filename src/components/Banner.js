import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

function Banner() {
  return (
    <Jumbotron fluid className="banner">
      <Container>
        <h1>Welcome to Arc Welding Engineering Works</h1>
        <p>Professional Welding Services for All Your Needs</p>
      </Container>
    </Jumbotron>
  );
}

export default Banner;
