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
      scrolling: false,
      pointer: 0,
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

    this.handleScroll = this.handleScroll.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.backQuestion = this.backQuestion.bind(this);
  }

  handleScroll(event) {
    if (window.scrollY) {
      this.setState({
        scrolling: true
      });
    }
  }

  nextQuestion() {
    this.setState((state, props) => {
      if (state.pointer + 1 > state.questions.length - 1) {
        console.log("pointer is greater than length");
        return;
      } else {
        return {
          pointer: state.pointer + 1
        };
      }
    });
  }

  backQuestion() {
    this.setState((state, props) => {
      if (state.pointer - 1 < 0) {
        console.log("pointer is less than length");
        return;
      } else {
        return {
          pointer: state.pointer - 1
        };
      }
    });
  }

  render() {
    return (
      <div>
        <Header
          handleScroll={this.handleScroll}
          scrolling={this.state.scrolling}
        />
        <Main
          pointer={this.state.pointer}
          questions={this.state.questions}
          nextQuestion={this.nextQuestion}
          backQuestion={this.backQuestion}
        />
      </div>
    );
  }
}

export default App;
