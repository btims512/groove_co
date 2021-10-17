import React from "react";
import { Carousel } from "react-bootstrap";
import heropic1 from "../ImageSlider/heropic1.jpg";
import heropic2 from "../ImageSlider/heropic2.jpg";
import heropic3 from "../ImageSlider/heropic3.jpg";

const ImageSlider = () => {
  return (
    <div className="Hero">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // height="700vh"
            // width="350vw"
            src={heropic1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={heropic2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={heropic3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <Button variant="outline-secondary">Gallery</Button>{" "}
        <Button variant="outline-secondary">Tour Dates</Button>{" "} */}
    </div>
  );
};

export default ImageSlider;
