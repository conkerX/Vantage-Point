import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "../presentational/Header";
import Main from "../presentational/Main";
import "normalize.css";
import "../../app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [
        {
          question: "This is question 1.",
          whereIam: 0,
          whereIThinkIAmGoing: 0,
          whereIThoughtIWasGoingToBe: 0,
          whereIAmHeading: 0
        },
        {
          question: "This is question 2.",
          whereIam: 0,
          whereIThinkIAmGoing: 0,
          whereIThoughtIWasGoingToBe: 0,
          whereIAmHeading: 0
        },
        {
          question: "This is question 3.",
          whereIam: 0,
          whereIThinkIAmGoing: 0,
          whereIThoughtIWasGoingToBe: 0,
          whereIAmHeading: 0
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Main questions={this.state.questions} />
      </div>
    );
  }
}

export default App;
