import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className='bg-lightcyan shadow' expand='lg'>
      <Container>
        <Navbar.Brand className='flex-grow' href='/'>
          Bridget Turner Podiatrist
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className=' justify-content-end'>
          <Nav className='items-center gap-2.5 text-grey d-flex justify-content-end'>
            <Link to='/' className='no-underline text-grey hover:text-cyan'>
              Home
            </Link>
            <Link
              to='/'
              className='no-underline text-grey hover:text-cyan'
            >
              About
            </Link>
            <NavDropdown title='Services'>
              <Nav.Item className='p-2'>
                <Link
                  to='/services/general-foot-care'
                  className='no-underline text-grey hover:text-cyan'
                >
                  General Foot Care
                </Link>
              </Nav.Item>
              <Nav.Item className='p-2'>
                <Link
                  to='/services/in-growing-toenails'
                  className='no-underline text-grey hover:text-cyan'
                >
                  In-growing Toenails
                </Link>
              </Nav.Item>
              {/* <Nav.Item className='p-2'>
                <Link
                  to='/services/prescription-insoles'
                  className='no-underline text-grey hover:text-cyan'
                >
                  Prescription Insoles
                </Link>
              </Nav.Item> */}
              <NavDropdown.Divider />
              <Nav.Item className='p-2'>
                <Link
                  to='/services/special-conditions'
                  className='no-underline text-grey hover:text-cyan'
                >
                  Special Conditions
                </Link>
              </Nav.Item>
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
