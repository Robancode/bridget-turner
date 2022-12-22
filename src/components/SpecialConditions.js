import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import feet from "../assets/feet2.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SpecialConditions() {
  return (
    <div className='flex-grow-1'>
      <Container>
        <Row className='justify-content-center flex-direction-column'>
          <Col md={6} className='d-flex flex-col'>
            <h1 className='py-5'>Special Conditions</h1>
            <p>
              I am qualified to treat patients with special foot care needs,
              such as
            </p>
            <ul className='list-disc'>
              <li>Rheumatoid arthritis </li>
              <li> Diabetes</li>
              <li> Circulatory Disorders</li>
            </ul>
            <LazyLoadImage
              effect='blur'
              src={feet}
              alt='A pair of clean, bare feet mid walk towards the camera, against a white background, on a brown wooden floor.'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SpecialConditions;
