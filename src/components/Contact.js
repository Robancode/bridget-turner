import React from "react";
import feet from "./../assets/feet1.jpg";
import { Row, Col, Container, Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Contact() {
  return (
    <>
      <div className='d-flex justify-content-center object-contain'>
        <LazyLoadImage
          effect='blur'
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
        <Row className='flex-grow-1 mb-4'>
          <Row
            className='justify-content-center'
            style={{ height: "fit-content" }}
          >
            <Col xs={12} md={3} className='mb-2'>
              <Card className='p-2 h-100 shadow border-0 text-center'>
                <Card.Title className='border-bottom pb-2'>Address</Card.Title>
                {/* <ul> */}
                Vitaliity
                <br />
                Amberly House
                <br />
                Beacom Road
                <br />
                Crowborough
                <br />
                TN61AS
              </Card>
              {/* </ul> */}
            </Col>
            <Col xs={12} md={3} className='mb-2'>
              <Card className='p-2 h-100 shadow border-0 text-center'>
                <Card.Title className='border-bottom pb-2'>
                  Telephone number
                </Card.Title>{" "}
                (+44)07775698487
              </Card>
            </Col>

            <Col xs={12} md={3} className='mb-2'>
              <Card className='p-2 h-100 shadow border-0 text-center'>
                <Card.Title className='border-bottom pb-2'>Email</Card.Title>
                <a href='mailto:bridgeturner@googlemail.com'>
                  bridgeturner@googlemail.com
                </a>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
