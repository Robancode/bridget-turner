import React from "react";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <Container className='py-12'>
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
