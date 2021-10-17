import React from "react";
import * as ReactBootStrap from "react-bootstrap";
// import { BrowserRouter as Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.png";
import ImageSlider from "../ImageSlider/ImageSlider";

// export const Header = () => {
//   return (
//     <div className="App">
//  <ReactBootStrap.Navbar
//   collapseOnSelect
//   expand="xl"
//   sticky="top"
//   bg="light"
//   variant="light"
//   // style={{ height: "80%vh", width: "100&vw" }}
// >
// </ReactBootStrap.Navbar>

// <ReactBootStrap.Navbar.Brand href="/">
//   <img src={logo} height="125rm"/>
// </ReactBootStrap.Navbar.Brand>
//         <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
//           <ReactBootStrap.Nav className="ml-auto">
//             <Link to="/Music">
//               <ReactBootStrap.Nav.Link href="#Music">
//                 Music
//               </ReactBootStrap.Nav.Link>
//             </Link>
//             <Link to="/Photos">
//               <ReactBootStrap.Nav.Link href="#Photos">
//                 Photos
//               </ReactBootStrap.Nav.Link>
//             </Link>
//             <Link to="/Videos">
//               <ReactBootStrap.Nav.Link href="#Videos">
//                 Videos
//               </ReactBootStrap.Nav.Link>
//             </Link>
//             <Link to="/Merch">
//               <ReactBootStrap.Nav.Link href="#Merch">
//                 Merch
//               </ReactBootStrap.Nav.Link>
//             </Link>
//           </ReactBootStrap.Nav>
//         </ReactBootStrap.Navbar.Collapse>
//     </div>
//   );
// };

export default function Header() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Music">Music</Link>
          <Link to="/Photos">Photos</Link>
          <Link to="/Videos">Videos</Link>
          <Link to="/Merch">Merch</Link>
        </nav>
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
      </div>
    </Router>
  );
}

function Home() {
  return <ImageSlider />;
}

function Music() {
  return <h2>Music</h2>;
}

function Photos() {
  return <h2>Photos</h2>;
}

function Videos() {
  return <h2>Videos</h2>;
}

function Merch() {
  return <h2>Merch</h2>;
}

// export default Header;
