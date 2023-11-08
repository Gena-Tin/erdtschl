import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import blockImg from "./images/banner-diagram.jpeg";
import { Link } from "react-router-dom";
import bgImage from "./images/bg.jpeg";

import { ShadowStaticDiv } from "../CommonStyles/CommonStyles";

const containerStyle = {
  background: `
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url(${bgImage}) no-repeat center center fixed`,
  backgroundSize: "cover",
  position: "relative",
};

function ShortInformBlock() {
  return (
    <div style={containerStyle}>
      <Container style={{ padding: "3rem" }}>
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Col
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ShadowStaticDiv>
              <Image src={blockImg} alt="aboutImage" rounded />
            </ShadowStaticDiv>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ShadowStaticDiv>
              <Card>
                <Card.Body>
                  <Card.Title>About us</Card.Title>
                  <Card.Text>
                    Veniam adipisicing nulla dolor ex ullamco eiusmod. Culpa est
                    est non enim. Consequat ut qui nostrud sint veniam aliquip
                    adipisicing aute est ad sit magna quis mollit. Labore
                    officia et nostrud voluptate laborum ut. Sint occaecat sint
                    incididunt duis eiusmod ad cupidatat aute. Fugiat irure
                    tempor commodo ullamco aliqua qui dolore ullamco ipsum ipsum
                    fugiat. Officia voluptate aliqua eu commodo id Lorem tempor.
                  </Card.Text>
                  <Link to="/about">
                    <Button>More details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </ShadowStaticDiv>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShortInformBlock;
