import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import feet from "../assets/feet2.jpg";

function SpecialConditions() {
  return (
    <Container className='py-12'>
      <Row>
        <Col className='d-flex flex-col pr-4' lg={8} md={12} sm={12}>
          <h1>Special Conditions</h1>
          <p>
            I am qualified to treat patients with special foot care needs, such
            as
          </p>
          <ul className='list-disc'>
            <li>Rheumatoid arthritis </li>
            <li> Diabetes</li>
            <li> Circulatory Disorders</li>
          </ul>
        </Col>
        <Col lg={4} sm={12} md={12}>
          <img src={feet} />
        </Col>
      </Row>
    </Container>
  );
}

export default SpecialConditions;
