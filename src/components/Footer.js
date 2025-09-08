import { Container, Row, Col } from "react-bootstrap";
import flowers from '../assets/img/newFlower.svg';
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import gitlab from "../assets/img/gitlab.svg";
import gmail from "../assets/img/gmail.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={flowers} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href='https://www.linkedin.com/in/luciabrown17/'><img src={linkedin} alt="LinkedIn"/></a>
                <a href='https://github.com/luciabrown'><img src={github} alt="GitHub"/></a>
                <a href='https://gitlab.scss.tcd.ie/brownlu'><img src={gitlab} alt="GitLab"/></a>
                <a href="mailto:luciabrown1015@gmail.com?cc=brownlu@tcd.ie&subject=%F0%9F%91%8B"><img src={mail} alt="Mail"/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}