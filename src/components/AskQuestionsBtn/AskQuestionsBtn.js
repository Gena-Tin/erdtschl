import React from "react";
import { Button } from "react-bootstrap";

function AskQuestionsBtn({ askQuestionsButton }) {
  return (
    <>
      <Button target="_blank" href={askQuestionsButton.link}>
        Ask questions
        {askQuestionsButton.icon}
      </Button>
    </>
  );
}

export default AskQuestionsBtn;
