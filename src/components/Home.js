import React from "react";
import feet from "./../assets/feet1.jpg";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <div className='d-flex justify-content-center object-contain'>
        <img
          src={feet}
          alt='Some clean and healthy feet in a long line against a white background'
        />
      </div>
      <Container className='py-3'>
        <h1 className='pt-12 text-center'>Bridget Turner</h1>
        <Row className='justify-content-center'>
          <Col md={6}>
            <h4 className='text-center mw-75'>
              Specialist in Foot Health, BSCHons in Podiatry, with over 20 years
              experience in Podiatry and Chiropody
            </h4>
          </Col>
        </Row>
      </Container>
      <Container className='py-5'>
        <Row className='justify-content-center'>
          <Col xs={12} md={4}>
            <p>
              My name is Bridget Turner. I Qualified in 2003 at the University
              of Brighton with an Honours degree in Podiatry and live in
              Uckfield, Sussex with my three children.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <p>
              I have worked in many areas of podiatry care with a wide diversity
              of health problems and people. I have worked at numerous private
              practices, and am currently working at Vitaliity, Amberly House,
              Beacom Road, Crowborough, TN61AS.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className='p-5 bg-lightcyan'>
        <Row className='justify-content-center'>
          <Col md={4}>
            <p>
              My services offer the highest standard of care and hygiene, and
              encompass all aspects of foot health, whether they are routine or
              special foot care needs, including:
            </p>
            <ul className='list-disc'>
              <li> General foot care </li>
              <li> Nail care </li>
              <li> Corn and callus removal </li>
              <li> Verrucae treatment</li>
              <li> In-growing toenails</li>
              <li> Prescription insoles </li>
              <li> Fungal infections </li>
              <li> Hammer toes</li>
              <li>Foot care advice </li>
            </ul>
          </Col>
          <Col md={4}>
            <p>
              I am also qualified to treat patients with special foot care
              needs, such as:
            </p>
            <ul className='list-disc'>
              <li> Rheumatoid arthritis</li>
              <li> Diabetes </li>
              <li> Circulatory disorders</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container className='p-5 text-center'>
        <p>
          If you would like me to visit you, or you would like to offer my
          services to those in your care, then please don’t hesitate to contact
          me.
        </p>
      </Container>
    </>
  );
}

export default Home;
