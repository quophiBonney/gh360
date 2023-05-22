import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import NavCSS from "./Components.module.css";
import {HiMenuAlt3} from "react-icons/hi";
function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="fixed-top"
      id={NavCSS.navbar}
    >
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="text-light">GH360</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id={NavCSS.toggle}>
          <HiMenuAlt3 className={NavCSS.toggleIcon} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="" className="m-2" id={NavCSS.menuLink}>
              Home
            </Link>
            <Link
              to="https://www.police.gov.gh"
              className="m-2"
              id={NavCSS.menuLink}
            >
              Police Service
            </Link>
            <Link
              to="https://www.gnfs.gov.gh/"
              className="m-2"
              id={NavCSS.menuLink}
            >
              Fire Service
            </Link>
            <Link to="https://nas.gov.gh/" className="m-2" id={NavCSS.menuLink}>
              National Ambulance
            </Link>
            <Link
              to="https://gafcscmil.edu.gh/"
              className="m-2"
              id={NavCSS.menuLink}
            >
              Armed Forces
            </Link>
            <Link to="/aboutus" className="m-2" id={NavCSS.menuLink}>
              About Us
            </Link>
            <Link to="/contact" className="m-2" id={NavCSS.menuLink}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
