import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import gag from "./images/gag.png";

function TeamGallery() {
  const cardData = [
    {
      name: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      photo: gag,
    },
    {
      name: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      photo: gag,
    },
    {
      name: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      photo: gag,
    },
    {
      name: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      photo: gag,
    },
    {
      name: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      photo: gag,
    },
    {
      name: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      photo: gag,
    },
    {
      name: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      photo: gag,
    },
  ];

  return (
    <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        {cardData.map((card, index) => (
          <Col
            key={index}
            sm={12}
            md={6}
            lg={4}
            xl={4}
            xxl={3}
            style={{
              padding: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card.photo} />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TeamGallery;
