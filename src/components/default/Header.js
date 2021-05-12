import React from "react";
import { Helmet } from "react-helmet";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "gatsby";

export function Header() {
  return (
    <>
      <Helmet>
        <style type="text/css">
          {`
            .navbar{
              transition: background .3s;
            }
            .navbar-light .navbar-nav .nav-link {
              color: rgb(0 0 0 / 80%);
          }
          `}
        </style>
      </Helmet>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        variant="light"
        style={{ background: "#ffffffe6" }}
      >
        <Link to="/" className="navbar-brand" style={{ color: "salmon" }}>
          Studio Voce
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/#sign-up" className="nav-link">
              Sign Up
            </Link>
            <Link to="/#about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <NavDropdown title="More Info" id="collasible-nav-dropdown">
              <Link to="/calendar" className="dropdown-item">
                Calendar
              </Link>
              <Link to="/faq" className="dropdown-item">
                FAQ
              </Link>
              <NavDropdown.Divider />
              <Link to="/studio-policy" className="dropdown-item">
                Studio Policy
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/sign-in" className="nav-link">
              Student Sign-in
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
