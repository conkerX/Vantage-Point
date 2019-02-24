import React, { Component } from "react";
import ReactDOM from "react-dom";

import Start from "../presentational/Start";
import Header from "../presentational/Header";
import Login from "../presentational/Login";
// import Main from "../presentational/Main";
import "normalize.css";
import "../../app.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
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
