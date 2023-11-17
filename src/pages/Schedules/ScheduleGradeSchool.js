import React from "react";
import ScheduleSch from "../../components/Schedule/ScheduleSch";
import { PageTitleDiv } from "../../components/CommonStyles/CommonStyles";
import { Container } from "react-bootstrap";

function ScheduleGradeSchool() {
  return (
    <>
      <PageTitleDiv>
        <Container>
          <h1>Schedule</h1>
        </Container>
      </PageTitleDiv>
      <ScheduleSch className="1a" />
      <ScheduleSch className="1b" />;
    </>
  );
}

export default ScheduleGradeSchool;
