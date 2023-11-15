import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { AlignCenterDiv } from "../CommonStyles/CommonStyles";

function Loader() {
  return (
    <AlignCenterDiv>
      <Spinner animation="border" />
    </AlignCenterDiv>
  );
}

export default Loader;
