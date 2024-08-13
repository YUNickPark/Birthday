import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myself from "../../Assets/selfie.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Happy <span className="purple"> Birthday </span> Baby!
            </h1>
            <p className="home-about-body">
              Meeting you was the greatest thing that has ever happened to me and will always be one.
              <br />
              <br />
              <i>
                <b className="purple">You are the most beautiful thing in the world!</b>
              </i>
              <br />
              <br />
              I love you so much ❤ {" "}
              <i>
                <b className="purple">
                  and always will!
                </b>
              </i>
              <br />
              <br />
              I treasure all our memories and I'm looking forward to make more~!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myself} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
