import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import blockImg from "./images/banner-diagram.jpeg";
import { Link } from "react-router-dom";
import bgImage from "./images/bg.jpeg";

const containerStyle = {
  background: `
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url(${bgImage}) no-repeat center center fixed`,
  backgroundSize: "cover",
  position: "relative",
};

function ShortInformBlock() {
  return (
    <div style={containerStyle}>
      <Container style={{ padding: "3rem" }}>
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Col
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={blockImg}
              alt="aboutImage"
              rounded
              style={{
                width: "90%",
              }}
            />
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              style={{
                width: "90%",
              }}
            >
              <Card.Body>
                <Card.Title>About us</Card.Title>
                <Card.Text>
                  Veniam adipisicing nulla dolor ex ullamco eiusmod. Culpa est
                  est non enim. Consequat ut qui nostrud sint veniam aliquip
                  adipisicing aute est ad sit magna quis mollit. Labore officia
                  et nostrud voluptate laborum ut. Sint occaecat sint incididunt
                  duis eiusmod ad cupidatat aute. Fugiat irure tempor commodo
                  ullamco aliqua qui dolore ullamco ipsum ipsum fugiat. Officia
                  voluptate aliqua eu commodo id Lorem tempor.
                </Card.Text>
                <Link to="/about">
                  <Button>More details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShortInformBlock;

// import React from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import blockImg from "./images/banner-diagram.jpeg";
// import { Link } from "react-router-dom";
// import bgImage from "./images/bg.jpeg";

// function ShortInformBlock() {
//   return (
//     <div>
//       <Container style={{ padding: "3rem" }}>
//         <Row style={{ alignItems: "center" }}>
//           <Col
//             md={6}
//             style={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <img src={blockImg} alt="aaa" />
//           </Col>
//           <Col md={5}>
//             <h2>About us</h2>
//             <p>
//               Veniam adipisicing nulla dolor ex ullamco eiusmod. Culpa est est
//               non enim. Consequat ut qui nostrud sint veniam aliquip adipisicing
//               aute est ad sit magna quis mollit. Labore officia et nostrud
//               voluptate laborum ut. Sint occaecat sint incididunt duis eiusmod
//               ad cupidatat aute. Fugiat irure tempor commodo ullamco aliqua qui
//               dolore ullamco ipsum ipsum fugiat. Officia voluptate aliqua eu
//               commodo id Lorem tempor.
//             </p>

//             <Link to="/about">
//               <Button>More details</Button>
//             </Link>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ShortInformBlock;