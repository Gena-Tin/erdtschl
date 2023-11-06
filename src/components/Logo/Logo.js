import React from "react";
import logo from "./images/logo1x.png";
function Logo({ width, height }) {
  return (
    <div>
      <img src={logo} alt="SiteLogo" width={width} height={height} />
    </div>
  );
}

export default Logo;
