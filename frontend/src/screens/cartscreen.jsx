import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import Header from "../components/header/header.component.jsx";
import Footer from "../components/footer/footer.component.jsx";
import Loader from '../components/loader/loader.component.js'
import Message from '../components/message/message.component.js'

const CartScreen = () => {
  
  return (
    <>
      <Header />
      <Container>
        <div className="py-3">
          <h1>Cart</h1>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default CartScreen;