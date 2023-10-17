import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsTelephone, BsEnvelope, BsGeoAlt } from "react-icons/bs";
import ContactForm from "../ContactForm/ContactForm";
import Map from "../Map/Map";

function Footer() {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#212529", color: "#FFF", padding: "3rem" }}
    >
      <Row>
        <Col md={2}>
          <h3>Contacts</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <BsTelephone size={20} style={{ marginRight: "10px" }} />
              +1 234 567 890
            </li>
            <li>
              <BsEnvelope size={20} style={{ marginRight: "10px" }} />
              example@example.com
            </li>
            <li>
              <BsGeoAlt size={20} style={{ marginRight: "10px" }} />
              123 Main St, City, Country
            </li>
          </ul>
        </Col>
        <Col md={5}>
          <h3>Map</h3>
          <Map />
        </Col>
        <Col md={4}>
          <h3>Contact form:</h3>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
