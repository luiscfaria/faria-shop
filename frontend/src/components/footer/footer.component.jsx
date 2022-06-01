import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./footer.styles.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row className="justify-content-md-center text-center py-3">
            {/* <Col className="text-center py-3"> */}
              <div className="logo-footer">
                  <div>
                        Copyright {" "}
                  </div>
                  <div className="mx-1">&copy;</div>
                <img
                  className="logo-img"
                  src={require("../../images/logo-white.png")}
                  alt="logo"
                />
              </div>
            {/* </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
