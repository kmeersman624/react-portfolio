import React from "react";
import "../App.css";

function Header() {
  return (
    <div>
      <img className="header-img" alt="header" src={process.env.PUBLIC_URL + "/img/headerimg.PNG"} fluid />
    </div>
  );
}

export default Header;
