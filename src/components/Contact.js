import React from "react";
import feet from "./../assets/feet1.jpg";
import { Row, Col, Container } from "react-bootstrap";

function Contact() {
  return (
    <>
      <div className='d-flex justify-content-center object-contain'>
        <img
          src={feet}
          alt='Some clean and healthy feet in a long line against a white background'
        />
      </div>
      <Container className='d-flex justify-content-center flex-column object-contain h-100'>
        <Row className='justify-content-center py-5'>
          <Col xs={12} md={6}>
            <p>
              If you would like to make an appointment to see me, please contact
              me by phone or email, or visit my clinic.
            </p>
          </Col>
        </Row>
        <Row className='justify-content-center flex-grow-1'>
          <Col xs={12} md={3}>
            <h4>Address:</h4>
            {/* <ul> */}
            <p>
              Vitaliity, <br />
              Amberly House, <br />
              Beacom Road, <br />
              Crowborough, <br />
              TN61AS
            </p>
            {/* </ul> */}
          </Col>
          <Col xs={12} md={3}>
            <h4>Telephone number:</h4> 07775698487
          </Col>

          <Col xs={12} md={3}>
            <h4>Email: </h4>
            <a href='mailto:bridgeturner@googlemail.com'>
              bridgeturner@googlemail.com
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
