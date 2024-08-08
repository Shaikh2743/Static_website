import React from 'react';
import { Carousel } from 'react-bootstrap';

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/slider1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/slider2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/slider3.jpg" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/slider4.jpg" alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/slider5.jpg" alt="Fifth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
