import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="dark"
        variant="dark"
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

export default NavBar;
