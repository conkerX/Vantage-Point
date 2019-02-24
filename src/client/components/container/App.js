import React, { Component } from "react";
import ReactDOM from "react-dom";

// import Start from "../presentational/Start";
import Header from "../presentational/Header";
// import Login from "../presentational/Login";
import Main from "../presentational/Main";
import "normalize.css";
import "../../app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
