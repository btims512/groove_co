import React, { useState, useRef } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.png";
import ImageSlider from "../ImageSlider/ImageSlider";
import HeaderStyles from "./Header.style";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import ReactParticles from "react-particles-js";
import particlesConfig from "./particles-config.js";
import Particles from "react-particles-js";
import "./styles.scss";

export default function Header() {
  return (
    <Router>
      <div className="App">
        <nav className="logo">
          <Link
            to="/"
            style={{ fontSize: "2em", color: "#344", float: "left" }}
          >
            <img src={logo} height="125rm" />
          </Link>
        </nav>
        <HeaderStyles />
        <nav>
          <Link to="/Music" style={{ fontSize: "2em", color: "#344" }}>
            Music
          </Link>
          <Link to="/Photos" style={{ fontSize: "2em", color: "#344" }}>
            | Photos
          </Link>
          <Link to="/Videos" style={{ fontSize: "2em", color: "#344" }}>
            | Videos
          </Link>
          <Link to="/Merch" style={{ fontSize: "2em", color: "#344" }}>
            | Merch
          </Link>
          <Switch>
            <Route path="/Music">
              <Music />
            </Route>
            <Route path="/Photos">
              <Photos />
            </Route>
            <Route path="/Videos">
              <Videos />
            </Route>
            <Route path="/Merch">
              <Merch />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </nav>
      </div>
    </Router>
  );
}

// Home Page //
function Home() {
  return (
    <div>
      <div style={{ borderBottom: "8px solid black", padding: "13px" }} />
      <ImageSlider />
      <div style={{ borderBottom: "8px solid black" }} />
      <div className="d-flex justify-content-around"></div>
      <div className="d-flex justify-content-around"></div>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={logo} />
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

// Music Page //
function Music() {
  return <h2>Music</h2>;
}
// Photos Page //
function Photos() {
  return <h2>Photos</h2>;
}

// Videos Page//
function Videos() {
  return <h2>Videos</h2>;
}

// Merch Page //
function Merch() {
  return <h2>Merch</h2>;
}

// export default Header;
