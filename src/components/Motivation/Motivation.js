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
import { motion } from "framer-motion";

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  alignItems: "center",
  background: "rgba(0,0,0,0.3)",
  color: "rgba(255, 255, 255)",
  border: "2px solid rgba(255, 255, 255)",
  borderRadius: "1rem",
  boxShadow: "1px 17px 24px -13px rgba(0,0,0,0.66)",
  WebkitBoxShadow: "1px 17px 24px -13px rgba(0,0,0,0.66)",
  MozBoxShadow: "1px 17px 24px -13px rgba(0,0,0,0.66)",
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
  const divVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div style={{ backgroundColor: "#c7ccdbff" }}>
      <Container
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <h2
          style={{ textAlign: "center", marginBottom: "2rem", color: "white" }}
        >
          {title}
        </h2>
        <Row style={{ fontSize: "2rem" }}>
          {icons.map((icon, index) => (
            <Col
              key={index}
              sm={12}
              md={6}
              lg={6}
              xl={3}
              style={{ padding: "10px" }}
            >
              <motion.div
                style={cardStyles}
                initial={"hidden"}
                animate={"visible"}
                whileHover={{
                  boxShadow: "1px 17px 24px -13px rgba(255,255,255)",
                  webkitBoxShadow: "1px 17px 24px -13px rgba(0,0,0,0)",
                  mozBoxShadow: "1px 17px 24px -13px rgba(0,0,0,0)",
                }}
                transition={{
                  delay: index / 4,
                  duration: 2,
                  type: "spring",
                }}
                variants={divVariants}
              >
                {icon}
                <BsDashLg size={60} />
                <Counter number={numbers[index]} />
                <span>{texts[index]}</span>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Motivation;
