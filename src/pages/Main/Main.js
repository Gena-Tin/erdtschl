import React from "react";
import Hero from "../../components/Hero/Slider";
import Motivation from "../../components/Motivation/Motivation";
import AboutBlock from "../../components/AboutBlock/AboutBlock";
import Achievements from "../../components/Achievements/Achievements";
import VideoFrame from "../../components/VideoFrame/VideoFrame";

function Main() {
  return (
    <>
      <Hero />
      <Motivation />
      <AboutBlock />
      <Achievements />
      <VideoFrame />
    </>
  );
}

export default Main;
