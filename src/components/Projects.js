import React from "react";
import "../App.css";
import menu from "../img/menu.png";
import login from "../img/login.PNG";
import directory from "../img/directory.PNG";
import budget from "../img/budget.PNG";
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
          <div className="card-holder">
            <div className="card">
              <div className="card-front">
                <div className="card-title">
                  <h5>Covid Date Night</h5>
                </div>
                <div className="project-image">
                  <img
                    src={menu}
                    alt="date night generator"
                    className="project-image"
                  />
                </div>
                <div className="card-links">
                  <div className="github-link">
                <a href="https://kmeersman624.github.io/Project-1/"> GitHub </a>
                </div>
                <div className="online-link">
                  <a href="https://kmeersman624.github.io/Project-1/"> Live </a>
                </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-front">
                <div className="card-title">
                  <h5>Open Sesame</h5>
                </div>
                <div className="project-image">
                <img
                src={login}
                alt="login page for password database"
                className="project-image"
              />
                </div>
                <div className="card-links">
                  <div className="github-link">
                <a href="https://github.com/MarcusTravis/Open-Sesame"> GitHub </a>
                </div>
                <div className="online-link">
                  <a href="https://safe-badlands-31285.herokuapp.com/"> Live </a>
                </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-front">
                <div className="card-title">
                  <h5>React Employee Directory</h5>
                </div>
                <div className="project-image">
                <img
                src={directory}
                alt="directory"
                className="project-image"
              />
                </div>
                <div className="card-links">
                  <div className="github-link">
                <a href="https://github.com/kmeersman624/React-Employee-Directory"> GitHub </a>
                </div>
                <div className="online-link">
                <a href="https://kmeersman624.github.io/React-Employee-Directory/"> Live </a>
                </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-front">
                <div className="card-title">
                  <h5>Online/Offline Budget</h5>
                </div>
                <div className="project-image">
                <img
                src={budget}
                alt="budget"
                className="project-image"
              />
                </div>
                <div className="card-links">
                  <div className="github-link">
                <a href="https://github.com/kmeersman624/Online-Offline-Budget-Trackers"> GitHub </a>
                </div>
                <div className="online-link">
                  <a href="https://secure-eyrie-61403.herokuapp.com/"> Live </a>
                </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-front">
                <div className="card-title">
                  <h5>Exercise Tracker</h5>
                </div>
                <div className="project-image">
                <img
                src={workout}
                alt="workout dashboard"
                className="img-thumbnail thumbnail"
              />
                </div>
                <div className="card-links">
                  <div className="github-link">
                <a href="https://github.com/kmeersman624/Workout-Tracker"> GitHub </a>
                </div>
                <div className="online-link">
                  <a href="https://murmuring-scrubland-28081.herokuapp.com/"> Live </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Projects;
