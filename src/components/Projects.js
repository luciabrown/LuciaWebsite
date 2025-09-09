import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Goals } from "./Goals";
import { Experience } from "./Experience";
import codecraft from "../assets/img/codecraft.jpg";
import keysentinel from "../assets/img/keySentinel.png";
import spotify4vsc from "../assets/img/spotify4vsc.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CodeCraft",
      description: "Revolutionising Software Engingeering with AI",
      imgUrl: codecraft,
    },
    {
      title: "AI Agents For Code Review & Security",
      description: "Using Open Source Models",
      imgUrl: keysentinel,
    },
    {
      title: "Spotify4VSCode",
      description: "A VSCode Extension to see & control Spotify activity",
      imgUrl: spotify4vsc,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {/* Projects tab */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          <h2>Projects</h2>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* Goals tab */}
                      <Tab.Pane eventKey="second">
                        <Goals />
                      </Tab.Pane>
                      {/* Experience tab */}
                      <Tab.Pane eventKey="third">
                        <Experience />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};