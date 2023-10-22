import React from "react";
import Hero from "../../components/Hero/Slider";
import Motivation from "../../components/Motivation/Motivation";
import ShortInformBlock from "../../components/ShortInformBlock/ShortInformBlock";
import Achievements from "../../components/Achievements/Achievements";
import VideoFrame from "../../components/VideoFrame/VideoFrame";

function Main() {
  return (
    <>
      <Hero />
      <Motivation />
      <ShortInformBlock />
      <Achievements />
      <VideoFrame />
    </>
  );
}

export default Main;
