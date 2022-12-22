import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className='bg-lightcyan shadow' expand='lg' style={{ zIndex: 1 }}>
      <Container>
        <Navbar.Brand className='flex-grow' href='/'>
          Bridget Turner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className=' justify-content-end'>
          <Nav className='items-center gap-2.5 text-grey d-flex justify-content-end align-items-sm-end align-items-md-center'>
            <Link to='/' className='no-underline text-grey hover:text-cyan p-1'>
              Home
            </Link>
            <Link
              to='/about'
              className='no-underline text-grey hover:text-cyan p-1'
            >
              About
            </Link>
            <NavDropdown
              title='Services'
              className='d-flex flex-column align-items-end'
            >
              <Nav.Item className='p-2'>
                <Link
                  to='/services/general-foot-care'
                  className='no-underline text-grey hover:text-cyan p-1'
                >
                  General Foot Care
                </Link>
              </Nav.Item>
              <Nav.Item className='p-2'>
                <Link
                  to='/services/in-growing-toenails'
                  className='no-underline text-grey hover:text-cyan p-1'
                >
                  In-growing Toenails
                </Link>
              </Nav.Item>
              {/* <Nav.Item className='p-2'>
                <Link
                  to='/services/prescription-insoles'
                  className='no-underline text-grey hover:text-cyan p-1'
                >
                  Prescription Insoles
                </Link>
              </Nav.Item> */}
              {/* <NavDropdown.Divider /> */}
              <Nav.Item className='p-2'>
                <Link
                  to='/services/special-conditions'
                  className='no-underline text-grey hover:text-cyan p-1'
                >
                  Special Conditions
                </Link>
              </Nav.Item>
            </NavDropdown>
            <Link
              to='/contact'
              className='no-underline text-grey hover:text-cyan p-1'
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
