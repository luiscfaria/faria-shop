import React, { useEffect } from "react";
import { Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../actions/cartActions";

import Header from "../components/header/header.component.jsx";
import Footer from "../components/footer/footer.component.jsx";
import Message from "../components/message/message.component.js";

const CartScreen = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const quantity = searchParams.get("quantity");

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity));
    }
  }, [dispatch, id, quantity]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    if (userInfo) {
      navigate("/shipping")
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <Header />
      <Container>
        <div className="py-3">
          <Row>
            <Col md={8}>
              <h1>Shopping Cart</h1>
              {cartItems.length === 0 ? (
                <Message>
                  Your cart is empty <Link to="/">Go Back</Link>
                </Message>
              ) : (
                <ListGroup variant="flush">
                  {cartItems.map((item) => (
                    <ListGroup.Item key={item.product}>
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col md={3}>
                          <Link
                            className="btn-light cardlink"
                            to={`/product/${item.product}`}
                          >
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={2}>${item.price}</Col>
                        <Col md={2}>
                          <Form.Control
                            as="select"
                            value={item.quantity}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                        <Col md={2}>
                          <Button
                            type="button"
                            variant="light"
                            onClick={() => removeFromCartHandler(item.product)}
                          >
                            <i className="fas fa-trash"></i>
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>
                      Subtotal (
                      {cartItems.reduce((acc, item) => acc + Number(item.quantity), 0)})
                      items
                    </h2>
                    ${cartItems.reduce((acc, item) => acc + Number(item.quantity) * Number(item.price), 0).toFixed(2)}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn-block"
                      disabled={cartItems.length === 0}
                      onClick={checkoutHandler}
                    >
                      Proceed To Checkout
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default CartScreen;
