import React, { Component } from 'react';

import './Skills.css';
import GithubItem from '../GithubPlugin/GithubItem';

class Skills extends Component {
  constructor (props){
    super(props);
    this.state = {
      counter: 0,
      projects: true,
    }
  }

  // Lifecycle methods
  // componentDidMount() {
  //   this.animationInterval()
  //   const interval = setInterval(this.animationInterval, 5000);
  //   this.setState({ interval })
  //   const count = () => {
  //     this.setState({
  //       counter: this.state.counter + 1
  //     })
  //   }
  //   this.setState({count})
  //   document.querySelectorAll('.experience__step')[0].addEventListener('animationiteration', count, false)
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.state.interval)
  //   document.querySelectorAll('.experience__step')[0].removeEventListener('animationiteration', this.state.count, false)
  // }

  render() {
    return (
      <div className="skills">
        {/*<div className="experience" onMouseOver={this.handleStop}>*/}
          {/*{skills.map((skill, idx) => <ExprerienceItem key={idx} idx={idx} icon={skill} />)}*/}
        {/*</div>*/}
        {this.state.projects ? <section className="skills__projects">
          <GithubItem user='wodawodawoda' repo='Memory-game'/>
          <GithubItem user='wodawodawoda' repo='Sudoku'/>
          <GithubItem user='wodawodawoda' repo='Design-template'/>
          <GithubItem user='wodawodawoda' repo='Golden-template'/>
          <GithubItem user='wodawodawoda' repo='Photo-template'/>
        </section> : null}
      </div>
    );
  }

  // Handlers
  handleStop = () => {
    document.querySelectorAll('.experience__step')[0].removeEventListener('animationiteration', this.state.count, false)
    clearInterval(this.state.interval)
    const steps = document.querySelectorAll('.experience__step')
    steps[0].parentElement.style['margin'] = '40px auto'
    steps.forEach((step, idx) => {
      step.style['transform-origin'] = `0px 0px`;
      step.style['animation-iteration-count'] = this.state.counter + 1
      step.style['left'] = 0
    });
    this.setState({projects: true})
  }

  animationInterval = () => {
    console.log('elo')
    const steps = document.querySelectorAll('.experience__step')
    steps.forEach((step, idx) => {
      step.style['transform-origin'] = `${this.generateRandomInteger(-200, 200)}px ${this.generateRandomInteger(-200, 200)}px`;
      step.style['left'] = `${this.generateRandomInteger(-150, 150)}px`;
    })
  }

  generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random()*(max+1 - min))
  }
}

export default Skills;

const ExprerienceItem = (props) => (
  <div className={`experience__step experience__step--${props.idx} animate`}>
    <span className={`experience__icon ${props.icon}`}></span>
    <div className="experience__text"></div>
  </div>
)

const skills = [
  "fab fa-html5",
  "fab fa-css3",
  "fab fa-js",
  "fab fa-node",
  "fab fa-sass",
  "fab fa-react",
  "fab fa-github",
  "fab fa-python",
]

// https://www.klipfolio.com/sites/default/files/integrations/mongo.png
