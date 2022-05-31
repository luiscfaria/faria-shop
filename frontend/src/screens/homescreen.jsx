import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { listProducts } from "../actions/productActions.js";

import Product from "../components/product/product.component.jsx";
import Header from "../components/header/header.component.jsx";
import Footer from "../components/footer/footer.component.jsx";
import Loader from '../components/loader/loader.component.js'
import Message from '../components/message/message.component.js'

const HomeScreen = () => {
  const dispatch = useDispatch();
  const keyword = useParams()

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword.keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <Header />
      <Container>
        <div className="py-5">
          <h1>Discover curator-approved collector favorites</h1>
          {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
            <Row>
              {products.map((product) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default HomeScreen;
