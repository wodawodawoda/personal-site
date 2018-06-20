import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Skills.css';
import GithubItem from '../GithubPlugin/GithubItem';

import design from './images/design.png'
import golden from './images/golden.png'
import sudoku from './images/sudoku.png'
import photo from './images/photo.png'
import memory from './images/memory.png'
import Skill from './Skill'

class Skills extends Component {
  constructor (props){
    super(props);
    this.state = {
      counter: 0,
      projects
    }
  }

	// Alternative method to get parameter to simple callback from Skill element
	getChildRouteParameter = () => {
		return this.props.location.pathname.slice(this.props.match.path.length + 1)
	}

	showLoader = () => {
		document.getElementById('loader').classList.add('skills__loader--show')
	}

	windowSize = () => {
  	this.setState({window: window.innerWidth})
	}

	componentDidMount() {
  	this.windowSize()
	}

	handleSelect = (e) => {
  	console.log({history: this.props.history, target: e.target.value})
		this.props.history.push(`/skills/${e.target.value}`)
	}

  render() {
    return (
      <div className="skills">
        <section className="skills__projects">
					{this.state.window < 768 && this.state.window ?
						<select name="" id="" onChange={this.handleSelect}>
							{this.state.projects.map(project => <option value={project.repo}>{project.repo}</option>)}
						</select> :
					this.state.projects.map(project => {
							return <GithubItem
								key={project.id}
								id={project.id}
								user={project.user}
								repo={project.repo}
							/>
					})}
        </section>
				<section className="skills__preview">
					{this.Loader()}
					<Route path='/skills/:project' render={ (routeProps) => {
						return <Skill
								routeProps={routeProps}
								repo={routeProps.match.params.project}
							/>
					}
					} />
				</section>
      </div>
    );
  }

  Loader = () => {
  	return (
  		<div id="loader" className="loader">Loading...</div>
		)
	}
}

export default Skills;

const projects = [
	{
		id: 1,
		user: "wodawodawoda",
		img: "memory",
		repo: "Memory-game"
	},
	{
		id: 2,
		user: "wodawodawoda",
		img: "sudoku",
		repo: "Sudoku"
	},
	{
		id: 3,
		user: "wodawodawoda",
		img: "design",
		repo: "Design-template"
	},
	{
		id: 4,
		user: "wodawodawoda",
		img: "golden",
		repo: "Golden-template"
	},
	{
		id: 5,
		user: "wodawodawoda",
		img: "photo",
		repo: "Photo-template"
	}
]
