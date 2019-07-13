import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../container/Home";
import Questions from "./Questions";
import RadarChart from "./RadarChart";
import About from "./About";

const Main = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={routeProps => <Home {...routeProps} />} />
        <Route
          path="/questions"
          render={routeProps => (
            <Questions
              {...routeProps}
              pointer={props.pointer}
              questions={props.questions}
              handleScaleClick={props.handleScaleClick}
              scaleMouseEnter={props.scaleMouseEnter}
              scaleMouseLeave={props.scaleMouseLeave}
              nextQuestion={props.nextQuestion}
              backQuestion={props.backQuestion}
              calculateRadarChart={props.calculateRadarChart}
            />
          )}
        />
        <Route
          path="/radar-chart"
          render={routeProps => (
            <RadarChart
              {...routeProps}
              labels={props.labels}
              data={props.data}
              chartOptions={props.chartOptions}
            />
          )}
        />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default Main;

// <Home
// handleScroll={props.handleScroll}
