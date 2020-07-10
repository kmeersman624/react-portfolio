import React from "react";
import "../App.css";
import menu from "../img/menu.png"
import login from "../img/login.PNG";
import directory from "../img/directory.PNG";
import budget from "../img/budget.PNG";
import burger from "../img/eatda.PNG";
import planner from "../img/workdayscheduler.PNG";
import workout from "../img/dashboard.PNG";


function Projects() {
  return (
    <div>
      <div className="container m-5 bg-light">
        <header className="text-black">
          <h1>Portfolio</h1>
        </header>
        <div className="project-images">
          <div className="col-sm-6">
            <a href="https://kmeersman624.github.io/Project-1/">
              <img
                src={menu}
                alt="date night generator"
                className="img-thumbnail thumbnail"
              />
            </a>
          </div>
          <div className="col-sm-6 mt-3">
            <a href="https://safe-badlands-31285.herokuapp.com/">
              <img
                src={login}
                alt="Ilogin page for password database"
                className="img-thumbnail thumbnail"
              />
            </a>
          </div>
          <div className="col-sm-6 mt-3">
            <a href="https://kmeersman624.github.io/React-Employee-Directory/">
              <img
                src={directory}
                alt="directory"
                className="img-thumbnail thumbnail"
              />
            </a>
          </div>
          <div className="col-sm-6 mt-3">
            <a href="https://secure-eyrie-61403.herokuapp.com/">
              <img
                src={budget}
                alt="budget"
                className="img-thumbnail thumbnail"
              />
            </a>
          </div>
          <div className="col-sm-6 mt-3">
            <a href="https://sleepy-plateau-19044.herokuapp.com/burgers">
              <img
                src={burger}
                alt="burger"
                className="img-thumbnail thumbnail"
              />
            </a>
          </div>
          <div className="col-sm-6 mt-3">
            <a href="https://kmeersman624.github.io/Work-Day-Scheduler/">
              <img
                src={planner}
                alt="day planner"
                className="img-thumbnail thumbnail"
              />
            </a>
          </div>
          <div className="col-sm-6 mt-3">
            <a href="https://murmuring-scrubland-28081.herokuapp.com/">
              <img
                src={workout}
                alt="workout dashboard"
                className="img-thumbnail thumbnail"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
