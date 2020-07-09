import React from "react";
import "../App.css";

function Projects() {
  return (
    <div>
      <div className="container m-5 bg-light">
        <header className="text-info">
          <h1>Portfolio</h1>
        </header>
        <div className="project-images">
          <div className="col-sm-6">
            <a href="https://kmeersman624.github.io/Project-1/">
              <img
                src="/img/menu.png"
                alt="Image of date night generator"
                className="img-thumbnail thumbnail"
              />
            </a>
          </div>
          <div className="col-sm-6 mt-3">
            <a href="https://safe-badlands-31285.herokuapp.com/">
              <img
                src="/img/login.png"
                alt="Image of login page for password database"
                className="img-thumbnail thumbnail"
              />
            </a>
          </div>
          <div class="col-sm-6 mt-3">
            <a href="https://kmeersman624.github.io/React-Employee-Directory/">
              <img
                class="thumbnail"
                src="/img/directory.PNG"
                alt="Image of directory"
                class="img-thumbnail thumbnail"
              />
            </a>
          </div>
          <div class="col-sm-6 mt-3">
            <a href="https://secure-eyrie-61403.herokuapp.com/">
              <img
                src="/img/budget.PNG"
                alt="Image of budget"
                class="img-thumbnail thumbnail"
              />
            </a>
          </div>
          <div class="col-sm-6 mt-3">
            <a href="https://sleepy-plateau-19044.herokuapp.com/burgers">
              <img
                src="/img/eatda.PNG"
                alt="Image of eat da burger"
                class="img-thumbnail thumbnail"
              />
            </a>
          </div>
          <div class="col-sm-6 mt-3">
            <a href="https://kmeersman624.github.io/Work-Day-Scheduler/">
              <img
                src="/img/workdayscheduler.PNG"
                alt="Image of day planner"
                class="img-thumbnail thumbnail"
              />
            </a>
          </div>
          <div class="col-sm-6 mt-3">
            <a href="https://murmuring-scrubland-28081.herokuapp.com/">
              <img
                src="/img/dashboard.PNG"
                alt="Image of workout dashboard"
                class="img-thumbnail thumbnail"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
