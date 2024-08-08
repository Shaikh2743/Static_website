import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <Card className="p-4 shadow-sm">
        <Card.Body>
          <p className="lead">
            Arc Welding Engineering Works is a leading provider of welding services, specializing in arc welding. Our experienced team delivers high-quality welding solutions for various industries. Since our inception in 2015, we have been committed to excellence and innovation in the welding and fabrication industry.
          </p>
          <p className="mt-4">
            With nearly a decade of experience, we have worked on a wide range of projects, including:
          </p>
          <ul className="list-unstyled mt-3">
            <li>
              <h5 className="text-primary">Buildings and Apartments</h5>
              <p>We have provided welding and fabrication services for residential and commercial buildings, ensuring structural integrity and safety.</p>
            </li>
            <li>
              <h5 className="text-primary">Shops and Canopies</h5>
              <p>Our team has constructed durable and aesthetically pleasing shop canopies, offering both protection and visual appeal.</p>
            </li>
            <li>
              <h5 className="text-primary">Shop Shutters and Grills</h5>
              <p>We have designed and installed secure shop shutters and decorative grills, combining functionality with style.</p>
            </li>
            <li>
              <h5 className="text-primary">Custom Fabrications</h5>
              <p>We specialize in custom fabrication works, catering to the unique needs of our clients. Our projects range from industrial machinery components to bespoke metal structures.</p>
            </li>
          </ul>
          <p className="mt-4">
            At Arc Welding Engineering Works, we pride ourselves on using the latest technologies and techniques in welding and fabrication. Our state-of-the-art equipment and skilled workforce enable us to deliver precise and efficient solutions, regardless of the project's complexity or scale.
          </p>
          <p className="mt-4">
            We believe in building strong relationships with our clients through transparency, reliability, and exceptional service. Our goal is to exceed your expectations by providing top-notch welding and fabrication services that meet your specific requirements.
          </p>
          <p className="mt-4">
            Whether you need welding for construction, manufacturing, or custom projects, Arc Welding Engineering Works is your trusted partner. Contact us today to discuss your welding and fabrication needs and discover how we can bring your vision to life.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
