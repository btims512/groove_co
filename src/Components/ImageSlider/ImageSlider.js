import React from "react";
import { Carousel, Button } from "react-bootstrap";
import heropic1 from "../ImageSlider/heropic1.jpg";
import heropic2 from "../ImageSlider/heropic2.jpg";
import heropic3 from "../ImageSlider/heropic3.jpg";

const ImageSlider = () => {
  return (
    <div className="Hero">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={heropic1} alt="First slide" />
          <Carousel.Caption>
            <Button
              variant="outline-secondary"
              style={{ padding: "10px", margin: "20px", fontWeight: "bold" }}
            >
              Tour Dates
            </Button>{" "}
            <Button
              variant="outline-secondary"
              style={{ padding: "10px", fontWeight: "bold" }}
            >
              Gallery
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={heropic2} alt="Second slide" />

          <Carousel.Caption>
            <Button
              variant="primary"
              style={{ padding: "10px", margin: "20px", fontWeight: "bold" }}
            >
              Tour Dates
            </Button>{" "}
            <Button
              variant="primary"
              style={{ padding: "10px", fontWeight: "bold" }}
            >
              Gallery
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={heropic3} alt="Third slide" />

          <Carousel.Caption>
            <Button
              variant="outline-secondary"
              style={{ padding: "10px", margin: "20px", fontWeight: "bold" }}
            >
              Tour Dates
            </Button>{" "}
            <Button
              variant="outline-secondary"
              style={{ padding: "10px", fontWeight: "bold" }}
            >
              Gallery
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
