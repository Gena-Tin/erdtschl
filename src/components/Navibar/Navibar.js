import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav,
  .navbar-link {
    color: #adb1b8;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
`;

function Navibar() {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>SiteName</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/">Main</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contacts">Contacts</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/team">Team</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}

export default Navibar;
