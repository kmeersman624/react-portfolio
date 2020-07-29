import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
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
    <div className="project-container" id="portfolio">
      <div className="portfolio-grid">
        <div className="headline-div">
          <h1 className="about-hed">
            MY <span className="heavy"> WORK </span>
          </h1>
        </div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={choogle} />
          <Card.Body>
            <Card.Title>Choogle</Card.Title>
            <Card.Text>
              Secure location to reference and save favorite documents and cheat
              sheets for web development. Built with MERN Stack, React-Router,
              Materialize CSS.
            </Card.Text>
            <div className="card-links">
              <div className="github-link">
                <a href="https://github.com/kmeersman624/Choogle"> GitHub </a>
              </div>
              <div className="online-link">
                <a href="https://chooglefoo.herokuapp.com/login"> Live </a>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={menu} />
          <Card.Body>
            <Card.Title>COVID Date Night</Card.Title>
            <Card.Text>
              Application uses JavaScript and jQuery to make AJAX calls to 3rd
              party APIs utilizing Foudation CSS framework.
            </Card.Text>
            <div className="card-links">
              <div className="github-link">
                <a href="https://kmeersman624.github.io/Project-1/"> GitHub </a>
              </div>
              <div className="online-link">
                <a href="https://kmeersman624.github.io/Project-1/"> Live </a>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={login} />
          <Card.Body>
            <Card.Title>Open Sesame</Card.Title>
            <Card.Text>
              User can utilize Open Sesame as a secure location to store all
              usernames and passwords. Built with JavaScript, Handlbars, jQuery,
              Sequelize, Bootstrap CSS.
            </Card.Text>
            <div className="card-links">
              <div className="github-link">
                <a href="https://github.com/MarcusTravis/Open-Sesame">
                  {" "}
                  GitHub{" "}
                </a>
              </div>
              <div className="online-link">
                <a href="https://safe-badlands-31285.herokuapp.com/"> Live </a>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={directory} />
          <Card.Body>
            <Card.Title>React Employee Directory</Card.Title>
            <Card.Text>
              This is an employee directory with React. It breaks up your
              application's UI into components, manages component state, and
              responds to user events.
            </Card.Text>
            <div className="card-links">
              <div className="github-link">
                <a href="https://github.com/kmeersman624/React-Employee-Directory">
                  {" "}
                  GitHub{" "}
                </a>
              </div>
              <div className="online-link">
                <a href="https://kmeersman624.github.io/React-Employee-Directory/">
                  {" "}
                  Live{" "}
                </a>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={budget} />
          <Card.Body>
            <Card.Title>Online/Offline Budget</Card.Title>
            <Card.Text>
              PWA aplication built with NodeJS where the user can add expenses
              and deposits to their budget with or without a connection. When
              entering transactions offline, the total populates when brought
              back online.
            </Card.Text>
            <div className="card-links">
              <div className="github-link">
                <a href="https://github.com/kmeersman624/Online-Offline-Budget-Trackers">
                  {" "}
                  GitHub{" "}
                </a>
              </div>
              <div className="online-link">
                <a href="https://secure-eyrie-61403.herokuapp.com/"> Live </a>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={workout} />
          <Card.Body>
            <Card.Title>Exercise Tracker</Card.Title>
            <Card.Text>
              This is a fitness tracker application allows the user to view,
              create, and track daily workouts. It uses a Mongo database with a
              Mongoose schema and handles routes with Express.
            </Card.Text>
            <div className="card-links">
              <div className="github-link">
                <a href="https://github.com/kmeersman624/Workout-Tracker">
                  {" "}
                  GitHub{" "}
                </a>
              </div>
              <div className="online-link">
                <a href="https://murmuring-scrubland-28081.herokuapp.com/">
                  {" "}
                  Live{" "}
                </a>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
