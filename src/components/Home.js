import React from "react";
import "../App.css";
import katebw from "../img/katebw.jpg";
import { Row, Col, Image } from "react-bootstrap";

function Home() {
  return (
      <Row className="bio fluid m-5 bg-light">
        <Col xs={12} className="about">
          <h1>About Me</h1>
        </Col>
          <Col sm={2} className="profile text-md-left text-center">
            <Image className="kateimg" alt="kate" src={katebw} fluid />
          </Col>
          <Col sm={6} className="about text-md-left text-center h5">
            I was born and raised in Colorado, which is where I continue to
            reside, after a few stints in Maui, Calgary, and Vail. I originally
            went to college for hospitality, focusing on a career in Event Sales
            and Services. I have a recently found a new passion in web
            development with a brand new set of skills as a full-stack
            developer. I am highly motivated through my relentless drive and I
            love the satisfaction of conquering a difficult task. Please check
            out my project portfolio for recent applications I have been working
            on. Reach out directly for more information!
          </Col>
          <Col sm={4}/>
          <Col>
            <h5>
              <b>Technical Skills:</b>
            </h5>
            Computer Science applied to JavaScript:{" "}
            <i>Design Patterns • Algorithms</i>
            <br />
            <br />
            Browser Based Technologies:{" "}
            <i>
              HTML • CSS • JavaScript • jQuery • Responsive Design • Bootstrap •
              Handlebars{" "}
            </i>
            <br />
            Deployment: <i>Heroku • Git</i>
            <br />
            <br />
            Databases: <i>MySQL • MongoDB</i>
            <br />
            <br />
            Server-Side Development:{" "}
            <i>
              Express • Security and Session Storage • User Authentication •
              MERN Stack (MongoDB, Express.js, React.js, Node.js)
            </i>
            <br />
            <br />
            Quality Assurance: <i>Writing Tests</i>
            <br />
            <br />
            Internet Marketing: <i>Semantic HTML</i>
            <br />
          </Col>
        </Row>
  );
}

export default Home;
