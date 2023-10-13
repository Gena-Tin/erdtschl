import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BsFillPeopleFill,
  BsFillMortarboardFill,
  BsFillHandThumbsUpFill,
  BsFillTrophyFill,
  BsDashLg,
} from "react-icons/bs";
import Counter from "../Counter/Counter";

function Motivation() {
  return (
    <>
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Qui enim reprehenderit enim esse in et laborum
        </h2>
        <Row style={{ fontSize: "2rem" }}>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <BsFillPeopleFill size={40} />
            <BsDashLg size={40} />
            <Counter number={1430} /> {/*число на счетчике */}
            <span>enim esse</span>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BsFillTrophyFill size={40} />
            <BsDashLg size={40} />
            <Counter number={7900} /> {/*число на счетчике */}
            <span>enim esse</span>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BsFillMortarboardFill size={40} />
            <BsDashLg size={40} />
            <Counter number={30} /> {/*число на счетчике */}
            <span>enim esse</span>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BsFillHandThumbsUpFill size={40} />
            <BsDashLg size={40} />
            <Counter number={20} /> {/*число на счетчике */}
            <span>enim esse</span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Motivation;
