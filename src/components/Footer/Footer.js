import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  BsTelephone,
  BsEnvelope,
  BsGeoAlt,
  BsInstagram,
  BsFacebook,
  BsTelegram,
} from "react-icons/bs";
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
          <Row style={{ height: "100px" }}>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsInstagram size={40} />
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsFacebook size={40} />
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsTelegram size={40} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>
                Ask questions <BsTelegram size={30} />
              </Button>
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
