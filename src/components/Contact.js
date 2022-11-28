import React from "react";
import feet from "./../assets/feet1.jpg";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <Container>
      <div className='d-flex justify-content-center object-contain'>
        <img
          src={feet}
          alt='A pair of clean and healthy feet in a long line against a white background'
        />
      </div>
      <p>
        If you would like to make an appointment to see me, please contact me by
        phone or email, or visit my clinic.
      </p>
      <p>Address: Vitaliity, Amberly House, Beacom Road, Crowborough, TN61AS</p>
      <p>Telephone number: 07775698487</p>
      <p>
        Email:{" "}
        <a href='mailto:bridgeturner@googlemail.com'>
          bridgeturner@googlemail.com
        </a>
      </p>
    </Container>
  );
}

export default Contact;
