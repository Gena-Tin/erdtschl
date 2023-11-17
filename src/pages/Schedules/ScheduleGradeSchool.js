import React from "react";
import ScheduleSch from "../../components/Schedule/ScheduleSch";
import { PageTitleDiv } from "../../components/CommonStyles/CommonStyles";
import { Accordion, Container } from "react-bootstrap";

function ScheduleGradeSchool() {
  return (
    <>
      <PageTitleDiv>
        <Container>
          <h1>Schedule</h1>
        </Container>
      </PageTitleDiv>
      <Accordion>
        <ScheduleSch className="1a" />
        <ScheduleSch className="1b" />;
      </Accordion>
    </>
  );
}

export default ScheduleGradeSchool;
