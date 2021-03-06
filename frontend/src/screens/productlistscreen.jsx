import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import { listProducts, deleteProduct, createProduct } from "../actions/productActions.js";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants.js";

import Header from "../components/header/header.component.jsx";
import Footer from "../components/footer/footer.component.jsx";
import Loader from "../components/loader/loader.component.js";
import Message from "../components/message/message.component.js";

const ProductListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products} = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/product/${createdProduct._id}/edit`)
    } else {
      dispatch(listProducts())
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    createdProduct
  ])

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct())
  };

  return (
    <>
      <Header />
      <Container className="my-3">
        <Row className="align-items-center">
          <Col>
            <h1>Products</h1>
          </Col>
          <Col className="text-right d-flex justify-content-end">
            <Button className="my-3" variant='primary' onClick={createProductHandler}>
              <i className="fas fa-plus" style={{color: 'white'}}></i> Create Product
            </Button>
          </Col>
        </Row>

        {loadingDelete && <Loader />}
        {errorDelete && <Message variant="danger">{errorDelete}</Message>}
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant="danger">{errorCreate}</Message>}

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
                      <LinkContainer to={`/admin/product/${product._id}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <i className="fas fa-edit" style={{color: 'black'}}></i>
                        </Button>
                      </LinkContainer>
                      <Button
                        variant="primary"
                        className="btn-sm"
                        onClick={() => deleteHandler(product._id)}
                      >
                        <i className="fas fa-trash" style={{color: 'white'}}></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ProductListScreen;
