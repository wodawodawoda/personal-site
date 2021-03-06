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
import Sidebar from '../Sidebar/Sidebar';
import Skills from '../Skills/Skills';
import GithubPreview from '../Skills/Skill';
import Contact from '../Contact/Contact';
import Cv from '../Cv/Cv';

import Particles from 'react-particles-js';
import particlesConfig from './particles.config';



class App extends Component {
  width = () => (
    window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
  );

  particlesNumber = () => {
    let config = particlesConfig;
    this.width() < 768 ? config.particles.number.value = 20 : config.particles.number.value = 50;
    return config;
  }
  render() {
    return (
      <Router>
        <div className="app">
					<input type="checkbox" className="menu-btn"/>
          <Particles
            className="particles-background"
            params={this.particlesNumber()}
          />
          <Route path='*' component={ Sidebar }/>
          <Switch>
            <Route exact path='/personal-site' component={ Home } />
            <Route path='/personal-site/about' component={ About } />
            <Route path='/personal-site/skills' component={ Skills } />
            {/*<Route path='/skills/:project' component={ GithubPreview } />*/}
            <Route path='/personal-site/cv' component={ Cv } />
            <Route path='/personal-site/contact' render={ () => <Contact width={this.width} /> } />
            <Route component={ NoPage }/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default hot(module)(App);
