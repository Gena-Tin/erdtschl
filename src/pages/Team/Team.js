import React from "react";
import TeamGallery from "../../components/TeamGallery/TeamGallery";
import PrincipalBlock from "../../components/PrincipalBlock/PrincipalBlock";
import { Container } from "react-bootstrap";
import { PageTitleDiv } from "../../components/CommonStyles/CommonStyles";

function Team() {
  return (
    <>
      <PageTitleDiv>
        <Container>
          <h1>Our Team</h1>
        </Container>
      </PageTitleDiv>

      <PrincipalBlock />
      <TeamGallery />
    </>
  );
}

export default Team;
