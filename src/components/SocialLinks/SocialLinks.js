import React from "react";
import { StyledLink } from "../CommonStyles/CommonStyles";

function SocialLinks({ socialLinksIcons, styledLink }) {
  return (
    <>
      <ul
        style={{
          display: "flex",
          gap: "18px",
          padding: "10px",
          marginTop: "1rem",
        }}
      >
        {socialLinksIcons.map((link, index) => (
          <li key={index}>
            <StyledLink target="_blank" rel="noreferrer" href={link.href}>
              {link.icon}
            </StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SocialLinks;
