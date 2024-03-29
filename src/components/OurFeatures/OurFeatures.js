import React from "react";
import { Col, Container, Row, Image, Tabs, Tab } from "react-bootstrap";
import VideoEmbed from "../../components/VideoEmbed/VideoEmbed";

import { ShadowOnHoverDiv } from "../CommonStyles/CommonStyles";
import { nanoid } from "nanoid";

const contentStyle = {
  display: "flex",
  alignItems: "center",
  paddingTop: "1rem",
  paddingBottom: "1rem",
};

function OurFeatures({ ourFeaturesContent, videoFeaturesSrc }) {
  return (
    <div style={{ background: "rgb(0,0,0,0.08)" }}>
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <h2>Our features:</h2>
        <Tabs
          defaultActiveKey={ourFeaturesContent[0].title}
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
          fill
        >
          {ourFeaturesContent.map((tab, index) => (
            <Tab eventKey={tab.title} title={tab.title} key={nanoid()}>
              <Row>
                <Col md={12} lg={6} style={contentStyle}>
                  {tab.video ? (
                    <VideoEmbed videoSrc={tab.video} />
                  ) : (
                    <ShadowOnHoverDiv>
                      <Image src={tab.image} alt={tab.title} rounded />
                    </ShadowOnHoverDiv>
                  )}
                </Col>
                <Col style={contentStyle}>{tab.text}</Col>
              </Row>
            </Tab>
          ))}
        </Tabs>
        {videoFeaturesSrc ? (
          <Row style={contentStyle}>
            <Col></Col>
            <Col lg={8} xl={7}>
              <VideoEmbed videoSrc={videoFeaturesSrc} />
            </Col>
            <Col></Col>
          </Row>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}

export default OurFeatures;
