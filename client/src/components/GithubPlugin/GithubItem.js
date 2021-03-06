import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import showdown from 'showdown';

import './GithubItem.css';
const converter = new showdown.Converter();

const secret = "f4d79efc3a8524858d855e00ad5a19ff34f646b5";
const id = "1acd3cf15f3084105b91";
const auth = `?client_id=${id}&client_secret=${secret}`;

class GithubItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commits: [],
      repo: [],
			readme: ''
    };
  }
  componentDidMount() {
    // Separate fetchs intentionally - first render description, then render hidden commits
    fetch(`https://api.github.com/repos/${this.props.user}/${this.props.repo}/commits${auth}`)
      .then(res => res.json())
      .then(commits => this.setState({commits}));
    fetch(`https://api.github.com/repos/${this.props.user}/${this.props.repo}${auth}`)
      .then(res => res.json())
      .then(repo => this.setState({repo}))
		if(this.props.preview) {
			fetch(`https://api.github.com/repos/wodawodawoda/${this.props.repo}/readme${auth}`)
				.then(res => res.json())
				.then(res => {
					console.log(res)
					this.setState({readme: atob(res.content)})
				})
		}
  }

  render() {
		return (
			<div id={this.props.id} className={`github-item`}>
				<div className="github-item__header">
					<h2 className="github-item__name"><a href={`${this.state.repo.html_url}`}>{this.state.repo.name}</a></h2>
					<svg height="32" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32"
							 aria-hidden="true">
						<path fillRule="evenodd"
									d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
					</svg>
				</div>
				<div className="github-item__repo">
					{this.state.repo ? this.renderDescription() : 'loading'}
				</div>
			</div>
		)
	}
	renderDescription = () => (
		<div className="github-item__description">
			<p>{this.state.repo.description ? this.state.repo.description : "No description"}</p>
			<Link
				to={`/personal-site/skills/${this.props.repo}`}
				onClick={(e) => this.props.handleLink(e, this.props.url, this.props.repo)}
			>Preview...</Link>
		</div>
	);

	renderReadme = () => (
		/* TODO: Markdown to html */
		<div className="github-item__readme">
			<p>{this.state.readme}</p>
		</div>
	)
}

export default GithubItem;

