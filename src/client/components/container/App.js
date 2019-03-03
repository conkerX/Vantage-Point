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
          whereIam: {
            scale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            answer: 0
          },
          whereIThinkIAmGoing: {
            scale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            answer: 0
          },
          whereIThoughtIWasGoingToBe: {
            scale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            answer: 0
          },
          whereIAmHeading: {
            scale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            answer: 0
          }
        },
        {
          question: "This is question 2.",
          whereIam: {
            scale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            answer: 0
          },
          whereIThinkIAmGoing: {
            scale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            answer: 0
          },
          whereIThoughtIWasGoingToBe: {
            scale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            answer: 0
          },
          whereIAmHeading: {
            scale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            answer: 0
          }
        },
        {
          question: "This is question 3.",
          whereIam: {
            scale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            answer: 0
          },
          whereIThinkIAmGoing: {
            scale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            answer: 0
          },
          whereIThoughtIWasGoingToBe: {
            scale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            answer: 0
          },
          whereIAmHeading: {
            scale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            answer: 0
          }
        }
      ]
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.backQuestion = this.backQuestion.bind(this);
  }

  handleScroll(event) {
    console.log("scroll -->", window.ScrollY);

    if (window.scrollY) {
      this.setState({
        scrolling: !this.state.scrolling
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
          handleScroll={this.handleScroll}
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
