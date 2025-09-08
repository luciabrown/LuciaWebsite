import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Projects } from './Projects';
import flowers from '../assets/img/newFlower.svg';
import linkedin from '../assets/img/linkedin.svg';
import mail from '../assets/img/gmail.svg';
import github from '../assets/img/github.svg';
import gitlab from '../assets/img/gitlab.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        
        <Navbar.Brand href="#home">
            <img src={flowers} alt = "Logo"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>


        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#goals" className={activeLink === 'goals' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('goals')}>Goals</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href='https://www.linkedin.com/in/luciabrown17/'><img src={linkedin} alt="LinkedIn"/></a>
                <a href='https://github.com/luciabrown'><img src={github} alt="GitHub"/></a>
                <a href='https://gitlab.scss.tcd.ie/brownlu'><img src={gitlab} alt="GitLab"/></a>
                <a href="mailto:luciabrown1015@gmail.com?cc=brownlu@tcd.ie&subject=%F0%9F%91%8B"><img src={mail} alt="Mail"/></a>
            </div>
            <button className="contact" onClick={()=>console.log("contact")}><span>Get in touch!</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}