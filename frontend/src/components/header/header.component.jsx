import React, { Component } from "react";

import {Navbar, Nav, Container} from 'react-bootstrap'

import "./header.styles.css";

class Header extends Component {
  render() {
    return (
      <Navbar className="navbar" bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Faria Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/cart"><i className="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
              <Nav.Link href="/login"><i className="fa-solid fa-user"></i> Log In</Nav.Link>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
