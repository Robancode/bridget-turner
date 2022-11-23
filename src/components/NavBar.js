import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className='bg-lightcyan' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Bridget Turner</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto items-center gap-2.5 text-grey'>
            <Link to='/' className='no-underline text-grey hover:text-cyan'>
              Home
            </Link>
            <Link
              to='/about'
              className='no-underline text-grey hover:text-cyan'
            >
              About
            </Link>
            <NavDropdown title='Services' id='basic-nav-dropdown'>
              <Link
                to='/services/general-foot-care'
                className='no-underline text-grey hover:text-cyan'
              >
                General Foot Care
              </Link>
              <Link
                to='/services/in-growing-toenails'
                className='no-underline text-grey hover:text-cyan'
              >
                In-growing Toenails
              </Link>
              <Link
                to='/services/prescription-insoles'
                className='no-underline text-grey hover:text-cyan'
              >
                Prescription Insoles
              </Link>
              <NavDropdown.Divider />
              <Link
                to='/services/special-conditions'
                className='no-underline text-grey hover:text-cyan'
              >
                Special Conditions
              </Link>
            </NavDropdown>
            <Link
              to='/contact'
              className='no-underline text-grey hover:text-cyan'
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
