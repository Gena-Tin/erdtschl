import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img_1 from "./images/a.jpg";
import img_2 from "./images/1b.jpg";
import img_3 from "./images/d.jpg";
import img_4 from "./images/g.jpg";
import img_5 from "./images/1l.jpg";
import img_6 from "./images/m.jpg";
import img_7 from "./images/r.jpg";
import img_8 from "./images/1s.jpg";

import { Container, Image } from "react-bootstrap";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];

function Achievements() {
  return (
    <div>
      <Container
        fluid
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Our Achievements</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          grabCursor="true"
          spaceBetween={20}
          loop="true"
          loopedSlides={3}
          slidesPerView="auto"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <Image
                rounded
                src={image}
                style={{ height: "300px" }}
                alt="our Achievements"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

export default Achievements;
