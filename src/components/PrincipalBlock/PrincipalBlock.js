import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import gag from "./images/gag.png";

const shadowStyle = {
  boxShadow: "1px 17px 24px -13px rgba(0,0,0,0.66)",
};

function PrincipalBlock() {
  return (
    <Container style={{ padding: "2rem" }}>
      <Row>
        <Col lg={12} style={{ display: "flex", justifyContent: "center" }}>
          <Card
            style={{
              width: "30rem",
              height: "20rem",
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "center",
              ...shadowStyle,
            }}
          >
            <Card.Img variant="top" src={gag} />
            <Card.Body>
              <Card.Title>Principal</Card.Title>
              <Card.Text>Nostrud qui minim excepteur enim occaecat</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PrincipalBlock;
