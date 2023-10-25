import React from "react";
import { Container } from "react-bootstrap";

const headerStyle = {
  background: "linear-gradient(to right, rgb(255,0,0,0.5), rgb(0,0,255,0.5))",
  color: "white",
  padding: "20px",
  // textAlign: "center",
};

function About() {
  return (
    <div style={headerStyle}>
      <Container>
        <h2>AboutPage</h2>
      </Container>
    </div>
  );
}

export default About;
