import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Card,
  Button
} from "react-bootstrap";
import {listProductDetails} from '../actions/productActions.js'

import Loader from '../components/loader/loader.component.js'
import Message from '../components/message/message.component.js'

import Rating from "../components/rating/rating.component.jsx";
import Header from "../components/header/header.component.jsx";
import Footer from "../components/footer/footer.component.jsx";

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails)

  const {loading, error, product} = productDetails
  
  useEffect(()=> {
    dispatch(listProductDetails(id))
    
  }, [dispatch])

  

  return (
    <>
      <Header />
      <Container>
        <div className="py-3">
          <Link className="btn btn-light my-3" to="/">
            Go Back
          </Link>
          {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  

                  <ListGroup.Item>
                    <Button
                      className='btn-dark'
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>  
          )}
          
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ProductScreen;
