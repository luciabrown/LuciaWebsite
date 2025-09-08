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
              <a href="#"><img src={linkedin} alt="Icon" /></a>
              <a href="#"><img src={github} alt="Icon" /></a>
              <a href="#"><img src={gitlab} alt="Icon" /></a>
              <a href="#"><img src={gmail} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}