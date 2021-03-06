import { Carousel } from "react-bootstrap";
// import HeroStyles from "./Components/Hero/Hero.style";
import "bootstrap/dist/css/bootstrap.min.css";

export const Hero = () => {
  return (
    <div className="Hero">
      <HeroStyles>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height="300px"
              width="350px"
              src={heropic1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

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
      </HeroStyles>
    </div>
  );
};

export default Hero;
