import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mount from "../../Assets/mountain.jpg";
import conc from "../../Assets/concert.jpg";
import sauna from "../../Assets/insauna.jpg";
import zoo from "../../Assets/hippo.jpg";
import room from "../../Assets/escaperoom.jpg";
import trio from "../../Assets/mebutterbaby.jpg";
import photo from "../../Assets/photobooth.jpg";
import cat from "../../Assets/minggu.jpg";
import Particle from "../Particle";

function About() {
  return (
      <section>
        <Container fluid className="home-section" id="about">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={6} className="home-header">
              <img
                src={mount}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />

              <h1 className="heading-name">
                <strong className="main-name"> Hiking </strong>
              </h1>

              <div style={{ padding: 10, textAlign: "left" }}>
                <h1 style={{ fontSize: "1.0em" }}>
                  I'm so thankful and glad we made this one.
                </h1>
              </div>
            </Col>

            <Col md={6} className="home-header">
              <img
                src={sauna}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
              <h1 className="heading-name">
                <strong className="main-name"> Sauna </strong>
              </h1>

              <div style={{ padding: 10, textAlign: "left" }}>
                <h1 style={{ fontSize: "1.0em" }}>
                  Our 100th anniversary!
                </h1>
                <h1 style={{ fontSize: "1.0em" }}>
                  We had such a good nap
                </h1>
              </div>
            </Col>

            </Row>
           <Row>
            <Col md={6} className="home-header">
              <img
                src={zoo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
              <h1 className="heading-name">
                <strong className="main-name"> Zoo </strong>
              </h1>

              <div style={{ padding: 10, textAlign: "left" }}>
                <h1 style={{ fontSize: "1.0em" }}>
                  I wanted to use king julien 
                </h1>
                <h1 style={{ fontSize: "1.0em" }}>
                  but I don't have it TT
                </h1>
              </div>
            </Col>

            <Col md={6} className="home-header">
              <img
                src={conc}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px", maxWidth: "300px"}}
              />
              <h1 style={{ paddingBottom: 15 }}>
              Concert
              </h1>
              <div style={{ padding: 10, textAlign: "left" }}>
                <h1 style={{ fontSize: "1.0em" }}>
                  We got so unlucky with the seats
                </h1>
                <h1 style={{ fontSize: "1.0em" }}>
                  I learned how to dance hehe
                </h1>
              </div>
            </Col>

            </Row>
            <Row>
            <Col md={6} className="home-header">
              <img
                src={room}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
              <h1 className="heading-name">
                <strong className="main-name"> Escape room </strong>
              </h1>

              <div style={{ padding: 10, textAlign: "left" }}>
                <h1 style={{ fontSize: "1.0em" }}>
                  The employee did us bad with this one
                </h1>
                <h1 style={{ fontSize: "1.0em" }}>
                  the escape room experience too
                </h1>
              </div>
            </Col>

            <Col md={6} className="home-header">
              <img
                src={trio}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px", maxWidth: "300px"}}
              />
              <h1 style={{ paddingBottom: 15 }}>
              The trio
              </h1>
              <div style={{ padding: 10, textAlign: "left" }}>
                <h1 style={{ fontSize: "1.0em" }}>
                  My favourite cat and my favourite person!
                </h1>
              </div>
            </Col>

            </Row>

            <Row>
            <Col md={6} className="home-header">
              <img
                src={photo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
              <h1 className="heading-name">
                <strong className="main-name"> photobooth </strong>
              </h1>

              <div style={{ padding: 10, textAlign: "left" }}>
                <h1 style={{ fontSize: "1.0em" }}>
                  The photos we took before I asked you out
                </h1>
                <h1 style={{ fontSize: "1.0em" }}>
                  Will always remember this day vividly
                </h1>
              </div>
            </Col>

            <Col md={6} className="home-header">
              <img
                src={cat}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px", maxWidth: "300px"}}
              />
              <h1 style={{ paddingBottom: 15 }}>
              Minggu
              </h1>
              <div style={{ padding: 10, textAlign: "left" }}>
                <h1 style={{ fontSize: "1.0em" }}>
                  I just put this one here
                </h1>
                <h1 style={{ fontSize: "1.0em" }}>
                  because I like this one.
                </h1>
              </div>
            </Col>

            </Row>
        </Container>
      </Container>
    </section>
  );
}

export default About;
