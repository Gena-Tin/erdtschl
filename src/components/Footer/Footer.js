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
import Map from "../Map/Map";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#212529",
        color: "#FFF",
        paddingTop: "3rem",
      }}
    >
      <Container>
        <Row>
          <Col
            md={6}
            lg={6}
            xl={3}
            style={{
              paddingBottom: "3rem",
            }}
          >
            <Row>
              <Col
                xl={12}
                // lg={3}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Logo width={190} height={190} />
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ textAlign: "center" }}>
                  Приватний заклад освіти "Єрудит", "Гімназія І-ІІІ ступенів -
                  дошкільний заклад"
                </p>
              </Col>
            </Row>
          </Col>
          <Col
            md={6}
            lg={6}
            xl={3}
            style={{
              paddingBottom: "3rem",
            }}
          >
            <Row>
              <Col md={12}>
                <BsTelephone size={20} style={{ marginRight: "10px" }} />
                +1 234 567 890
              </Col>
              <Col md={12}>
                <BsTelephone size={20} style={{ marginRight: "10px" }} />
                +1 342 567 899
              </Col>
              <Col md={12}>
                <BsEnvelope size={20} style={{ marginRight: "10px" }} />
                example@example.com
              </Col>
              <Col md={12}>
                <BsGeoAlt size={20} style={{ marginRight: "10px" }} />
                123 Main St, City, Country
              </Col>
            </Row>
            <Row>
              <Col>
                <ul
                  style={{
                    display: "flex",
                    gap: "18px",
                    padding: "10px",
                    marginTop: "1rem",
                  }}
                >
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/erudit_sovinyon/"
                    >
                      <BsInstagram size={40} color="white" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/groups/1107227032631550/"
                    >
                      <BsFacebook size={40} color="white" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.t.com/groups/1107227032631550/"
                    >
                      <BsTelegram size={40} color="white" />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button target="_blank" href="https://t.me/henry_tin">
                  Ask questions
                  <BsTelegram size={30} style={{ marginLeft: "10px" }} />
                </Button>
              </Col>
            </Row>
          </Col>
          <Col
            lg={12}
            xl={6}
            style={{
              paddingBottom: "3rem",
            }}
          >
            <Map />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
