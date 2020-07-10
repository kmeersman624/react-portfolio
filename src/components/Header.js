import React from "react";
import "../App.css";
import headerimg from "../img/headerimg.png"

function Header() {
  return (
    <div>
      <img className="header-img" alt="header" src={headerimg} fluid />
    </div>
  );
}

export default Header;
