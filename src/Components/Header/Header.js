import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import { HeroStyles } from "./Hero.style";
import { Button, Carousel } from "react-bootstrap";

export const Header = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        sticky="top"
        bg="light"
        variant="light"
        style={{ height: "170px" }}
      >
        <ReactBootStrap.Navbar.Brand href="/">
          Groove Co.
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="ml-auto">
            <Link to="/features">
              <ReactBootStrap.Nav.Link href="#features">
                Music
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Photos">
              <ReactBootStrap.Nav.Link href="#Photos">
                Photos
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Videos">
              <ReactBootStrap.Nav.Link href="#Videos">
                Videos
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Merch">
              <ReactBootStrap.Nav.Link href="#Merch">
                Merch
              </ReactBootStrap.Nav.Link>
            </Link>
            {/* <ReactBootStrap.NavDropdown
              title="YEET"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Something
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav> */}

            {/* <Link to="/deets">
              <ReactBootStrap.Nav.Link href="#deets">
                More deets
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/dankmemes">
              <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Dank memes
              </ReactBootStrap.Nav.Link>
            </Link> */}
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

// export const Hero = () => {
//   return (
//     <div className="Hero">
//     <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=First slide&bg=373940"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Second slide&bg=282c34"
//       alt="Second slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Third slide&bg=20232a"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
//         {/* <Button variant="outline-secondary">Gallery</Button>{" "}
//         <Button variant="outline-secondary">Tour Dates</Button>{" "} */}

//     </div>
//   );
// };

export default Header;
