import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.png";
import ImageSlider from "../ImageSlider/ImageSlider";
import HeaderStyles from "./Header.style";
import "./styles.scss";
import HomePage from "../HomePage/HomePage";
import Footer from "../Footer/Footer";

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

        <HeaderStyles />

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
      <div
        style={{ borderBottom: "7px solid rgb(187,190,192)", padding: "13px" }}
      />
      <ImageSlider />
      {/* <div style={{ borderBottom: "7px solid rgb(187,190,192)" }} /> */}
      <div className="d-flex justify-content-around"></div>
      <div className="d-flex justify-content-around"></div>
      <HomePage />
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
