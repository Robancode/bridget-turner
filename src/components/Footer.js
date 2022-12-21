import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className='d-flex justify-end bg-lightcyan p-4 shadow'>
      <Container className='d-flex justify-content-between'>
        <div>© Bridget Turner {new Date().getFullYear()}</div>
        Site by RositaDev. All rights reserved
      </Container>
    </footer>
  );
}

export default Footer;
