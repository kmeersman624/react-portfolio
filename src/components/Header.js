import React from "react";
import "../App.css";
import headerimg from "../img/headerimg.png";
import linkedicon from "../img/linkedin-icon.png";
import giticon from "../img/github-icon.jpg";

export default function Header() {
  return (
    <div className="container-fluid bgImage containerHeight">
      <div className="row text-center">
        <div className="col height">
          <a className="project-btn rounded height h4" href="#portfolio">PROJECTS</a>
        </div>
      </div>

      <div className="row">
        <div className="col-4 col-m-5"></div>
        <div className="col-2 col-m-1 text-center mb-5">
          <a href="https://www.linkedin.com/in/kate-meersman-2a66a2155/">
            <img src={linkedicon} alt="" height="50px" />
          </a>
        </div>
        <div className="col-2 col-m-1 text-center">
          <a href="https://github.com/kmeersman624">
            <img src={giticon} alt="" height="50px" />
          </a>
        </div>
        <div className="col-4 col-m-5"></div>
      </div>
    </div>
  );
}
