import React from "react";
import feet from "./../assets/feet1.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <Container>
      <div className='d-flex justify-content-center object-contain'>
        <img src={feet} />
      </div>
      <h1 className='pt-12'>Bridget Turner</h1>
      <h4>
        Specialist in Foot Health, BSCHons in Podiatry, with over 20 years
        experience in podiatry and Chiropody
      </h4>
      <div className='d-flex flex-col space-y-8 pt-8'>
        <p>
          My name is Bridget Turner. I Qualified in 2003 at the University of
          Brighton with an Honours degree in Podiatry and live in Uckfield,
          Sussex with my three children.
        </p>
        <p>
          I have worked in many areas of podiatry care with a wide diversity of
          health problems and people. I am now working in private practice
          alongside other healthcare professionals at The Hollies, 50a High
          Street Uckfield.
        </p>
        <p>
          My services offer the highest standard of care and hygiene, and
          encompass all aspects of foot health, including:
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
          <p>
            I am also qualified to treat patients with special foot care needs,
            such as;
          </p>
          <ul className='list-disc'>
            <li> Rheumatoid arthritis</li>
            <li> Diabetes </li>
            <li> Circulatory disorders</li>
          </ul>
          <p>
            If you would like me to visit you, or you would like to offer my
            services to those in your care, then please don’t hesitate to
            contact me.
          </p>
        </p>
      </div>
    </Container>
  );
}

export default Home;
