import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

// Import components
import Home from '../Home/Home';
import About from '../About/About';
import NoPage from '../NoPage/NoPage';
import Sidebar from '../Sidebar/Sidebar'



class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div className="app">
              <Route path='*' component={ Sidebar }/>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames='slide'
                  timeout={1000}
                >
                  {/* Location props prevents from rendering
                  exiting component as new component on before unmount action*/}
                  <Switch location={location}>
                    <Route exact path='/' component={ Home } />
                    <Route path='/about' component={ About } />
                    <Route component={ NoPage }/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}
        />
      </Router>
    )
  }
}

export default hot(module)(App);
