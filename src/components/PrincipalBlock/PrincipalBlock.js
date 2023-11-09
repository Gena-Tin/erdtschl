import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import gag from "./images/gag.png";
import bgImage from "./images/background2.jpg";

import {
  ShadowOnHoverDiv,
  ShadowStaticDiv,
} from "../CommonStyles/CommonStyles";

const containerStyle = {
  background: `
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url(${bgImage}) no-repeat center center`,
  backgroundSize: "cover",
  position: "relative",
};

function PrincipalBlock() {
  return (
    <div style={containerStyle}>
      <Container style={{ padding: "2rem" }}>
        <Row>
          <Col sm={1} md={2} lg={3} xl={3}></Col>
          <Col>
            <ShadowOnHoverDiv>
              <ShadowStaticDiv>
                <Row
                  // className="justify-content-center"
                  style={{
                    padding: "10px",
                    backgroundColor: "rgb(255,255,255)",
                  }}
                >
                  <Col
                    md={12}
                    lg={6}
                    xl={6}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                    }}
                  >
                    <h2>Principal</h2>
                    <p>Nostrud qui minim excepteur enim occaecat</p>
                  </Col>
                  <Col
                    md={12}
                    lg={6}
                    xl={6}
                    style={{
                      display: "flex",
                      // flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image variant="top" src={gag} />
                  </Col>
                </Row>
              </ShadowStaticDiv>
            </ShadowOnHoverDiv>
          </Col>
          <Col sm={1} md={2} lg={3} xl={3}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default PrincipalBlock;
