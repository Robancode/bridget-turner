import React from "react";
import feet from "./../assets/feet1.jpg";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <Container>
      <div className='d-flex justify-content-center object-contain'>
        <img
          src={feet}
          alt='Some clean and healthy feet in a long line against a white background'
        />
      </div>
      <h1 className='pt-12 text-center'>Bridget Turner</h1>
      <h4 className='text-center'>
        Specialist in Foot Health, BSCHons in Podiatry, with over 20 years
        experience in Podiatry and Chiropody
      </h4>
      <div className='d-flex flex-col space-y-8 py-8'>
        <p>
          My name is Bridget Turner. I Qualified in 2003 at the University of
          Brighton with an Honours degree in Podiatry and live in Uckfield,
          Sussex with my three children.
        </p>
        <p>
          I have worked in many areas of podiatry care with a wide diversity of
          health problems and people. I have worked at numerous private
          practices, and am currently working at Vitaliity, Amberly House,
          Beacom Road, Crowborough, TN61AS.
        </p>
        <Container className='container-fluid p-5 bg-lightcyan'>
          My services offer the highest standard of care and hygiene, and
          encompass all aspects of foot health, whether they are routine or
          special foot care needs, including:
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
        </Container>
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
          services to those in your care, then please don’t hesitate to contact
          me.
        </p>
      </div>
    </Container>
  );
}

export default Home;
