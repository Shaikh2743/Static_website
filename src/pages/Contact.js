import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
// import './Contact.css'; // Assuming you create a CSS file for additional styling

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (form) => {
    const newErrors = {};
    if (!form.name.value.trim()) newErrors.name = "Name is required";
    if (!form.email.value.trim()) newErrors.email = "Email is required";
    if (!form.number.value.trim()) newErrors.number = "Mobile number is required";
    if (!form.service.value.trim()) newErrors.service = "Service is required";
    if (!form.message.value.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = validateForm(form);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    fetch('https://formspree.io/f/mnnavnzk', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => {
          setSubmitted(false);
          window.location.href = '/'; // Redirect to homepage
        }, 3000); // 3 seconds delay
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            alert(data["errors"].map(error => error["message"]).join(", "));
          } else {
            alert("Oops! There was a problem submitting your form");
          }
        });
      }
    }).catch(error => {
      alert("Oops! There was a problem submitting your form");
    });
  };

  return (
    <Container className="contact-form-container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      {submitted && (
        <Alert variant="success" className="text-center">
          Your message has been sent successfully! Redirecting to the homepage...
        </Alert>
      )}
      <Form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" isInvalid={!!errors.name} />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" isInvalid={!!errors.email} />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formNumber" className="mb-3">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control type="number" name="number" placeholder="Enter your mobile number" isInvalid={!!errors.number} />
              <Form.Control.Feedback type="invalid">{errors.number}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" placeholder="Enter your address" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formService" className="mb-3">
          <Form.Label>Service Needed</Form.Label>
          <Form.Control as="select" name="service" isInvalid={!!errors.service}>
            <option value="">Select a service</option>
            <option value="Industrial Welding">Industrial Welding</option>
            <option value="Residential Welding">Residential Welding</option>
            <option value="Custom Welding">Custom Welding</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">{errors.service}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={4} placeholder="Enter your message" isInvalid={!!errors.message} />
          <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit" className="btn-submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Contact;
