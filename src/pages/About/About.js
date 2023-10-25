import React from "react";
import { Accordion, Col, Container, Row, Image } from "react-bootstrap";
import img_1 from "./images/pre_kindergarten.jpg";
import img_2 from "./images/kindergarten_2.jpg";
import img_3 from "./images/grade_school.jpg";
import img_4 from "./images/high_school.avif";

const headerStyle = {
  background: "linear-gradient(to right, rgb(255,0,0,0.5), rgb(0,0,255,0.5))",
  color: "white",
  padding: "20px",
  // textAlign: "center",
};

const ourStructure = [
  {
    header: "Pre kindergarten",
    text: "",
    image: img_1,
  },
  {
    header: "Kindergarten",
    text: "Veniam dolor nostrud irure in voluptate pariatur. Magna ut dolor ad id. Voluptate elit minim ullamco nostrud. Labore ad excepteur reprehenderit duis.",
    image: img_2,
  },
  {
    header: "Grade school",
    text: "Ea aliquip qui pariatur sint irure. Est dolor non aliqua fugiat nulla. Culpa cillum incididunt laboris in proident commodo in ex culpa aliquip. Laboris deserunt esse dolor laborum cupidatat ullamco id labore. Esse excepteur quis nisi quis ea nulla enim sit. Irure ullamco irure ea aliqua ipsum occaecat. Nisi consequat sit cupidatat mollit culpa.",
    image: img_3,
  },
  {
    header: "High school",
    text: "Eu duis labore laborum exercitation ad ut dolore pariatur esse dolor nostrud cupidatat officia. Ex adipisicing voluptate voluptate adipisicing exercitation ipsum excepteur cillum quis eiusmod nostrud Lorem duis culpa. Laboris ea ex occaecat ipsum non elit. Tempor irure duis sit tempor elit non mollit anim quis.",
    image: img_4,
  },
];

function About() {
  return (
    <>
      <div style={headerStyle}>
        <Container>
          <h2>AboutPage</h2>
        </Container>
      </div>
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <h2>Our structure:</h2>
        <Accordion defaultActiveKey="0">
          {ourStructure.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col
                    md={12}
                    lg={6}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Col>
                  <Col>
                    <Image src={item.image} rounded />
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </>
  );
}

export default About;
