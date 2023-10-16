import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import blockImg from "./images/banner-diagram.jpeg";
import { Link } from "react-router-dom";

function AboutBlock() {
  return (
    <div>
      <Container style={{ padding: "3rem" }}>
        <Row style={{ alignItems: "center", margin: "0, auto" }}>
          <Col md={7}>
            <img src={blockImg} alt="aaa" />
          </Col>
          <Col md={5}>
            <h2>About us</h2>
            <p>
              Veniam adipisicing nulla dolor ex ullamco eiusmod. Culpa est est
              non enim. Consequat ut qui nostrud sint veniam aliquip adipisicing
              aute est ad sit magna quis mollit. Labore officia et nostrud
              voluptate laborum ut. Sint occaecat sint incididunt duis eiusmod
              ad cupidatat aute. Fugiat irure tempor commodo ullamco aliqua qui
              dolore ullamco ipsum ipsum fugiat. Officia voluptate aliqua eu
              commodo id Lorem tempor.
            </p>

            <Link to="/about">
              <Button>More details</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutBlock;
