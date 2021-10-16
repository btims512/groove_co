import React from "react";
import "./App.css";
import Photos from "./Components/NavBar/Photos";
import Music from "./Components/NavBar/Music";
import Merch from "./Components/NavBar/Merch";
import Videos from "./Components/NavBar/Videos";
import NavBar from "./Components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/features" component={Music}>
            <Music />
          </Route>
          <Route path="/Merch" component={Merch}>
            <Merch />
          </Route>
          <Route path="/Videos" component={Videos}>
            <Videos />
          </Route>
          <Route path="/Photos" component={Photos}>
            <Photos />
          </Route>
        </Switch>
        <Header />
      </Router>
    </div>
  );
}

export default App;
