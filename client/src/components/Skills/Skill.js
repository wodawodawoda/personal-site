import React, {Component} from 'react';

class GithubPreview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			repo: '',
			window: window.innerWidth
		}
	}
	componentDidMount() {
	}

	componentWillUnmount() {
	}

	static getDerivedStateFromProps(props, state) {
		if(props.repo !== state.repo && state.repo) document.querySelector('.skills__frame').classList.remove('skills__frame--show')
		return {
			repo: props.repo
		}
	}



	handleFullWidth = (e) => {
		e.target.parentElement.parentElement.classList.toggle('skills__preview--full')
		e.target.parentElement.parentElement.previousSibling.classList.toggle('skills__projects--hide')
	}

	onLoadHandler = (e) => {
		e.target.classList.add('skills__frame--show')
		document.getElementById('loader').classList.add('skills__loader--hide')
	}

	render() {
		console.log(this.props)
		return(
			<div className="skills__window">
				{this.state.window > 768 ? <button
					className="skills__full"
					onClick={this.handleFullWidth}
				>⎚</button> : null}
				<iframe
					className="skills__frame"
					src={`https://wodawodawoda.github.io/${this.props.repo}`}
					frameBorder="0"
					onLoad={e => this.onLoadHandler(e)}
				></iframe>
			</div>
		)
	}
}

export default GithubPreview
