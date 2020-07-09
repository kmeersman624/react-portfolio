import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand"href="/">KATE MEERSMAN</a>
          <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/projects">PROJECTS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">ABOUT</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
