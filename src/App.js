import React from "react";
import "./App.css";
// import Photos from "./Components/NavBar/Photos";
// import Music from "./Components/NavBar/Music";
// import Merch from "./Components/NavBar/Merch";
// import Videos from "./Components/NavBar/Videos";
import NavBar from "./Components/NavBar/Navbar";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
// import Header from './Components/Header'

function App() {
  return (
    <div className="App">
        <NavBar />
      <Header />
      
    </div>
  );
}

export default App;
