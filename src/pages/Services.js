import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Services() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">Our Services</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card className="service-card h-100 shadow-sm">
            <Card.Img variant="top" src="image1.jpg" alt="Industrial Welding" /> {/* Add appropriate images */}
            <Card.Body>
              <Card.Title className="text-primary">Industrial Welding</Card.Title>
              <Card.Text>
                <p>High-quality welding services for industrial applications.</p>
                <p>
                  At Arc Welding Engineering Works, we specialize in providing top-notch industrial welding services. Our team of certified welders has extensive experience in handling a wide range of industrial welding projects, ensuring that all work meets the highest standards of quality and safety.
                </p>
                <p>Our industrial welding services include:</p>
                <ul>
                  <li>Structural welding for construction and infrastructure projects.</li>
                  <li>Pipe welding for oil, gas, and water pipelines.</li>
                  <li>Heavy equipment repair and fabrication.</li>
                  <li>Welding for manufacturing and assembly lines.</li>
                  <li>Custom welding solutions for specialized industrial needs.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="service-card h-100 shadow-sm">
            <Card.Img variant="top" src="image2.jpg" alt="Residential Welding" /> {/* Add appropriate images */}
            <Card.Body>
              <Card.Title className="text-primary">Residential Welding</Card.Title>
              <Card.Text>
                <p>
                  Our residential welding services cater to homeowners and small businesses, offering reliable and aesthetically pleasing welding solutions.
                </p>
                <p>We specialize in:</p>
                <ul>
                  <li>Gate and fence welding.</li>
                  <li>Metal staircase fabrication and repair.</li>
                  <li>Balcony and railing welding.</li>
                  <li>Custom metalwork for home improvement projects.</li>
                </ul>
                <p>
                  Our team works closely with clients to ensure that the final product meets their specifications and enhances the overall look and functionality of their property.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="service-card h-100 shadow-sm">
            <Card.Img variant="top" src="image3.jpg" alt="Custom Welding" /> {/* Add appropriate images */}
            <Card.Body>
              <Card.Title className="text-primary">Custom Welding</Card.Title>
              <Card.Text>
                <p>
                  We understand that every project is unique, and our custom welding solutions are designed to meet the specific needs of our clients. Whether you require bespoke metalwork or specialized welding techniques, our skilled welders are up to the task.
                </p>
                <p>Our custom welding services include:</p>
                <ul>
                  <li>Prototype development and fabrication.</li>
                  <li>Specialized metal joining techniques.</li>
                  <li>On-site welding services for large projects.</li>
                  <li>Consultation and design assistance for custom projects.</li>
                </ul>
                <p>
                  We take pride in our ability to tackle complex welding challenges and deliver results that exceed expectations.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="additional-info text-center my-5">
            <p>
              We use state-of-the-art welding equipment and adhere to industry best practices to ensure precision and durability in every project. Whether you need welding for new constructions, repairs, or custom projects, our team is equipped to deliver exceptional results on time and within budget.
            </p>
            <p>
              Our team works closely with clients to ensure that the final product meets their specifications and enhances the overall look and functionality of their property.
            </p>
            <p>
              We take pride in our ability to tackle complex welding challenges and deliver results that exceed expectations.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
