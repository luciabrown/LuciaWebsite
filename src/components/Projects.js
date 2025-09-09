import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Card } from "./Card";
import codecraft from "../assets/img/codecraft.jpg";
import keysentinel from "../assets/img/keySentinel.png";
import spotify4vsc from "../assets/img/spotify4vsc.png";
import mint from "../assets/img/mint.png";
import react from "../assets/img/react_square.png";
import golang from "../assets/img/go_square.png";
import dockerlogo from "../assets/img/dockerlogo.png";
import flask from "../assets/img/flask.png";
import javalogo from "../assets/img/javalogo.png";
import ollama from "../assets/img/ollama.png";
import python from "../assets/img/python.png";
import sql from "../assets/img/sql.png";
import watsonx from "../assets/img/watsonx.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "CodeCraft",
      description: "Revolutionising Software Engingeering with AI",
      imgUrl: codecraft,
      details: "CodeCraft details...",
    },
    {
      title: "AI Agents For Code Review & Security",
      description: "Using Open Source Models",
      imgUrl: keysentinel,
      details: "AI Agents For Code Review & Security details...",
    },
    {
      title: "Spotify4VSCode",
      description: "A VSCode Extension to see & control Spotify activity",
      imgUrl: spotify4vsc,
      details: "Spotify4VSCode details...",
    },
  ];

  const goals = [
    {
      title: "Frontend Development",
      description: "See more...",
      imgUrl: react,
      details: "Frontend dev details...",
    },
    {
      title: "GoLang Experience",
      description: "See more...",
      imgUrl: golang,
      details: "GoLang details...",
    },
    {
      title: "Explore Linux",
      description: "See more...",
      imgUrl: mint,
      details: "Linux details...",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Goals</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      {/* Projects tab */}
                      <Tab.Pane eventKey="first">
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Row>
                          {projects.map((project, index) => (
                            <Card key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Goals tab */}
                      <Tab.Pane eventKey="second">
                        <h2>Goals</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Row>
                          {goals.map((goal, index) => (
                            <Card key={index} {...goal} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* Experience tab */}
                      <Tab.Pane eventKey="third">
                        <h2>Experience</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Row className="justify-content-center">
                          <Col xs={6} md={3}>
                            <img src={dockerlogo} alt="Docker" className="experience-logo" />
                          </Col>
                          <Col xs={6} md={3}>
                            <img src={flask} alt="Flask" className="experience-logo" />
                          </Col>
                          <Col xs={6} md={3}>
                            <img src={javalogo} alt="Java" className="experience-logo" />
                          </Col>
                          <Col xs={6} md={3}>
                            <img src={ollama} alt="Ollama" className="experience-logo" />
                          </Col>
                          <Col xs={6} md={3}>
                            <img src={python} alt="Python" className="experience-logo" />
                          </Col>
                          <Col xs={6} md={3}>
                            <img src={sql} alt="SQL" className="experience-logo" />
                          </Col>
                          <Col xs={6} md={3}>
                            <img src={watsonx} alt="WatsonX" className="experience-logo" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}