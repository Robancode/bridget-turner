import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import feet from "./../assets/feet1.jpg";

function About() {
  return (
    <>
      <div className='d-flex justify-content-center object-contain'>
        <img
          src={feet}
          alt='Some clean and healthy feet in a long line against a white background'
        />
      </div>
      <Container className='flex-grow-1'>
        <Row className='justify-content-center'>
          <Col md={8}>
            <h2 className='text-center py-5'>
              Podiatry and Chiropody Services in Uckfield, East Sussex
            </h2>
            <p>
              Bridget Turner graduated from the University of Brighton in 2003
              as a Podiatrist BSc (Hons). She lives in Uckfield, Sussex with her
              three children. Bridget has worked in many areas of podiatry care
              with a wide diversity of health problems, has a wealth of
              experience to draw from, and is committed to giving the best care
              and advice to people.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
