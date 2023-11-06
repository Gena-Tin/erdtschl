import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
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
            <Navbar.Brand
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Logo width={70} height={70} />
              SiteName
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-between"
            >
              <Nav className="mr-auto" variant="underline">
                <Nav.Item>
                  <Nav.Link as={NavLink} to={"/"} exact="true">
                    Main
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={NavLink} to={"/about"}>
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={NavLink} to={"/team"}>
                    Team
                  </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Schedule" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/4.1">
                    Action1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/4.2">
                    Action2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/4.3">
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
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
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
