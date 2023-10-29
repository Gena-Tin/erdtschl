import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VideoEmbed from "../VideoEmbed/VideoEmbed";

const videoSrc = "https://www.youtube.com/embed/vlDzYIIOYmM";

function VideoFrame() {
  return (
    <div>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <Row style={{ alignItems: "center" }}>
          <Col lg={12} xl={7} style={{ height: "100%" }}>
            <VideoEmbed videoSrc={videoSrc} />
          </Col>
          <Col lg={12} xl={5}>
            <h2>Officia consequat Lorem esse</h2>
            <p>
              Enim irure non dolore nostrud. Quis sit irure cillum Lorem sint.
              Consectetur quis non labore velit aute incididunt exercitation
              adipisicing Lorem magna minim. Labore et esse proident deserunt.
              Duis irure aute ut velit aliqua tempor. Dolor ad id et ut ut qui
              cillum. Sit labore minim velit deserunt.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VideoFrame;
