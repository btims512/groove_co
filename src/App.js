import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/Navbar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import { Navbar, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
