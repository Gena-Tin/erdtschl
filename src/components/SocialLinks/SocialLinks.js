import React from "react";
import { StyledLink } from "../CommonStyles/CommonStyles";
import { nanoid } from "nanoid";

function SocialLinks({ socialLinksIcons }) {
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
        {socialLinksIcons.map((link) => (
          <li key={nanoid()}>
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
