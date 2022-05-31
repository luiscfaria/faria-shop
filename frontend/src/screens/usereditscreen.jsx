import React, { useState, useEffect } from "react";
import {
  Link,
  useSearchParams,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUser } from "../actions/userActions.js";
import { USER_UPDATE_RESET } from "../constants/userConstants.js";

import Header from "../components/header/header.component.jsx";
import Footer from "../components/footer/footer.component.jsx";
import Loader from "../components/loader/loader.component.js";
import Message from "../components/message/message.component.js";
import FormContainer from "../components/form/form.component.jsx";

const UserEditScreen = () => {
  const { id } = useParams();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      navigate('/admin/userlist')
    } else {
      if (!user.name || user._id !== id) {
        dispatch(getUserDetails(id))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [dispatch, navigate, id, successUpdate, user])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser({ _id: id, name, email, isAdmin }))
  }

  return (
    <>
      <Header />
      <Container>
      <Link to='/admin/userlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='isadmin'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
      </Container>
      <Footer />
    </>
  );
};

export default UserEditScreen;
