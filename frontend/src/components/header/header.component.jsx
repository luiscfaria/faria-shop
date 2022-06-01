import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "../searchbox/searchbox.component.jsx";
import { logout } from "../../actions/userActions.js";

import "./header.styles.css";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar
      className="navbar"
      bg="primary"
      variant="dark"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand className='brand' href="/">
          <div className="logo">
            <img
              className="logo-img"
              src={require("../../images/logo2.png")}
              alt="logo"
            />
          </div>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <SearchBox /> */}

          <Nav className="ms-auto">
            <Nav.Link href="/" style={{color: 'white'}}>Home</Nav.Link>
            <Nav.Link href="/cart" style={{color: 'white'}}>
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </Nav.Link >
            {userInfo ? (
              <NavDropdown style={{color: 'white'}} title={userInfo.name} id="username">
                <LinkContainer to="/profile" >
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login" style={{color: 'white'}}>
                <i className="fa-solid fa-user"></i> Sign In
              </Nav.Link>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="adminmenu">
                <LinkContainer to="/admin/userlist">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/productlist">
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/orderlist">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
