import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "../presentational/Header";
import Main from "../presentational/Main";
import "normalize.css";
import "../../app.css";

import { questions } from "../../data/questionnaire";
import { labels } from "../../data/labels";
import { data, chartOptions } from "../../data/data";

import { calculateAnswer, adjustAnswer } from "../../helpers/helpers";

class App extends Component {
  constructor() {
    super();

    this.state = {
      scrolling: false,
      pointer: 0,
      questions: questions,
      labels: labels,
      data: data,
      chartOptions: chartOptions
    };

    // this.handleScroll = this.handleScroll.bind(this);
    this.scaleMouseEnter = this.scaleMouseEnter.bind(this);
    this.scaleMouseLeave = this.scaleMouseLeave.bind(this);
    this.handleScaleClick = this.handleScaleClick.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.backQuestion = this.backQuestion.bind(this);
    this.calculateRadarChart = this.calculateRadarChart.bind(this);
  }

  // handleScroll(event) {
  //   console.log("scroll -->", window.ScrollY);

  //   if (window.scrollY) {
  //     this.setState({
  //       scrolling: !this.state.scrolling
  //     });
  //   }
  // }

  scaleMouseEnter(e, data) {
    e.target.classList.add("is-hovered");
  }

  scaleMouseLeave(e, data) {
    e.target.classList.remove("is-hovered");
  }

  handleScaleClick(e) {
    // subtract current value and add new value from data
    let data = this.state.data;
    let questions = this.state.questions;
    let pointer = this.state.pointer;
    let question = e.target.getAttribute("data-answer");
    let currentAnswer = questions[pointer][question].answer;
    let selectedAnswer = Number(e.target.innerHTML);

    // using outter if statement to make sure selected answer isnt added more than once if same button is clicked twice
    if (!questions[pointer][question].scale[selectedAnswer - 1].isSelected) {
      if (currentAnswer === 0) {
        console.log("current answer is 0");
        // used when no answer has been given
        // set answer
        questions[pointer][question].answer = selectedAnswer;
        // toggle isSelected to true
        questions[pointer][question].scale[
          selectedAnswer - 1
        ].isSelected = true;
      } else if (currentAnswer !== 0) {
        // used when answer is adjusted
        // what was the previous answer
        // change isSelected to false
        console.log(currentAnswer - 1);
        questions[pointer][question].scale[
          currentAnswer - 1
        ].isSelected = false;

        // subtract previous answer from data
        adjustAnswer(currentAnswer, data, questions, pointer, question);

        // light up current
        console.log(selectedAnswer - 1);
        questions[pointer][question].scale[
          selectedAnswer - 1
        ].isSelected = true;
        //set answer
        questions[pointer][question].answer = selectedAnswer;
      }

      this.setState({
        questions: questions,
        data: calculateAnswer(
          selectedAnswer,
          data,
          questions,
          pointer,
          question
        )
      });
    }

    console.log(questions);
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

  calculateRadarChart() {
    console.log("onClick -> calculateRadarChart");
    const data = this.state.data;

    const whereIThoughtIWasGoingToBeData = data.datasets[0].data.map(num => {
      return num / 10;
    });

    const whereIAmData = data.datasets[1].data.map(num => {
      return num / 10;
    });

    const whereIThinkIAmGoingData = data.datasets[2].data.map(num => {
      return num / 10;
    });

    data.datasets[0].data = whereIThoughtIWasGoingToBeData;
    data.datasets[1].data = whereIAmData;
    data.datasets[2].data = whereIThinkIAmGoingData;

    this.setState({
      data: data
    });
  }

  render() {
    return (
      <Main
        pointer={this.state.pointer}
        questions={this.state.questions}
        labels={this.state.labels}
        data={this.state.data}
        chartOptions={this.state.chartOptions}
        isHovered={this.state.isHovered}
        scaleMouseEnter={this.scaleMouseEnter}
        scaleMouseLeave={this.scaleMouseLeave}
        handleScaleClick={this.handleScaleClick}
        nextQuestion={this.nextQuestion}
        backQuestion={this.backQuestion}
        calculateRadarChart={this.calculateRadarChart}
      />
    );
  }
}

export default App;

// <Header
// handleScroll={this.handleScroll}
// scrolling={this.state.scrolling}
// />

// <Main
// handleScroll={this.handleScroll}
