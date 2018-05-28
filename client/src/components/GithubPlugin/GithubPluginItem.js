// Created new class only to handle "more commits" button and prevent re-rendering whole plugin

import React, { Component } from 'react';

class GithubPluginItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 4,
    };
  }

  renderDescription = (repo) => (
    <div className="github-plugin__repo-header">
      <h2><a href={repo.html_url}>{repo.name}</a></h2>
      <p>{repo.description}</p>
    </div>
  );

  renderCommits = (commits, num) => (
    <div className="github-plugin__commits">
      {commits.map((commit, idx) => {
        if (idx > this.state.show) return null;
        return (
          <div key={commit.sha}>
            <p className="github-plugin__commit">{commit.commit.message}</p>;
            <span className="github-plugin__date">{commit.commit.author.date}</span>
          </div>
        );
      })}
      {this.state.show < commits.length ?
        <button onClick={() => {
          this.setState({show: this.state.show + 4})
        }}>more commits</button> : null}
    </div>
  );

  render() {
    return (
      <div className="github-plugin__repo">
        {this.renderDescription(this.props.repo)}
        {this.renderCommits(this.props.repo.commits)}

      </div>
    )
  }
}

export default GithubPluginItem
