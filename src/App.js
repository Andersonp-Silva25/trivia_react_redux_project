import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Ranking from './pages/Ranking';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/game" component={ Game } />
      <Route exact path="/Settings" component={ Settings } />
      <Route exact path="/ranking" component={ Ranking } />
      {/* <Route exact path="/aaa" component={  } /> */}
      <Route exact path="/feedback" component={ Feedback } />
      {/* <Route exact path="/aaa" component={  } /> */}
    </Switch>
  );
}
