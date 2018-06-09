import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Main from '../presentational/Main';
import MyNavbar from '../presentational/MyNavbar';
import HomeImage from '../presentational/HomeImage';
import Blurb from '../presentational/Blurb';
import Stories from '../presentational/Stories';
import Resume from '../presentational/Resume';
import Home from '../presentational/Home';


class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/stories" component={Stories} />
            <Route path="/resume" component={Resume} />
            <Redirect to="/" />
          </Switch>
          <MyNavbar />
        </div>
      </Router>
    );
  }
}

export default App;
