import React from "react";
import { Col, Container, Ratio, Row } from "react-bootstrap";

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
            <Ratio aspectRatio="16x9">
              <embed
                src="https://www.youtube.com/embed/vlDzYIIOYmM"
                title="YouTube video"
                allowFullScreen
                no-repeat="true"
              />
            </Ratio>
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
