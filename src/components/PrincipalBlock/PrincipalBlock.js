import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import gag from "./images/gag.png";

import {
  ShadowOnHoverDiv,
  ShadowStaticDiv,
} from "../CommonStyles/CommonStyles";

function PrincipalBlock() {
  return (
    <div style={{ background: "rgb(0,0,0,0.04)" }}>
      <Container style={{ padding: "2rem" }}>
        <Row>
          <Col lg={12} style={{ display: "flex", justifyContent: "center" }}>
            <ShadowOnHoverDiv>
              <ShadowStaticDiv>
                <Card
                  style={{
                    width: "30rem",
                    height: "20rem",
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Img variant="top" src={gag} />
                  <Card.Body>
                    <Card.Title>Principal</Card.Title>
                    <Card.Text>
                      Nostrud qui minim excepteur enim occaecat
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ShadowStaticDiv>
            </ShadowOnHoverDiv>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PrincipalBlock;
