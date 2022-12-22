import React from "react";
import feet from "./../assets/feet1.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Home() {
  return (
    <>
      <div className='d-flex justify-content-center object-contain'>
        {/* <Card className='text-dark'>
          <Card.Img src={feet} alt='Card image' />
          <Card.ImgOverlay
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            <Card.Title>Bridget Turner</Card.Title>
            <Card.Text>
              <h4 className='text-center mw-75 text-dark'>
                Specialist in Foot Health, BSc(Hons) in Podiatry, with over 20
                years experience in Podiatry and Chiropody
              </h4>
            </Card.Text>
          </Card.ImgOverlay>
        </Card> */}
        <div className='bg-white-50'>
          <LazyLoadImage
            effect='blur'
            src={feet}
            alt='Some clean and healthy feet in a long line against a white background'
          />
        </div>
      </div>
      <Container className='mt-4 mb-5'>
        <Row className='justify-content-center'>
          <Col md={6}>
            <Card className='p-3 shadow border-0'>
              <h1 className='text-center'>Bridget Turner</h1>
              <h4 className='text-center mw-75'>
                Private Specialist in Foot Health, BSc(Hons) in Podiatry
                <br />
                Over 20 years experience
              </h4>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className=''>
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
            <Card className='shadow border-0 m-2 p-3'>
              <p>
                My services offer the highest standard of care and hygiene, and
                encompass all aspects of foot health, whether they are routine
                or special foot care needs, including:
              </p>
              <div className='text-center' style={{ fontWeight: 500 }}>
                General foot care <br />
                Nail care <br />
                Corn and callus removal <br />
                Verrucae treatment
                <br />
                In-growing toenails
                <br />
                Prescription insoles <br />
                Fungal infections <br />
                Hammer toes
                <br />
                Foot care advice <br />
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='shadow border-0 m-2 p-3'>
              <p>
                I am also qualified to treat patients with special foot care
                needs, such as but not limited to:
              </p>
              <div className='text-center' style={{ fontWeight: 500 }}>
                Diabetes <br />
                Rheumatoid arthritis
                <br />
                Circulatory disorders
                <br />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className='p-5 text-center'>
        <Row className='justify-content-center'>
          <Col md={8}>
            <p>
              If you would like me to visit you, or you would like to offer my
              services to those in your care, then please don’t hesitate to
              contact me.
            </p>
            <p>Home visits are available for the frail or immobile.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
