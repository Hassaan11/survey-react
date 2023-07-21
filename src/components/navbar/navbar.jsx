import React from "react";

// import NavItem from "react-bootstrap/NavItem";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import "./navbar.css";

const TopNavBar = () => {
  const loginView = () => {
    return (
      <Nav style={{ marginLeft: "auto" }}>
        <NavDropdown eventKey={3} title={"Hassaan"} id="basic-nav-dropdown">
          {/* <NavDropdown.Divider /> */}
          <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  };

  const unLoginView = () => {
    return (
      <Nav style={{ marginLeft: "auto" }}>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav>
    );
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React Survey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">{unLoginView()}</Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavBar;
