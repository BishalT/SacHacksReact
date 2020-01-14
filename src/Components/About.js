import React from "react";
import Slide from 'react-reveal/Slide';

import About_img from "../images/aboutimage.png"

export default class About extends React.Component {
	render() {
		return(
			<div className="about padding-top" id="about">
			<div className="about-content">
			  <div className="about-description">
			  <Slide left cascade>
				<h1>About SacHacks</h1>
				<div className="detail">
				  <p>
					<span className="yellow">Design. Code. Launch.</span>
					SacHacks is the first major intercollegiate hackathon in the
					Sacramento, California area. Our passion is to cultivate the
					untapped potential of those in Sac by providing them with the
					opportunity to launch their ideas in a public venue. We provide
					the place, you bring your ideas, and we have a friendly
					competition between all creative coders to launch their ideas
					into action during a 24-hour hackathon.
				  </p>
				</div>
				</Slide>
			  </div>
			  <Slide right cascade>
			  <img className="about-image" src={About_img} alt=""/>
			  </Slide>
			</div>
		  </div>
		)
	}
}