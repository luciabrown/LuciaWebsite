import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import flowers from '../assets/img/newFlower.svg';
import linkedin from '../assets/img/linkedin.svg';
import mail from '../assets/img/gmail.svg';
import github from '../assets/img/github.svg';
import gitlab from '../assets/img/gitlab.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const switchProjectsTab = (tabEventKey) => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
    const tabButton = document.querySelector(
      `[data-rr-ui-event-key="${tabEventKey}"]`
    );
    if (tabButton) tabButton.click();
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>

        {/* Correct Brand */}
        <Navbar.Brand as={Link} to="/" onClick={() => onUpdateActiveLink('home')}>
          <img src={flowers} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            {/* Home */}
            <Nav.Link
              as={Link}
              to="/"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            {/* Projects */}
            <Nav.Link
              as={HashLink}
              smooth
              to="/#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => {
                onUpdateActiveLink("projects");
                switchProjectsTab("first");
              }}
            >
              Projects
            </Nav.Link>

            {/* Goals */}
            <Nav.Link
              as={HashLink}
              smooth
              to="/#projects"
              className={activeLink === "goals" ? "active navbar-link" : "navbar-link"}
              onClick={() => {
                onUpdateActiveLink("goals");
                switchProjectsTab("second");
              }}
            >
              Goals
            </Nav.Link>

            {/* Experience */}
            <Nav.Link
              as={HashLink}
              smooth
              to="/#projects"
              className={activeLink === "experience" ? "active navbar-link" : "navbar-link"}
              onClick={() => {
                onUpdateActiveLink("experience");
                switchProjectsTab("third");
              }}
            >
              Experience
            </Nav.Link>

            {/* Papers Page */}
            <Nav.Link
              as={Link}
              to="/college-papers"
              className={activeLink === "papers" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("papers")}
            >
              College Papers
            </Nav.Link>

          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/luciabrown17/'><img src={linkedin} alt="LinkedIn" /></a>
              <a href='https://github.com/luciabrown'><img src={github} alt="GitHub" /></a>
              <a href='https://gitlab.scss.tcd.ie/brownlu'><img src={gitlab} alt="GitLab" /></a>
              <a href="mailto:luciabrown1015@gmail.com?cc=brownlu@tcd.ie&subject=%F0%9F%91%8B"><img src={mail} alt="Mail" /></a>
            </div>
          </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
