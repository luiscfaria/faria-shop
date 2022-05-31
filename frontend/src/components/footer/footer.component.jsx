import React, { Component } from 'react'

import {Container, Row, Col} from 'react-bootstrap'

import './footer.styles.css'

class Footer extends Component {

  render() {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Faria Frames
                    </Col>
                </Row>
            </Container>

        </div>
    )
  }
}

export default Footer;