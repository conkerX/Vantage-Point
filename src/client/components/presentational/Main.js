import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../container/Home";
import Questions from "./Questions";
import About from "./About";

const Main = () => {
  return (
    <div>
      <Switch>
        <Home exact path="/" component={Home} />
        <Questions path="/questions" component={Questions} />
        <About path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default Main;
