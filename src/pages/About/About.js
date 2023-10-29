import React from "react";
import { Container } from "react-bootstrap";

import OurMission from "../../components/OurMission/OurMission";
import OurStructure from "../../components/OurStructure/OurStructure";
import OurFeatures from "../../components/OurFeatures/OurFeatures";

//Features section images:
import img_lang from "./images/language.jpg";
import img_chess from "./images/chess-champions.jpg";
import img_ages from "./images/growing.jpg";

//Structure sections images:
import img_1 from "./images/pre_kindergarten.jpg";
import img_2 from "./images/kindergarten_2.jpg";
import img_3 from "./images/grade_school.jpg";
import img_4 from "./images/high_school.avif";

//Mission section images:
import bgImage from "./images/kindergarten_1.jpg";

//Style:
const headerStyle = {
  background: "linear-gradient(to right, rgb(255,0,0,0.5), rgb(0,0,255,0.5))",
  color: "white",
  padding: "20px",
};

//---Sections Content:
//Our Features:
const ourFeaturesContent = [
  {
    title: "Location",
    text: "Commodo veniam amet duis laboris. Duis dolore non anim nisi quis incididunt. Reprehenderit pariatur minim culpa aliquip ullamco commodo ea quis incididunt reprehenderit ad. Ea deserunt aliquip anim dolor ipsum velit proident do occaecat. Ad ad do magna nostrud aliquip incididunt ad ullamco sit ut nulla ullamco. Dolor in anim ea deserunt dolor dolor incididunt nulla. Duis minim pariatur elit cillum. Lorem duis eu culpa ad duis cillum do amet quis excepteur aliquip reprehenderit enim non. Commodo duis fugiat esse aliqua sint anim incididunt minim. Sunt id non occaecat amet sunt dolor eu dolore. Irure aute sit nulla irure pariatur. Ipsum nostrud adipisicing veniam ",
    image: "",
    video: "https://www.youtube.com/embed/vlDzYIIOYmM",
  },
  {
    title: "Languages",
    text: " veniam amet duis laboris. Duis dolore non anim nisi quis incididunt. Reprehenderit pariatur minim culpa aliquip ullamco commodo ea quis incididunt reprehenderit ad. Ea deserunt aliquip anim dolor ipsum velit proident do occaecat. Ad ad do magna nostrud aliquip incididunt ad ullamco sit ut nulla ullamco. Dolor in anim ea deserunt dolor dolor incididunt nulla. Duis minim pariatur elit cillum. Lorem duis eu culpa ad duis cillum do amet quis excepteur aliquip reprehenderit enim non. Commodo duis fugiat esse aliqua sint anim incididunt minim. Sunt id non occaecat amet sunt dolor eu dolore. Irure aute sit nulla irure pariatur. Ipsum nostrud adipisicing veniam labore ",
    image: img_lang,
    video: "",
  },
  {
    title: "Chess",
    text: " amet duis laboris. Duis dolore non anim nisi quis incididunt. Reprehenderit pariatur minim culpa aliquip ullamco commodo ea quis incididunt reprehenderit ad. Ea deserunt aliquip anim dolor ipsum velit proident do occaecat. Ad ad do magna nostrud aliquip incididunt ad ullamco sit ut nulla ullamco. Dolor in anim ea deserunt dolor dolor incididunt nulla. Duis minim pariatur elit cillum. Lorem duis eu culpa ad duis cillum do amet quis excepteur aliquip reprehenderit enim non. Commodo duis fugiat esse aliqua sint anim incididunt minim. Sunt id non occaecat amet sunt dolor eu dolore. Irure aute sit nulla irure pariatur. Ipsum nostrud adipisicing veniam labore dolor ",
    image: img_chess,
    video: "",
  },
  {
    title: "Continuity",
    text: "duis laboris. Duis dolore non anim nisi quis incididunt. Reprehenderit pariatur minim culpa aliquip ullamco commodo ea quis incididunt reprehenderit ad. Ea deserunt aliquip anim dolor ipsum velit proident do occaecat. Ad ad do magna nostrud aliquip incididunt ad ullamco sit ut nulla ullamco. Dolor in anim ea deserunt dolor dolor incididunt nulla. Duis minim pariatur elit cillum. Lorem duis eu culpa ad duis cillum do amet quis excepteur aliquip reprehenderit enim non. Commodo duis fugiat esse aliqua sint anim incididunt minim. Sunt id non occaecat amet sunt dolor eu dolore. Irure aute sit nulla irure pariatur. Ipsum nostrud adipisicing veniam labore dolor dolor ",
    image: img_ages,
    video: "",
  },
];

const videoFeaturesSrc = "https://www.youtube.com/embed/vlDzYIIOYmM";

//Our Structure:
const ourStructure = [
  {
    header: "Pre kindergarten",
    text: "Ea aliquip qui pariatur sint irure. Est dolor non aliqua fugiat nulla. Culpa cillum incididunt laboris in proident commodo in ex culpa aliquip. Laboris deserunt esse dolor laborum cupidatat ullamco id labore. Esse excepteur quis nisi quis ea nulla enim sit. Irure ullamco irure ea aliqua ipsum occaecat. Nisi consequat sit cupidatat mollit culpa.",
    image: img_1,
  },
  {
    header: "Kindergarten",
    text: "Veniam dolor nostrud irure in voluptate pariatur. Magna ut dolor ad id. Voluptate elit minim ullamco nostrud. Labore ad excepteur reprehenderit duis.",
    image: img_2,
  },
  {
    header: "Grade school",
    text: "Ea aliquip qui pariatur sint irure. Est dolor non aliqua fugiat nulla. Culpa cillum incididunt laboris in proident commodo in ex culpa aliquip. Laboris deserunt esse dolor laborum cupidatat ullamco id labore. Esse excepteur quis nisi quis ea nulla enim sit. Irure ullamco irure ea aliqua ipsum occaecat. Nisi consequat sit cupidatat mollit culpa.",
    image: img_3,
  },
  {
    header: "High school",
    text: "Eu duis labore laborum exercitation ad ut dolore pariatur esse dolor nostrud cupidatat officia. Ex adipisicing voluptate voluptate adipisicing exercitation ipsum excepteur cillum quis eiusmod nostrud Lorem duis culpa. Laboris ea ex occaecat ipsum non elit. Tempor irure duis sit tempor elit non mollit anim quis.",
    image: img_4,
  },
];

//OurMission:
const ourMissionText =
  "Aliqua veniam ea est eiusmod duis esse enim nisi sint velit aliquip eiusmod. Qui sunt cupidatat est deserunt adipisicing minim laboris enim exercitation occaecat in. Et pariatur officia velit cillum fugiat eiusmod. Irure adipisicing reprehenderit eiusmod amet. Aliqua veniam ea est eiusmod duis esse enim nisi sint velit aliquip eiusmod. Qui sunt cupidatat est deserunt adipisicing minim laboris enim exercitation occaecat in. Et pariatur officia velit cillum fugiat eiusmod. Irure adipisicing reprehenderit eiusmod amet.";

function About() {
  return (
    <>
      <div style={headerStyle}>
        <Container>
          <h2>AboutPage</h2>
        </Container>
      </div>

      <OurFeatures
        ourFeaturesContent={ourFeaturesContent}
        videoFeaturesSrc={videoFeaturesSrc}
      />

      <OurStructure ourStructure={ourStructure} />

      <OurMission bgImage={bgImage} text={ourMissionText} />
    </>
  );
}

export default About;
