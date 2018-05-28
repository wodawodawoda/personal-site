import React, { Component, PropTypes } from 'react';

import GithubPluginItem from './GithubPluginItem'

import './GithubPlugin.css';

const secret = "f4d79efc3a8524858d855e00ad5a19ff34f646b5";
const id = "1acd3cf15f3084105b91";
const auth = `client_id=${id}&client_secret=${secret}`;

// graph Api request body
const graphQl = `{
  viewer {
    repositories(first: 10) {
      edges {
        node {
          id
          name
          description
          defaultBranchRef {
            id
            target {
              ... on Commit {
                id
                history(first: 5) {
                  edges {
                    node {
                      messageHeadline
                      oid
                      message
                      author {
                        name
                        email
                        date
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

class GithubPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }
  componentWillMount() {
    fetch(`https://api.github.com/users/${this.props.user}/repos?per_page=100&${auth}`)
      .then(res => res.json())
      .then(repos => {
        repos.forEach(repo => {
          fetch(`https://api.github.com/repos/${this.props.user}/${repo.name}/commits?${auth}`)
            .then(res => res.json())
            .then(commits => {
              const toState = {
                id: repo.id,
                html_url: repo.html_url,
                name: repo.name,
                description: repo.description,
                commits,
              };
              this.setState({ repos: [...this.state.repos, toState] });
            })
            .catch(error => console.log(error));
        });
      })
      .catch(error => console.log(error));

    // O TUTAJ MAM PROBLEM
    // Promise.all([
    //   fetch(`https://api.github.com/users/${this.props.user}/repos${auth}`),
    //   fetch(`https://api.github.com/repos/${this.props.user}/${this.props.repo}/commits${auth}`),
    //   fetch(`https://api.github.com/repos/${this.props.user}/${this.props.repo}${auth}`),
    // ]).then(data => {
    //   return data.map(item => item.json())
    // })
    //   .then(json => json[0]) // Dostaję taki array => json = [Promise, Promise, Promise]
    //   .then(res => console.log(res)); // Tutaj gubię się i nie wiem jak dostać się do poszczególnych wartości Promisów
  }


  renderRepos = () => {
    return this.state.repos.map((repo, idx) => {
      if (idx > 4) return null;
      return <GithubPluginItem key={repo.id} repo={repo} />
    })
  }

  render() {
    return (
      <div className="github-plugin">
        <div className="github-plugin__header">
          <h2 className="github-plugin__name"><a href="http://www.github.com">GitHub</a></h2>
          <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </div>
        {this.state.repos ? this.renderRepos() : 'loading'}
      </div>
    );
  }
}

GithubPlugin.propTypes = {
};

export default GithubPlugin;
