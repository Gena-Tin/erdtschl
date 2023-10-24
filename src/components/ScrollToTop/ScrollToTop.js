import React, { useState, useEffect } from "react";
import iconUp from "./images/pencil.png";

const scrollButtonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  cursor: "pointer",
  display: "none",
  zIndex: "1",
};

const iconStyle = {
  width: "60px",
  height: "60px",
};

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ ...scrollButtonStyle, display: isVisible ? "block" : "none" }}
      onClick={scrollToTop}
    >
      <img src={iconUp} alt="Scroll to Top" style={iconStyle} />
    </div>
  );
}

export default ScrollToTop;
