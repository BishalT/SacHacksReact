import React from 'react';
import './App.scss';
import './scss/index.scss';

import Homepage from './Components/Homepage';
import About from './Components/About';
import FAQ from './Components/FAQ';
import {Sponsors, Partners} from './Components/Sponsors';
import Navbar from './Components/Navbar';

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

import MLH_icon from "./images/mlh-trust-badge-2020-white.svg";

class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Navbar />
				<MLH />
			    <Stars />
				<Homepage />
				<About />
				<FAQ />
				<Sponsors />
				<Partners />
				<Footer />
			</div>
	  );
  }
}

class Stars extends React.Component {
	render() {
		return (
			<div id="stars2"></div>
		)
	}
}

class MLH extends React.Component {
	render() {
		return(
			<div className="header">
				<div className="logo">
				<a
					id="mlh-trust-badge"
					href="https://mlh.io/seasons/na-2020/events?utm_source=na-"
				>
					<img src={MLH_icon} alt=""/>
				</a>
				</div>
		  </div>
		)
	}
}

class FooterIcon extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			link: this.props.link,
			icon: this.props.icon,
		}
	}
	render() {
		return(
			<li>
				<a href={this.state.link}>
				<i className={this.state.icon} aria-hidden="true"/>
				</a>
			</li>
		)
	}
}

class Footer extends React.Component {
	render() {
		return (
			<div className="footer-bar">
				<p>SacHacks 2020</p>
				<ul className="icon-bar">
					<FooterIcon link="https://www.facebook.com/sachacks/" icon="fab fa-facebook-f" />
					<FooterIcon link="https://www.linkedin.com/company/sachacks/" icon="fab fa-linkedin" />
					<FooterIcon link="https://www.instagram.com/sachacks/?hl=en" icon="fab fa-instagram" />
					<FooterIcon link="https://twitter.com/SacHacks18" icon="fab fa-twitter" />
				</ul>
				<p><a href="mailto:team@sachacks.io">team@sachacks.io </a></p>
			</div>
		)
	}
}

export default App;
