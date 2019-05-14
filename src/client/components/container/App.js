import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "../presentational/Header";
import Main from "../presentational/Main";
import "normalize.css";
import "../../app.css";

class App extends Component {
  constructor() {
    super();

    // change scale to hold objects to allow for better css control
    // ex: { val: 7, isSelected: false }

    this.state = {
      scrolling: false,
      pointer: 0,
      questions: [
        {
          question: "This is question 1.",
          whereIAm: {
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
          whereIAm: {
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
          whereIAm: {
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
    this.scaleMouseEnter = this.scaleMouseEnter.bind(this);
    this.scaleMouseLeave = this.scaleMouseLeave.bind(this);
    this.handleScaleClick = this.handleScaleClick.bind(this);
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

  scaleMouseEnter(e, data) {
    e.target.classList.add("is-hovered");
  }

  scaleMouseLeave(e, data) {
    e.target.classList.remove("is-hovered");
  }

  handleScaleClick(e) {
    let questions = this.state.questions;
    let pointer = this.state.pointer;
    let answer = e.target.getAttribute("data-answer");

    questions[pointer][answer].answer = Number(e.target.innerHTML);

    console.log(questions);

    e.target.classList.add("selected");

    this.setState({
      questions: questions
    });
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
          isHovered={this.state.isHovered}
          scaleMouseEnter={this.scaleMouseEnter}
          scaleMouseLeave={this.scaleMouseLeave}
          handleScaleClick={this.handleScaleClick}
          nextQuestion={this.nextQuestion}
          backQuestion={this.backQuestion}
        />
      </div>
    );
  }
}

export default App;
