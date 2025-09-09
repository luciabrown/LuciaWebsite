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
import c from "../assets/img/c.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "CodeCraft",
      description: "Revolutionising Software Engingeering with AI",
      imgUrl: codecraft,
      details: <>
        <p>
          CodeCraft is a project that uses a multi-model, user-friendly AI framework to help the amateur developer develop better.👩🏻‍💻
        </p>
        <p>
          I mostly worked on the Backend team of this project. I got great exposure to the Python Flask framework, "forgot password" functionality and AI models. 🔐
        </p>
        <p>
          This project was a part of Trinity College Dublin's Software Engineering (SwEng) program. I had the honor of working under great mentors from IBM.🏢
        </p>
        <p>
          This project won the SwEng awards! We were shortlisted as the Top 10 and had a panel of industry-leaders as judges who declared CodeCraft the best of the projects. 🥇
        </p>
        <p>
          It was more so the teamwork and agility we showed which won us the award. We were praised for how we restructured teams to deal with constraints, and how we went above and beyond the original scope of the project.💪🏻
        </p>
      </>
    },
    {
      title: "AI Agents For Code Review & Security",
      description: "Using Open Source Models",
      imgUrl: keysentinel,
      details: <>
        <p>
          AI Agents for Code Review & Security Using Open Source Models (mouthful😐) was my second project for SwEng. This time I got to act as the Team Lead (and also contributed to the backend). So I felt right at home.🏠
        </p>
        <p>
          The key difference between this project and CodeCraft is that this project had to be agentic. We created different AI agents for this - one that would read the input, search the web, create an output document with recommendations, etc. 📄
        </p>
        <p>
          We had to become exposed to far more AI related topics such as Retrieval Augmented Generation (RAG), chunking, and using Ollama for the LLMs.🦙
        </p>
        <p>
          I spent much more time on this project creating rigorous documentation and working on DevOps features such as dockerising the application, hosting it on a Hetzner server and managing a domain using Porkbun. 🐽
        </p>
        <p>
          I'm really grateful for the DevOps exposure that this project gave me because I've been able to integrate what I know about dockerising and deployment into my personal projects. 🛜
        </p>
      </>
    },
    {
      title: "Spotify4VSCode",
      description: "A VSCode Extension to see & control Spotify activity",
      imgUrl: spotify4vsc,
      details: <>
        <p>
        (If you don't count this website), Spotify4VSCode is my most recent project. I started this project as a way to develop in GoLang for the first time and also create something ✨real✨.
        </p>
        <p>
        And by that I mean something hosted myself and didn't have to be handed off to a client.🧐
        </p>
        <p>
        Spotify's API is a pain!😭 But I was still able to create a lightweight, subtle extension for VSCode which allows you to see what song you're listening to and change the song without having to leave the IDE.🩵
        </p>
        <p>
          I really enjoyed creating this project and it has given me more confidence to step outside the Python world and try developing in another language.🚦
        </p>
        <h6>P.S. my next project is still going to be in Python though...🐍</h6>
      </>
    },
  ];

  const goals = [
    {
      title: "Frontend Development",
      description: "See more...",
      imgUrl: react,
      details:<>
        <p>
          I've always preferred Backend Development. It's just always been more interesting to me.
        </p>
        <p>
          As part of CodeCraft, I briefly joined the Frontend team to help ease their capacity issues and probably did more harm than good 😅.
        </p>
        <p>
          But I understand that Frontend development is important (plus I have the utmost respect for frontend devs trying to balance so many elements!).
        </p>
        <p>
          I was also longggg overdue for my own personal website so I decided to find a template that I liked and create on React.
        </p>
        <p>
          My finished product that you're seeing has ended up differing quite a lot from the original template. Which I'm super happy about because it allowed me to not be overly-reliant on the template and to show some personality here! 🌹
        </p>
      </>
    },
    {
      title: "GoLang Experience",
      description: "See more...",
      imgUrl: golang,
      details: <>
        <p>
          I love Python as much as the next person.🐍
        </p>
        <p>
          But I got to a stage where I just had to learn a new language to keep my brain fresh.🧠
        </p>
        <p>
          It took me a while to decide which language I wanted to learn. And a few scrapped projects later I finally settled on Go.🦫
        </p>
        <p>
          I started by doing some LeetCodes (🙄) in GoLang to understand the fundamentals.
        </p>
        <p>
          Then afterwards I create an extension for VSCode with a GoLang backend which controls and displays the Spotify API of what you're listening to!🎧
        </p>
      </>
    },
    {
      title: "Explore Linux",
      description: "See more...",
      imgUrl: mint,
      details: <>
        <p>
          I haven't actually started my Linux journey yet...
        </p>
        <p>
          It's been in the back of my mind for some time. I'm super interested in cybersecurity after taking an advanced computer networks class in university. And Linux knowledge is kind of a non-negotiable for that area which I simply lack. 🐧
        </p>
        <p>
          I've decided that when I do eventually get brave enough to banish Windows 11 from my machine 🪟, my distro of choice will be Mint 🍃. From my understanding, it's beginner friendly but still powerful. 
        </p>
        <p>
          Low-level programming is a true weak-spot of mine. And I hope to correct that by practice. And Linux will be my exploratory, learning stage.⬇️
        </p>
      </>
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
                        <p>Here is a list of some of my most recent projects that I'm most proud of! ✨</p>
                        <Row>
                          {projects.map((project, index) => (
                            <Card key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Goals tab */}
                      <Tab.Pane eventKey="second">
                        <h2>Goals</h2>
                        <p>I have a number of short-term and medium-term goals that I want to explore and achieve as a developer!</p>
                        <p>There is simply too many to put it all here - but see below!</p>
                        <p>The first two are in progress and I'm still learning.</p>
                        <Row>
                          {goals.map((goal, index) => (
                            <Card key={index} {...goal} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* Experience tab */}
                      <Tab.Pane eventKey="third">
                        <h2>Experience</h2>
                        <p>My main areas of experience come from my university work and my employment as a data analyst.</p>
                        <p>🛠️ I have strong project management skills and had the opportunity to lead my Trinity College Software Engineering group early this year (psst.. see the Projects tab).</p>
                        <p>💼 My analytical skills include proficiency in Microsoft Excel and PowerPoint, IBM Maximo, Oracle SQL Developer and with the end-to-end project lifecycle.</p>
                        <p>💧 As a data analyst, I have worked on two large projects with Nucleo. An extension of an existing work order, contracts and payment framework. And a data cleanse project for client Uisce Éireann.</p>
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
                          <Col xs={6} md={3}>
                            <img src={c} alt="c" className="experience-logo" />
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