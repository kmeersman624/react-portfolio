import React from "react";
import "../App.css";
import headerimg from "../img/headerimg.png";

function Header() {
  return (
    <div className="header-container">
      <img className="header-img" alt="header" src={headerimg} fluid />
      <div className="header-btn">
        <a href="#portfolio" className="hdlink btn btn-default">
          PROJECTS
        </a>
      </div>
      <div className="git-btn">
        <a className="links" href="https://github.com/kmeersman624">
          <i className="fab fa-github"></i> GitHub Profile
        </a>
      </div>
      <div className="linked-btn">
        <a
          class="links"
          href="https://www.linkedin.com/in/kate-meersman-2a66a2155/"
        >
          <i className="fab fa-linkedin"></i> LinkedIn Profile
        </a>
      </div>
    </div>
  );
}

export default Header;
