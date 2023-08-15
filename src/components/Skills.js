import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import checkIcon from "../assets/images/checkmark.png";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h1>Skills</h1>
              <div class="details-container">
                <h2>Frontend</h2>
                <div class="article-container">
                  <article>
                    <img src={checkIcon} alt="" class="icon" />
                    <div>
                      <h3>HTML</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkIcon} alt="" class="icon" />
                    <div>
                      <h3>CSS</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkIcon} alt="" class="icon" />
                    <div>
                      <h3>JavaScript</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkIcon} alt="" class="icon" />
                    <div>
                      <h3>React</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                </div>
              </div>
              <div class="details-container">
                <h2>Backend</h2>
                <div class="article-container">
                  <article>
                    <img src={checkIcon} alt="" class="icon" />
                    <div>
                      <h3>Python</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkIcon} alt="" class="icon" />
                    <div>
                      <h3>Java</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkIcon} alt="" class="icon" />
                    <div>
                      <h3>C++</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img src={checkIcon} alt="" class="icon" />
                    <div>
                      <h3>Git</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
