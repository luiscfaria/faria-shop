import React, { useState, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Header from "../components/header/header.component.jsx";
import Footer from "../components/footer/footer.component.jsx";
import Message from '../components/message/message.component'
import Loader from '../components/loader/loader.component'
import FormContainer from '../components/form/form.component.jsx'
import { login } from '../actions/userActions'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = searchParams.get("redirect") ? searchParams.get("redirect") : "/";

    useEffect(() => {
        if (userInfo) {
            console.log(redirect)
          navigate(redirect)
        }
      }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <>
            <Header />
            <FormContainer>
                <h1 className='my-3'>Sign In</h1>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler} className='my-3'>
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password' className='my-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='dark' className='my-3'>
                        Sign In
                    </Button>
                </Form>

                <Row className='py-3'>
                    <Col>
                        New Customer?{' '}
                        <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} style={{color: 'black'}}>
                            Register
                        </Link>
                    </Col>
                </Row>
            </FormContainer>
            <Footer />
        </>
    )
}

export default LoginScreen
