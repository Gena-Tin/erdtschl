import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Counter from "../Counter/Counter";
import {
  BsFillPeopleFill,
  BsFillMortarboardFill,
  BsFillHandThumbsUpFill,
  BsFillTrophyFill,
  BsDashLg,
} from "react-icons/bs";

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  alignItems: "center",
  background: "rgba(0,0,0,0.05)",
  border: "2px solid rgba(0, 0, 0, 0.3)",
  borderRadius: "1rem",
  boxShadow: "1px 17px 24px -13px rgba(0,0,0,0.66)",
  webkitBoxShadow: "1px 17px 24px -13px rgba(0,0,0,0.66)",
  mozBoxShadow: "1px 17px 24px -13px rgba(0,0,0,0.66)",
};

const icons = [
  <BsFillPeopleFill size={40} />,
  <BsFillTrophyFill size={40} />,
  <BsFillMortarboardFill size={40} />,
  <BsFillHandThumbsUpFill size={40} />,
];

const title = "Qui enim reprehenderit enim esse in et laborum";
const numbers = [1430, 7900, 30, 20];
const texts = ["enim esse", "enim esse", "enim esse", "enim esse"];

function Motivation() {
  return (
    <Container
      style={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>{title} </h2>
      <Row style={{ fontSize: "2rem" }}>
        {icons.map((icon, index) => (
          <Col key={index}>
            <div style={cardStyles}>
              {icon}
              <BsDashLg size={60} />
              <Counter number={numbers[index]} />
              <span>{texts[index]}</span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Motivation;
