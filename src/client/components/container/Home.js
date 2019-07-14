import React, { Component } from "react";
import ReactDOM from "react-dom";

import Start from "../presentational/Start";
import Mission from "../presentational/Mission";
import Header from "../presentational/Header";
import Login from "../presentational/Login";
import Planner from "../presentational/Planner";
import Launch from "../presentational/Launch";
import Disclaimer from "../presentational/Disclaimer";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.props.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.handleScroll);
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-logo-container">VANTAGE POINT</div>
        <Mission />
        <Launch />
        <Disclaimer />
      </div>
    );
  }
}

export default Home;
