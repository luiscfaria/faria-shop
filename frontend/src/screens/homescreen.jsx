import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from 'axios';


import Product from "../components/product/product.component.jsx";
import Header from "../components/header/header.component.jsx";
import Footer from "../components/footer/footer.component.jsx";

const HomeScreen = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=> {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    }

    fetchProducts()
  }, [])

  
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

export default HomeScreen;
