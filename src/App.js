import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/Navbar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// import Merch from "./Components/NavBar/Merch";

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
