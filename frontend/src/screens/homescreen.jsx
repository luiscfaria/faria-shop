import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/product/product.component.jsx";
import products from "../products.js";
import Header from "../components/header/header.component.jsx";
import Footer from "../components/footer/footer.component.jsx";

class HomeScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <div className="py-3">
            <h1>Latest Products</h1>
            <Row>
              {products.map((product) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}

export default HomeScreen;
