import React, {Component} from 'react';

import './Home.css';
import main from './main-elo.png'

class Home extends Component {
	printText = (content, id, random, time = 200) => {
		let text = [...content]
		// Prevent undefined place variable when id is not found
		const place = document.getElementById(id) || document.createElement('div')
		let i = 0;
		if (random) {
			let last = 0
			const int = new Promise((res, rej) => {
				for(const letter of text) {
					i++
					last = last + Math.random() * time
					setTimeout(() => place.textContent = `${place.textContent}${letter}`, last)
				}
				setTimeout(() => res('elo'), last)
			})
			return int
		} else {
			const int = new Promise((res, rej) => {
				setInterval(() => {
					if(i === text.length) {
						clearInterval(int)
						return res('elo')
					}
					place.textContent = `${place.textContent}${text[i]}`
					i++
				}, time)
			})
			return int
		}
	}

	componentDidMount() {
		this.printText('Cześć! \n Jestem Mateusz.', 'textAnime', true, 500)
			.then(res => {
				// TODO: Prevent from executing when user leave page page before this 'then'
				this.printText('Jestem Web developerem', 'textBottom', false)
				console.log(res)
			})
			document.getElementsByClassName('particles-background')[0].classList.add('home-background')
	}

	componentWillUnmount() {
		document.getElementsByClassName('particles-background')[0].classList.remove('home-background')
	}
	render() {
		return (
			<div className="home">
				<div className="home__hero">
					<h2 id='textAnime' className='home__header'></h2>
					<p id='textBottom'className='home__text'></p>
				</div>
				{/*<img className="home__img" src={main} alt="main"/>*/}
			</div>
		)
	}
}

export default Home;

