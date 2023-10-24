import React from "react";
import { Carousel } from "react-bootstrap";
import img_1 from "./images/bg1.jpg";
import img_2 from "./images/bg2.jpg";
import img_3 from "./images/bg3.jpg";

const slides = [img_1, img_2, img_3];
const slide_titles = ["First Slide", "Second Slide", "Third slide"];
const slide_descriptions = [
  "Veniam eu enim culpa et non laboris irure nulla.",
  "Minim non ea ullamco sint mollit incididunt veniam amet commodo",
  "",
];

function Hero() {
  return (
    <>
      <Carousel fade>
        {slides.map((slide, index) => (
          <Carousel.Item
            style={{
              display: "flex",
              maxHeight: "500px",
            }}
            key={index}
          >
            <img
              className="d-block w-100"
              src={slide}
              alt={slide_titles[index]}
              style={{
                objectFit: "cover",
              }}
            />
            <Carousel.Caption
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  color: "#fff",
                  fontSize: "calc(24px + 16 * (100vw / 1280))",
                  backgroundColor: "rgb(0,0,0,0.3)",
                  borderRadius: "10px",
                }}
              >
                {slide_titles[index]}
              </h2>
              <p
                style={{
                  color: "#fff",
                  fontSize: "calc(16px + 16 * (100vw / 1280))",
                  backgroundColor: "rgb(0,0,0,0.3)",
                  borderRadius: "10px",
                }}
              >
                {slide_descriptions[index]}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Hero;
