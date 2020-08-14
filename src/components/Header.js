import React from "react";
import "../App.css";
import headerimg from "../img/headerimg.png";
import { Image, Jumbotron, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Jumbotron className="jumbo text-center">
      <Image className="header-img" alt="header" src={headerimg} fluid />
      <Row fluid>
        <Col className="header-btn rounded p-2">
          <a href="#portfolio" className="hdlink btn btn-default">
            PROJECTS
          </a>
        </Col>
      </Row>
      <Row fluid>
        <Col xs={1} className="git-btn rounded p-2">
          <a className="links" href="https://github.com/kmeersman624">
            <i className="fab fa-github"></i>
          </a>
        </Col>
        <Col xs={1} className="linked-btn rounded p-2">
          <a
            className="links"
            href="https://www.linkedin.com/in/kate-meersman-2a66a2155/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default Header;
