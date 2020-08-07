import React from "react";
import "../App.css";
import headerimg from "../img/headerimg.png";
import { Container, Row, Col, Image } from "react-bootstrap";


function Header() {
  return (
    <Row className="header-container text-center" fluid>
      <Image className="header-img" alt="header" src={headerimg} fluid />
        <Col className="header-btn rounded p-2">
        <a href="#portfolio" className="hdlink btn btn-default">
          PROJECTS
        </a>
        </Col>
        <Col md={1} className="git-btn rounded p-1">
        <a className="links" href="https://github.com/kmeersman624">
          <i className="fab fa-github"></i> GitHub
        </a>
        </Col>
      <Col md={1} className="linked-btn rounded p-1">
        <a
          className="links"
          href="https://www.linkedin.com/in/kate-meersman-2a66a2155/"
          >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        </Col>
    </Row>
  );
}

export default Header;
