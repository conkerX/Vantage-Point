import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../presentational/Home';
import Stories from '../presentational/Stories';
import Resume from '../presentational/Resume';


const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/stories' component={Stories} />
      <Route path='/resume' component={Resume} />
    </Switch>
  )
}

export default Main;