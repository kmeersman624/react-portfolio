import React from "react";
import "../App.css";
import { Card, CardDeck, Row, Col } from "react-bootstrap";
import menu from "../img/menu.png";
import login from "../img/login.PNG";
import directory from "../img/directory.PNG";
import budget from "../img/budget.PNG";
import choogle from "../img/choogle.PNG";
import flawless from "../img/flawlesspage.PNG";
// import burger from "../img/eatda.PNG";
// import planner from "../img/workdayscheduler.PNG";
import workout from "../img/dashboard.PNG";

function Projects() {
  return (
    <Row xs={12} className="projects" id="portfolio">
      <h1 className="about-hed">
        MY <span className="heavy"> WORK </span>
      </h1>
      <CardDeck className="deck">
        <Col md={4} xl={2}>
          <Card>
            <Card.Title>Choogle</Card.Title>
            <Card.Img variant="top" src={choogle} />
            <Card.Body>
              <Card.Text>
                Secure location to reference and save URLs and cheat sheets for
                web development. Built with MERN Stack, React-Router,
                Materialize CSS.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/kmeersman624/Choogle">
                GitHub
              </Card.Link>
              <Card.Link href="https://chooglefoo.herokuapp.com/login">
                Live
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} xl={2}>
          <Card>
            <Card.Title>Flawless Launches</Card.Title>
            <Card.Img variant="top" src={flawless} />
            <Card.Body>
              <Card.Text>
                Single scroll website for Flawless Launches-Profitable Products book by Dr. Eric C. Maass. Built with React and PHP. 
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/kmeersman624/Choogle">
                GitHub
              </Card.Link>
              <Card.Link href="https://chooglefoo.herokuapp.com/login">
                Live
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} xl={2}>
          <Card>
            <Card.Title>COVID Date Night</Card.Title>
            <Card.Img variant="top" src={menu} />
            <Card.Body>
              <Card.Text>
                A recipe and movie random generator that uses JavaScript and
                jQuery to make AJAX calls to 3rd party APIs utilizing Foudation
                CSS framework.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/kmeersman624/Project-1">
                GitHub
              </Card.Link>
              <Card.Link href="https://kmeersman624.github.io/Project-1/">
                Live
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} xl={2}>
          <Card>
            <Card.Title>Open Sesame</Card.Title>
            <Card.Img variant="top" src={login} />
            <Card.Body>
              <Card.Text>
                A secure location to store all usernames and passwords. Built
                with JavaScript, Handlbars, jQuery, Sequelize, Bootstrap CSS.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/MarcusTravis/Open-Sesame">
                GitHub
              </Card.Link>
              <Card.Link href="https://safe-badlands-31285.herokuapp.com/">
                Live
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} xl={2}>
          <Card>
            <Card.Title>React Directory</Card.Title>
            <Card.Img variant="top" src={directory} />
            <Card.Body>
              <Card.Text>
                Built with React, this employee directory breaks up the UI into
                components, manages component state, and responds to user
                events.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/kmeersman624/React-Employee-Directory">
                GitHub
              </Card.Link>
              <Card.Link href="https://kmeersman624.github.io/React-Employee-Directory/">
                Live
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} xl={2}>
          <Card>
            <Card.Title>Online/Offline Budget</Card.Title>
            <Card.Img variant="top" src={budget} />
            <Card.Body>
              <Card.Text>
                PWA aplication built with NodeJS where the user can add expenses
                and deposits with or without a connection.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/kmeersman624/Online-Offline-Budget-Trackers">
                GitHub
              </Card.Link>
              <Card.Link href="https://secure-eyrie-61403.herokuapp.com/">
                Live
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} xl={2}>
          <Card>
            <Card.Title>Exercise Tracker</Card.Title>
            <Card.Img variant="top" src={workout} />
            <Card.Body>
              <Card.Text>
                This application allows the user to view/create/track daily
                workouts. Built with MongoDB, Mongoose, and Express.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/kmeersman624/Workout-Tracker">
                GitHub
              </Card.Link>
              <Card.Link href="https://murmuring-scrubland-28081.herokuapp.com/">
                Live
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
      </CardDeck>
    </Row>
  );
}

export default Projects;
