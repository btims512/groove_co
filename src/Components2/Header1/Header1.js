import { HeaderStyles } from "./Header.style1";
import * as ReactBootStrap from 'react-bootstrap'


const Header1 = () => (
  <HeaderStyles>
    <div id="header1">
      <h3>Header Component 1</h3>
      <ReactBootStrap.Navbar inverse collapseOnSelect>
  <ReactBootStrap.Navbar.Header>
    <ReactBootStrap.Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle />
  </ReactBootStrap.Navbar.Header>
  <ReactBootStrap.Navbar.Collapse>
    <ReactBootStrap.Nav>
      <ReactBootStrap.NavItem eventKey={1} href="#">
        Link
      </ReactBootStrap.NavItem>
      <ReactBootStrap.NavItem eventKey={2} href="#">
        Link
      </ReactBootStrap.NavItem>
      {/* <ReactBootStrap.NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <ReactBootStrap.MenuItem eventKey={3.1}>Action</ReactBootStrap.MenuItem>
        <ReactBootStrap.MenuItem eventKey={3.2}>Another action</ReactBootStrap.MenuItem>
        <ReactBootStrap.MenuItem eventKey={3.3}>Something else here</ReactBootStrap.MenuItem>
        <ReactBootStrap.MenuItem divider />
        <ReactBootStrap.MenuItem eventKey={3.3}>Separated link</ReactBootStrap.MenuItem>
      </ReactBootStrap.NavDropdown> */}
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav pullRight>
      <ReactBootStrap.NavItem eventKey={1} href="#">
        Link Right
      </ReactBootStrap.NavItem>
      <ReactBootStrap.NavItem eventKey={2} href="#">
        Link Right
      </ReactBootStrap.NavItem>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>;
    </div>
  </HeaderStyles>
);

export default Header;
