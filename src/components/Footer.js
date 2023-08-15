import { Container, Row, Col } from "react-bootstrap";
import footerIcon1 from "../assets/images/home-github.svg";
import footerIcon2 from "../assets/images/home-instagram.svg";
import footerIcon3 from "../assets/images/home-blog.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={5} className="footer-left">
            <h2>Jimin Park</h2>
          </Col>
          <Col md={5} className="footer-mid">
            <h3>
              2023 WINK Sumer Project
              <br />
              40 days individual project
            </h3>
          </Col>
          <Col className="footer-right">
            <div className="connect-icon">
              <a href="https://github.com/qkrwlalss?tab=repositories">
                <img src={footerIcon1} alt="" />
              </a>
              <a href="https://www.instagram.com/gminii__/">
                <img src={footerIcon2} alt="" />
              </a>
              <a href="https://blog.naver.com/cecilywhite">
                <img src={footerIcon3} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
