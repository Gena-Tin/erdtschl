import React from "react";
import { Ratio } from "react-bootstrap";

const VideoEmbed = ({ videoSrc }) => (
  <Ratio aspectRatio="16x9">
    <embed
      src={videoSrc}
      title="YouTube video"
      allowFullScreen
      no-repeat="true"
      style={{ boxShadow: "1px 17px 24px -13px rgba(0,0,0,0.66)" }}
    />
  </Ratio>
);

export default VideoEmbed;
