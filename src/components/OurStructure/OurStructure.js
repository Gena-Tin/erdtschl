import React from "react";
import { Container, Accordion, Row, Col, Image } from "react-bootstrap";
import { nanoid } from "nanoid";

import { ShadowOnHoverDiv } from "../CommonStyles/CommonStyles";

function OurStructure({ ourStructure }) {
  return (
    <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <h2>Our structure:</h2>
      <Accordion defaultActiveKey="0" flush>
        {ourStructure.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={nanoid()}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col
                  md={12}
                  lg={6}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {item.text}
                </Col>
                <Col>
                  <ShadowOnHoverDiv>
                    <Image src={item.image} rounded />
                  </ShadowOnHoverDiv>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}

export default OurStructure;
