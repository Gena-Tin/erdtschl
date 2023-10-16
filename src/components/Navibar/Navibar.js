import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Modal,
  Form,
  NavDropdown,
} from "react-bootstrap";
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>SiteName</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-between"
            >
              <Nav className="mr-auto" defaultActiveKey="1" variant="underline">
                <Nav.Link eventKey="1" as={Link} to={"/"}>
                  Main
                </Nav.Link>
                <Nav.Link eventKey="2" as={Link} to={"/about"}>
                  About
                </Nav.Link>
                <Nav.Link eventKey="3" as={Link} to={"/contacts"}>
                  Contacts
                </Nav.Link>
                <Nav.Link eventKey="4" as={Link} to={"/team"}>
                  Team
                </Nav.Link>
                <NavDropdown title="Schedule" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Action1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Action2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Action3
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Button variant="primary" onClick={handleShow}>
                Log in
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group comtrolId="formBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email" />
            </Form.Group>
            <Form.Group comtrolId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navibar;
