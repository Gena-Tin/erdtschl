import React from "react";
import TeamGallery from "../../components/TeamGallery/TeamGallery";
import PrincipalBlock from "../../components/PrincipalBlock/PrincipalBlock";
import { Container } from "react-bootstrap";

const headerStyle = {
  background: "linear-gradient(to right, rgb(0,0,255,1), rgb(255,255,0,0.7))",
  color: "white",
  padding: "20px",
  // textAlign: "center",
};

function Team() {
  return (
    <>
      <div style={headerStyle}>
        <Container>
          <h2>Our Team</h2>
        </Container>
      </div>
      <PrincipalBlock />
      <TeamGallery />
    </>
  );
}

export default Team;
