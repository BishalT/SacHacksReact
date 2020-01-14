import React from "react";
import Slide from 'react-reveal/Slide';

class FAQList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: this.props.title,
			desc: this.props.desc,
		}
	}

	render(){
		return (
			<li>
				<h3>{this.state.title}</h3>
				<p>{this.state.desc}</p>
			</li>
		)
	}
}
export default class FAQ extends React.Component {
	render() {
		return(
			<div className="FAQ padding-top" id="faq">
			<Slide bottom cascade>
			<h1>Frequently Asked Questions</h1>
			<div className="Q-and-A">
				<FAQList title="What is a hackathon?" 
					desc="A hackathon occurs when passionate people gather together to create, build, and launch their ideas with tech."/>
				<FAQList title="How much does it cost?" 
					desc="Everything is provided by our team and sponsors. The event is free to attend."/>

				<FAQList title="How much does it cost?" 
					desc=" Everything is provided by our team and sponsors. The event is free to attend."/>
				<FAQList title="Who can attend?"
				desc="
					Any undergraduate student, graduate student, or industry
					professionals over the age of 18 are welcome!"/>
			  <li>
				<h3>Code of Conduct?</h3>
				<p>
				  All participants of our event must follow the MLH Code of Conduct.
				  Click the link below to download a pdf for more information
				  <a href="assets/pdf/mlh-code-of-conduct.pdf" target="_blank"
					>MLH Code of Conduct PDF</a>.
				</p>
			  </li>
			  <FAQList title="I don't want to hack. Can I still attend?"
				desc=" Yes! We'd love for you to apply to be a volunteer. A link to the
				  volunteer application will be out soon."/>
			  <li>
				<h3>Have more questions?</h3>
				<p>
				  Feel free to email us: 
				  <a href="mailto:team@sachacks.io">team@sachacks.io</a>.
				</p>
			  </li> 
			</div>
			</Slide>
		  </div>
		)
	}
};