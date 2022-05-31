import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

import { logout } from '../../actions/userActions.js'

import "./header.styles.css";

const Header = () =>  {

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  
    return (
      <Navbar className="navbar" bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Faria Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/cart"><i className="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
                </NavDropdown>
              ) : (<Nav.Link href="/login"><i className="fa-solid fa-user"></i> Sign In</Nav.Link> )}

               {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  
}

export default Header;
