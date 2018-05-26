import React, { Component } from 'react';

import './backup.css';

class About extends Component {
  constructor (props){
    super(props);
    this.state = {
      counter: 0,
    }
  }

  componentDidMount() {
    this.animationInterval()
    const interval = setInterval(this.animationInterval, 5000);
    this.setState({ interval })
    const count = () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }
    this.setState({count})
    document.querySelectorAll('.experience__step')[0].addEventListener('animationiteration', count, false)
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random()*(max+1 - min))
  }

  animationInterval = () => {
    console.log('elo')
    const steps = document.querySelectorAll('.experience__step')
    steps.forEach((step, idx) => {
      step.style['transform-origin'] = `${this.generateRandomInteger(-10, 10)}vw ${this.generateRandomInteger(-10, 10)}vh`;
      step.style['left'] = `${this.generateRandomInteger(-150, 150)}px`;
    })
  }

  handleStop = () => {
    document.querySelectorAll('.experience__step')[0].removeEventListener('animationiteration', this.state.count, false)
    clearInterval(this.state.interval)
    const steps = document.querySelectorAll('.experience__step')
    console.log(this.state.counter)
    steps.forEach((step, idx) => {
      step.style['transform-origin'] = `0px 0px`;
      step.style['animation-iteration-count'] = this.state.counter + 1
      step.style['left'] = 0
    });
  }

  addAnimation = () => {
    const steps = document.querySelectorAll('.experience__step')
    steps.forEach((step) => step.classList.toggle('animate'))
  }

  render() {
    console.log(this.state.counter)
    return (
      <div className="about">
        <h2>About</h2>
        <div className="experience" onMouseOver={this.handleStop}>
          {skills.map((skill, idx) => <ExprerienceItem key={idx} idx={idx} icon={skill} />)}
        </div>
      </div>
    );
  }
}

export default About;

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
