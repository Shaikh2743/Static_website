import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaSearch } from 'react-icons/fa';

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleSelect = () => setExpanded(false);

  return (
    <div className="navigation">
      <Navbar bg="light" expand="lg" expanded={expanded} onToggle={handleToggle} className="top-nav py-2">
        <Container fluid className="d-flex align-items-center justify-content-between">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="Fab.png" // replace with the path to your logo
              height="40"
              className="d-inline-block align-top me-2 mylogo"
              alt="Arc Welding logo"
            />
            <span>H M</span>
          </Navbar.Brand>
          <div className="d-flex flex-column text-end me-3 contact-info mysty d-none d-lg-block">
            <a href="tel:+919066720246" className="text-dark">+91 9066 720 246</a>
            <a href="mailto:shaikhasif96320@gmail.com" className="text-dark">Send email</a>
          </div>
          <Nav className="ms-auto d-flex align-items-center">
            <Form className="d-none d-lg-flex mx-auto search-bar">
              <FormControl type="search" placeholder="What's on your mind today?" className="me-2" />
              <Button variant="outline-dark"><FaSearch /></Button>
            </Form>
            <Nav.Link as={Link} to="/login" className="d-flex align-items-center">
              <FaUser className="me-1" /> Account
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="warning" expand="lg" expanded={expanded} onToggle={handleToggle} className="bottom-nav">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 justify-content-center" onSelect={handleSelect}>
              <Nav.Link as={Link} to="/" onClick={handleSelect}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleSelect}>About Us</Nav.Link>
              <Nav.Link as={Link} to="/services" onClick={handleSelect}>Our Services</Nav.Link>
              <Nav.Link as={Link} to="/gallery" onClick={handleSelect}>Gallery</Nav.Link>
              <Nav.Link as={Link} to="/testimonials" onClick={handleSelect}>Testimonials</Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={handleSelect}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-lg-none mt-2 w-100">
            <div className="d-flex">
              <FormControl type="search" placeholder="What's on your mind today?" className="me-2" />
              <Button variant="outline-dark" className="ms-2"><FaSearch /></Button>
            </div>
          </Form>
          <div className="d-lg-none mt-2 w-100 text-center">
            <a href="tel:+919066720246" className="text-dark d-block">+91 9066 720 246</a>
            <a href="mailto:shaikhasif96320@gmail.com" className="text-dark d-block">Send email</a>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
