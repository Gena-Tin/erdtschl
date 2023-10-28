import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function OurMission({ bgImage, text }) {
  const containerStyle = {
    background: `
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url(${bgImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
    position: "relative",
  };

  return (
    <div style={containerStyle}>
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <h2>Our mission:</h2>
        <Row>
          <Col></Col>
          <Col>{text}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurMission;
