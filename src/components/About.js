import React from "react";
import Container from "react-bootstrap/Container";
import feet from "./../assets/feet1.jpg";

function About() {
  return (
    <Container>
      <div className='d-flex justify-content-center object-contain'>
        <img
          src={feet}
          alt='Some clean and healthy feet in a long line against a white background'
        />
      </div>
      <p className='pt-12'>
        <h2>Podiatry and Chiropody Services Uckfield East Sussex</h2>
        Bridget Turner graduated from the University of Brighton in 2003 as a
        Podiatrist BSc (Hons). She lives in Uckfield, Sussex with her three
        children. Bridget has worked in many areas of podiatry care with a wide
        diversity of health problems, has a wealth of experience to draw from,
        and is committed to giving the best care and advice to people.
      </p>
    </Container>
  );
}

export default About;
