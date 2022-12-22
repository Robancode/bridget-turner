import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import feet from "./../assets/feet4.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function GeneralFootCare() {
  return (
    <div className='d-flex flex-column'>
      <Container className='pb-4'>
        <Row className='justify-content-center'>
          <Col
            xs={12}
            md={4}
            className='align-self-center justify-content-center d-flex'
          >
            <LazyLoadImage
              effect='blur'
              src={feet}
              className='rounded-sm mt-3'
              alt='Gloved podiatrists hand holding a patients bare foot, which is clean and healthy, against a white background'
            />
          </Col>
          <Col xs={12} md={4} className='d-flex flex-col pr-4'>
            <h2 className='py-12'>General foot care</h2>
            <p className=''>
              Looking after and caring for your feet is more important than most
              people give credit to. However, preventing problems before they
              arise is definitely preferable to dealing with painful
              debilitating foot problems. Regular visits to a podiatrist for
              maintaining healthy feet is the best way in prevention care.
            </p>
          </Col>
        </Row>
      </Container>

      <Row>
        <Col>
          <Container fluid className='bg-lightcyan p-4'>
            <Row className='justify-content-center'>
              <Col md={3}>
                <h2 className='py-4 text-center border-top'>Foot Facts</h2>
              </Col>
            </Row>
            <Row className='py-5 justify-content-center'>
              <Col xs={12} md={4}>
                <Card className='h-100 shadow border-0 p-3'>
                  <h4>Muscles, bones and joints</h4>
                  <p>
                    Feet are complicated structures, each made up of 28 bones.
                    Each foot has 40 joints and 31 muscles; 12 of which are
                    found in the lower leg.
                  </p>
                  <h4>Function</h4>
                  <p>
                    There are two main functions of the feet: to act as a
                    flexible support to the legs and body; and to act as a rigid
                    lever to help propel the body forward when walking.
                  </p>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className=' shadow border-0 p-3'>
                  <h4>Blood supply</h4>
                  <p>
                    There are two pulses found in each foot, one on the top of
                    the foot and the other just behind the inside ankle. This is
                    because there are 2 major arteries supplying the feet. There
                    are however 3 main veins to return blood back to the heart,
                    as the blood has to be forced against gravity all the way
                    back.
                  </p>
                  <p>
                    Heart and vascular problems therefore can have a profound
                    effect on the health of the feet, as can problems with
                    oxygenating the blood such as anaemia and pulmonary disease.
                  </p>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container fluid className='p-4'>
            <Row className='justify-content-center'>
              <Col xs={12} md={4}>
                <Card className=' shadow border-0 p-3'>
                  <h4>Problems</h4>
                  <p>
                    Problems with the muscles, joints and bones can cause
                    changes to the surface soft tissues, such as bunions, corns
                    and calluses, and nail disorders.
                  </p>

                  <p>
                    The most important joints in the feet are the ankle, the
                    subtalar joint (just below the ankle in the heel), the
                    midtarsal (on the top of the arch of the foot) and the 1st
                    metatarsophalangeal joint (big toe). Dysfunction of these
                    joints cause stress to other structures in the foot as well
                    as the knees, hips and back. A biomechanical assessment and
                    specially made insoles can help rectify problems.
                  </p>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className=' shadow border-0 p-3'>
                  <h4>Nerves</h4>
                  <p>
                    Nerves controlling feeling, movement in the muscles, and
                    autonomic controls (such as sweating, producing oil for the
                    skin and diverting blood closer or away from the skin in
                    response to temperature) are abundant in the feet.
                  </p>
                  <p>
                    Damage to these nerves can be due to trauma or disease. An
                    example of a disease affecting the nerves is diabetes
                    mellitis. Nerves can also be damaged in other ways, such as
                    lack of vitamin B12 found in people with food absorbtion
                    diseases such as crones, or alcoholism.
                  </p>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default GeneralFootCare;
