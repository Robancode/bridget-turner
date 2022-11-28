import React from "react";

function Footer() {
  return (
    <footer className='d-flex justify-end bg-lightcyan p-4'>
      © Bridget Turner {new Date().getFullYear()}
      <br />
      Site by RositaDev
    </footer>
  );
}

export default Footer;
