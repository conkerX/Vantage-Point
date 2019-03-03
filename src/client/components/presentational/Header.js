import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.props.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.props.handleScroll);
  // }

  render() {
    return (
      <div
        className={
          this.props.scrolling ? "header-fixed scrolling" : "header-fixed"
        }
      >
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
  }
}

export default Header;
