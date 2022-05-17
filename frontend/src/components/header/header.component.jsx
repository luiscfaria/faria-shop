import React, { Component } from "react";

import {Navbar, Nav, Container} from 'react-bootstrap'

import "./header.styles.css";

class Header extends Component {
  render() {
    return (
      <Navbar className="navbar" bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Faria Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href="/login">Log In</Nav.Link>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
