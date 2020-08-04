import React from "react";
import "../App.css";
import { Card, CardDeck, Container, Col, Row } from "react-bootstrap";
import menu from "../img/menu.png";
import login from "../img/login.PNG";
import directory from "../img/directory.PNG";
import budget from "../img/budget.PNG";
import choogle from "../img/choogle.PNG";
// import burger from "../img/eatda.PNG";
// import planner from "../img/workdayscheduler.PNG";
import workout from "../img/dashboard.PNG";

function Projects() {
  return (
    <Container className="project-container" id="portfolio">
      <Row className="portfolio-grid">
        <Row className="headline-div">
          <h1 className="about-hed">
            MY <span className="heavy"> WORK </span>
          </h1>
        </Row>
        <CardDeck className="deck">
          <Card style={{ width: "18rem" }}>
              <Card.Title>Choogle</Card.Title>
            <Card.Img variant="top" src={choogle} />
            <Card.Body>
              <Card.Text>
                Secure location to reference and save URLs and
                cheat sheets for web development. Built with MERN Stack, React-Router, Materialize CSS.
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
          <Card style={{ width: "18rem" }}>
              <Card.Title>COVID Date Night</Card.Title>
            <Card.Img variant="top" src={menu} />
            <Card.Body>
              <Card.Text>
                A recipe and movie random generator that uses JavaScript and jQuery to make AJAX calls to 3rd party APIs utilizing Foudation CSS framework.
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
          <Card style={{ width: "18rem" }}>
              <Card.Title>Open Sesame</Card.Title>
            <Card.Img variant="top" src={login} />
            <Card.Body>
              <Card.Text>
                A secure location to store all usernames and passwords. Built with JavaScript, Handlbars,
                jQuery, Sequelize, Bootstrap CSS.
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
          <Card style={{ width: "18rem" }}>
              <Card.Title>React Directory</Card.Title>
            <Card.Img variant="top" src={directory} />
            <Card.Body>
              <Card.Text>
                Built with React, this employee directory breaks up application's UI into components, manages component state, and
                responds to user events.
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
          <Card style={{ width: "18rem" }}>
              <Card.Title>Online/Offline Budget</Card.Title>
            <Card.Img variant="top" src={budget} />
            <Card.Body>
              <Card.Text>
                PWA aplication built with NodeJS where the user can add expenses and deposits with or without a connection.
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
          <Card style={{ width: "18rem" }}>
              <Card.Title>Exercise Tracker</Card.Title>
            <Card.Img variant="top" src={workout} />
            <Card.Body>
              <Card.Text>
                This application allows the user to view/create/track daily workouts. Built with MongoDB, Mongoose, and Express.
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
        </CardDeck>
      </Row>
    </Container>
  );
}

export default Projects;
