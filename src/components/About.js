import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../assets/images/about-me.jpg";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="information">
          <Col md={7}>
            <h1>
              Introducing <strong className="color">ME</strong>
            </h1>
            <p>
              <br />
              <br />
              HI, I am <span className="color">Jimin Park </span>
              from Seoul, South Korea.
              <br /> I am 21 years old. I am a{" "}
              <span className="color">sophomore </span>
              at Kookmin University, and I'm majoring in
              <span className="color"> Computer Science</span>. I became
              interested in programming when I took coding classes in high
              school.
              <br /> After I took the WINK pre-course, I became interested in
              the <span className="color">front end</span>, so I joined the
              club. I am a member of the web club WINK, and this is my{" "}
              <span className="color">summer project</span>.
              <br /> Hope you enjoy!
              <br />
              <br /> Some activities that I like to do!
            </p>
            <ul>
              <li className="activities">Reading Books</li>
              <li className="activities">Watching Movies</li>
              <li className="activities">Listening Music</li>
            </ul>
            <p>
              <br />
              You cannot be happy everyday, but there are happy things everyday!
            </p>
            <p className="color">- Winnie the Pooh</p>
          </Col>
          <Col md={5}>
            <div className="about-image">
              <img src={aboutImg} alt="About Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
