import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BsTelephone,
  BsEnvelope,
  BsGeoAlt,
  BsInstagram,
  BsFacebook,
  BsTelegram,
} from "react-icons/bs";
import Map from "../Map/Map";
import Logo from "../Logo/Logo";
import SocialLinks from "../SocialLinks/SocialLinks";
import AskQuestionsBtn from "../AskQuestionsBtn/AskQuestionsBtn";
import styled from "styled-components";

const styledLink = `
  color: #fff;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: rgb(255, 255, 255, 0.7);
  }
`;

const StyledLink = styled.a`
  ${styledLink}
`;

function Footer() {
  const socialLinksIcons = [
    {
      href: "https://www.instagram.com/erudit_sovinyon/",
      icon: <BsInstagram size={40} />,
    },
    {
      href: "https://www.facebook.com/groups/1107227032631550/",
      icon: <BsFacebook size={40} />,
    },
    {
      href: "https://www.t.com/groups/1107227032631550/",
      icon: <BsTelegram size={40} />,
    },
  ];

  const askQuestionsButton = {
    link: "https://t.me/henry_tin",
    icon: <BsTelegram size={30} style={{ marginLeft: "10px" }} />,
  };

  return (
    <div
      style={{
        backgroundColor: "#212529",
        color: "#FFF",
        paddingTop: "3rem",
      }}
    >
      <Container>
        <Row>
          <Col
            md={6}
            lg={6}
            xl={3}
            style={{
              paddingBottom: "3rem",
            }}
          >
            <Row>
              <Col
                xl={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Logo width={190} height={190} />
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ textAlign: "center" }}>
                  Magna cillum eiusmod quis ea do adipisicing enim duis. htre
                  Consequat id repre
                </p>
              </Col>
            </Row>
          </Col>
          <Col
            md={6}
            lg={6}
            xl={3}
            style={{
              paddingBottom: "3rem",
            }}
          >
            <Row>
              <Col md={12}>
                <StyledLink target="_blank" href="tel:+1234567890">
                  <BsTelephone size={20} style={{ marginRight: "10px" }} />
                  +1 234 567 890
                </StyledLink>
              </Col>
              <Col md={12}>
                <StyledLink target="_blank" href="tel:+1342567899">
                  <BsTelephone size={20} style={{ marginRight: "10px" }} />
                  +1 342 567 899
                </StyledLink>
              </Col>
              <Col md={12}>
                <StyledLink target="_blank" href="mailto:example@example.com">
                  <BsEnvelope size={20} style={{ marginRight: "10px" }} />
                  example@example.com
                </StyledLink>
              </Col>
              <Col md={12}>
                <StyledLink
                  target="_blank"
                  href="https://maps.app.goo.gl/Xf3FZ7upJV4v6V7k7"
                >
                  <BsGeoAlt size={20} style={{ marginRight: "10px" }} />
                  123 Main St, City, Country
                </StyledLink>
              </Col>
            </Row>
            <Row>
              <Col>
                <SocialLinks
                  socialLinksIcons={socialLinksIcons}
                  styledLink={styledLink}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <AskQuestionsBtn askQuestionsButton={askQuestionsButton} />
              </Col>
            </Row>
          </Col>
          <Col
            lg={12}
            xl={6}
            style={{
              paddingBottom: "3rem",
            }}
          >
            <Map />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
