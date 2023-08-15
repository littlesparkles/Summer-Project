import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mainImg from "../assets/images/home-main.png";
import homeIcon1 from "../assets/images/home-github.svg";
import homeIcon2 from "../assets/images/home-instagram.svg";
import homeIcon3 from "../assets/images/home-blog.svg";
import Typewriter from "typewriter-effect";

export const Home = () => {
  function Typing() {
    return (
      <Typewriter
        options={{
          strings: ["Jimin Park"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    );
  }

  return (
    <section className="main" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {"Hi! I'm"}
              <span id="typewriter-effect">
                <div>
                  <Typing />
                </div>
              </span>
            </h1>
            <p>This is my 2023 summer project</p>
            <h5>
              <br />
              Feel free to connect with me!
            </h5>
            <div className="connect-icon">
              <a href="https://github.com/qkrwlalss?tab=repositories">
                <img src={homeIcon1} alt="" />
              </a>
              <a href="https://www.instagram.com/gminii__/">
                <img src={homeIcon2} alt="" />
              </a>
              <a href="https://blog.naver.com/cecilywhite">
                <img src={homeIcon3} alt="" />
              </a>
            </div>
          </Col>
          <Col xs={10} md={5} xl={4}>
            <div className="main-image">
              <img src={mainImg} alt="Main Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
