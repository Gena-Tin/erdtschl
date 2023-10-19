import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsTelephone, BsEnvelope, BsGeoAlt } from "react-icons/bs";
import ContactForm from "../ContactForm/ContactForm";
import Map from "../Map/Map";

function Footer() {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#212529", color: "#FFF", paddingTop: "3rem" }}
    >
      <Row>
        <Col
          lg={12}
          xl={3}
          style={{
            paddingBottom: "3rem",
          }}
        >
          <h3>Contacts:</h3>
          <Row>
            <Col md={12} lg={4} xl={12}>
              <BsTelephone size={20} style={{ marginRight: "10px" }} />
              +1 234 567 890
            </Col>
            <Col md={12} lg={4} xl={12}>
              <BsEnvelope size={20} style={{ marginRight: "10px" }} />
              example@example.com
            </Col>
            <Col md={12} lg={4} xl={12}>
              <BsGeoAlt size={20} style={{ marginRight: "10px" }} />
              123 Main St, City, Country
            </Col>
          </Row>
        </Col>
        <Col
          lg={6}
          xl={5}
          style={{
            paddingBottom: "3rem",
          }}
        >
          <h3>Map:</h3>
          <Map />
        </Col>
        <Col
          lg={6}
          xl={4}
          style={{
            paddingBottom: "3rem",
          }}
        >
          <h3>Contact form:</h3>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
