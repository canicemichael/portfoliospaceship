import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import donkey from "../assets/img/donkey.jpeg";
import mystery from "../assets/img/unnamed.jpg";
import natours from "../assets/img/natours.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "ETS-Emmalex",
      description:
        "ETS EMMALEX Global Limited Farm, is a farm that specializes in donkey farming, with 40 hectares of land for pasturing and grass planting",
      imgUrl: donkey,
      url: "https://www.etsemmalexglobalfarm.ng/",
      git: "https://github.com/canicemichael/ETS-Emmalex-farm",
    },
    {
      title: "Mystery Under The Sun",
      description:
        "Mystery Under the Sun is a true classic African literature of its kind; a masterpiece that contains both e-book and audio book (all inclusive).",
      imgUrl: mystery,
      url: "https://play.google.com/store/apps/details?id=com.syntaxdesigner.mystery_under_the_app.app",
      git: "",
    },
    {
      title: "Natourrs",
      description:
        "Webflow of an adventurous company that offers tours of nature to adventurous people. A well detailed plan of a frontend work. (Frontend Only)",
      imgUrl: natours,
      url: "https://canicemichael.github.io/1-Natours/",
      git: "https://github.com/canicemichael/1-Natours",
    },
  ];

  return (
    <section>
      <Container id="projects">
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__bounce animate__faster"
                      : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Project Summary</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project}></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Coming Soon.</Tab.Pane>
                <Tab.Pane eventKey="third">Coming Soon.</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
