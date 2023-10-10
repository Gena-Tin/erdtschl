import React from "react";
import { Carousel } from "react-bootstrap";
import img_1 from "./images/1663.jpg";

function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item style={{ height: "300px" }}>
          <img className="d-block w-100" src={img_1} alt="first_slide" />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>First slide</h3>
            <p style={{ color: "black" }}>
              Veniam eu enim culpa et non laboris irure nulla.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "300px" }}>
          <img className="d-block w-100" src={img_1} alt="second_slide" />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Second slide</h3>
            <p style={{ color: "black" }}>
              Minim non ea ullamco sint mollit incididunt veniam amet commodo
              adipisicing veniam qui sit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "300px" }}>
          <img className="d-block w-100" src={img_1} alt="third_slide" />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Third slide</h3>
            <p style={{ color: "black" }}>
              Minim Lorem occaecat id nostrud deserunt dolor nisi incididunt.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
