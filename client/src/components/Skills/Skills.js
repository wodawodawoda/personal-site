import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Skills.css';
import GithubItem from '../GithubPlugin/GithubItem';

import Skill from './Skill'

import projects from './data'

class Skills extends Component {
  constructor (props){
    super(props);
    this.state = {
      counter: 0,
			window: window.innerWidth,
      projects,
			preview: {}
    }
  }

  componentDidMount() {
  	this.setState({projects})
	}

	handleSelect = (e) => {
		this.setState({preview: {url: e.target.value}})
	}

	handleLink = (e, url, repo) => {
		e.preventDefault()
		console.log(url)
		this.setState({preview: {url}})
		console.log(this.state)
	}

  render() {
    return (
      <div className="skills">
        <section className="skills__projects">
					{this.state.window < 768 && this.state.window ?
						<select name="" id="" onChange={this.handleSelect}>
							{this.state.projects.map((project, idx) =>
								<option key={idx} value={`${project.url}`}>{project.repo}</option>)}
						</select> :
					this.state.projects.map(project => {
							return <GithubItem
								key={project.id}
								id={project.id}
								user={project.user}
								repo={project.repo}
								url={project.url}
								handleLink={this.handleLink}
							/>
					})}
        </section>
				<section className="skills__preview">
					{this.state.preview.url ?
						<Skill url={this.state.preview.url}/> : null
					}
				</section>
      </div>
    );
  }
}

export default Skills;
