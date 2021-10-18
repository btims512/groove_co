import React from "react";
import { Navbar, Container } from "react-bootstrap";
import FooterStyles from "./Footer.style";


export default function Footer() {
  return (
      <Navbar bg= "dark">
    <FooterStyles>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
        </Container>
    </FooterStyles>
      </Navbar> 
  );
}
