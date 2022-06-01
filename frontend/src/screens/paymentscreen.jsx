import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/form/form.component'
import { savePaymentMethod } from '../actions/cartActions'

import Header from "../components/header/header.component.jsx";
import Footer from "../components/footer/footer.component.jsx";
import CheckoutSteps from '../components/checkoutSteps/checkoutSteps.component.jsx'

const PaymentScreen = () => {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (!shippingAddress.address) {
        navigate('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }

    return (
        <>
            <Header />
            <FormContainer>
                <CheckoutSteps step1 step2 step3 />
                <h1>Payment Method</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Label as='legend'>Select Method</Form.Label>
                        <Col>
                            <Form.Check
                                type='radio'
                                label='PayPal or Credit Card'
                                id='PayPal'
                                name='paymentMethod'
                                value='PayPal'
                                checked
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            ></Form.Check>
                        </Col>
                    </Form.Group>

                    <Button type='submit' variant='dark' className="my-2">
                        Continue
                    </Button>
                </Form>
            </FormContainer>

            <Footer />
        </>
    )
}

export default PaymentScreen
