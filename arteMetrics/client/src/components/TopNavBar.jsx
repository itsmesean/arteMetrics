import React from 'react';
import Cookies from 'js-cookie';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const TopNavbar = props => {
  function logout() {
    Cookies.remove('token');
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">arteMetrics</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="home">Home</Nav.Link> */}
          {Cookies.get('token') ? (
            <Nav.Link href="metrics">Metrics</Nav.Link>
          ) : null}
          {Cookies.get('token') ? (
            <NavDropdown title="App" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">SpaceX App</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Federation App
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          ) : null}
        </Nav>
        {Cookies.get('token') ? (
          <Nav.Link href="/" onClick={logout}>
            Logout
          </Nav.Link>
        ) : (
          <Nav.Link href="login">Login</Nav.Link>
        )}

        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
