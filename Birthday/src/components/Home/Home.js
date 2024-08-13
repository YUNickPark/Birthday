import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cake from "../../Assets/cake.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { BirthdayCake, Wink } from "../IconComponent";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              Happy Birthday Baby! <BirthdayCake />{" "}
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> From Nini <Wink /></strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={cake}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
