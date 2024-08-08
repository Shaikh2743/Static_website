import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="banner" style={{ backgroundImage: 'url(/banner.jpg)', padding: '150px 0', color: 'white', textAlign: 'center' }}>
        <Container>
          <h1>Welcome to Arc Welding Engineering Works</h1>
          <p>Professional Welding Services for All Your Needs</p>
          <Button variant="primary" href="/services">Our Services</Button>
        </Container>
      </div>
      <Container className="my-5">
        <Row>
          <Col md={6}><img src="/image1.jpg" alt="Welding" className="img-fluid" /></Col>
          <Col md={6}>
            <h2>Industrial Welding</h2>
            <p>High-quality welding services for industrial applications.</p>
            <p>At Arc Welding Engineering Works, we specialize in providing top-notch industrial welding services. Our team of certified welders has extensive experience in handling a wide range of industrial welding projects, ensuring that all work meets the highest standards of quality and safety.</p>
            <p>Our industrial welding services include:</p>
            <ul>
              <li>Structural welding for construction and infrastructure projects.</li>
              <li>Pipe welding for oil, gas, and water pipelines.</li>
              <li>Heavy equipment repair and fabrication.</li>
              <li>Welding for manufacturing and assembly lines.</li>
              <li>Custom welding solutions for specialized industrial needs.</li>
            </ul>
            <p>We use state-of-the-art welding equipment and adhere to industry best practices to ensure precision and durability in every project. Whether you need welding for new constructions, repairs, or custom projects, our team is equipped to deliver exceptional results on time and within budget.</p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="order-md-2"><img src="/image2.jpg" alt="Welding" className="img-fluid" /></Col>
          <Col md={6} className="order-md-1">
            <h2>Residential Welding</h2>
            <p>Our residential welding services cater to homeowners and small businesses, offering reliable and aesthetically pleasing welding solutions.</p>
            <p>We specialize in:</p>
            <ul>
              <li>Gate and fence welding.</li>
              <li>Metal staircase fabrication and repair.</li>
              <li>Balcony and railing welding.</li>
              <li>Custom metalwork for home improvement projects.</li>
            </ul>
            <p>Our team works closely with clients to ensure that the final product meets their specifications and enhances the overall look and functionality of their property.</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}><img src="/image3.jpg" alt="Welding" className="img-fluid" /></Col>
          <Col md={6}>
            <h2>Custom Welding Solutions</h2>
            <p>We understand that every project is unique, and our custom welding solutions are designed to meet the specific needs of our clients. Whether you require bespoke metalwork or specialized welding techniques, our skilled welders are up to the task.</p>
            <p>Our custom welding services include:</p>
            <ul>
              <li>Prototype development and fabrication.</li>
              <li>Specialized metal joining techniques.</li>
              <li>On-site welding services for large projects.</li>
              <li>Consultation and design assistance for custom projects.</li>
            </ul>
            <p>We take pride in our ability to tackle complex welding challenges and deliver results that exceed expectations.</p>
          </Col>
        </Row>
      </Container>
      <div className="slider-container" style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
        <Container>
          <Slider {...sliderSettings}>
            <div><img src="/slide1.jpg" alt="Slide 1" className="img-fluid" /></div>
            <div><img src="/slide2.jpg" alt="Slide 2" className="img-fluid" /></div>
            <div><img src="/slide3.jpg" alt="Slide 3" className="img-fluid" /></div>
            <div><img src="/slide4.jpg" alt="Slide 4" className="img-fluid" /></div>
          </Slider>
        </Container>
      </div>
    </>
  );
}

export default Home;
