import React, { Component } from "react";
import ReactDOM from "react-dom";

import Start from "../presentational/Start";
import Header from "../presentational/Header";
import Login from "../presentational/Login";

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
        <div className="column-container">
          <div className="left-side-container">
            <Start />
          </div>
          <div className="right-side-container">
            <div className="grid-container">
              <Login />
              <Login />
              <Login />
              <Login />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
