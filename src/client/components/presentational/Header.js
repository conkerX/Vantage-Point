import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-fixed">
      <div className="header-title-container">
        <h1>Growth Gauge</h1>
      </div>
      <div className="header-link-container">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
