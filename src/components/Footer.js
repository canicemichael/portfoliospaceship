import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/cgcsbcwioao21.webp";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="">
          <Col sm={6} className="text-center text-sm-start">
            <img className="logo_footer" src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/canice-ezugwu/"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/canicemike"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/full.0ption/"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>CopyRight 2022. All rights reservered.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
