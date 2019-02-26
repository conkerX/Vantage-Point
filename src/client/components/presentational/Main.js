import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../container/Home";
import Questions from "./Questions";
import About from "./About";

const Main = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/questions"
          render={routeProps => (
            <Questions
              {...routeProps}
              pointer={props.pointer}
              questions={props.questions}
              nextQuestion={props.nextQuestion}
              backQuestion={props.backQuestion}
            />
          )}
        />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default Main;
