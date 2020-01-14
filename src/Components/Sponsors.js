import React from 'react';
import Slide from 'react-reveal/Slide';

// logos
import Kings_logo from "../images/sac_kings_logo.png"
import Allegiant_logo from "../images/allegiant.png";
import Citris_logo from "../images/citris.png";
import SSC_logo from "../images/ucd_ssc.png";
import Chevron_logo from "../images/chevron.png";
import COE_logo from "../images/College-of-engineering.png";
import MLH_logo from "../images/mlh-logo-white.png";
import HC_logo from "../images/hack-club-bank.png";
import HL_logo from "../images/HL-Logo-Traditional.png";
import ACM_logo from "../images/acm.png";
import SDC_logo from "../images/sdc.png";

class SponsorLogo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			height: this.props.height,
			width: this.props.width,
			src: this.props.src,
			link: this.props.link,
		}
	}
	render() {
		return(
			<a className="sponsor-logo-icon" href={this.state.link}>
			<img className="sponsor-logo-icon" src={this.state.src} height={this.state.height} width={this.state.width} alt=""/>
		  	</a>
		)
	}
}

class Sponsors extends React.Component {
	render() {
		return(
			<div className="sponsor padding-top" id="sponsors">
			<h1>Sponsors</h1>
			<h4>
			  Want to sponsor SacHacks? Contact us at our email
			  <a href="mailto:team@sachacks.io">team@sachacks.io</a>.
			</h4>
			<div className="list-sponsor">
			  <div className="list-sponsor-row">
			  	<SponsorLogo height="300px" width="239px" src={Kings_logo} link="https://www.nba.com/kings/"/>
			  </div>
			</div>
			<div className="list-sponsor-row">
				<SponsorLogo height="160px" width="270px" src={Allegiant_logo} link="https://innovationcenter.allegiantgiving.org/"/>
			  	<SponsorLogo link="https://citris-uc.org/" src={Citris_logo} height="130px" width="510px"/>
			</div>
			<div className="list-sponsor-row">
			  <SponsorLogo link="https://startup.ucdavis.edu/" src={SSC_logo} height="130px" width="210px" />
			  <SponsorLogo link="https://www.chevron.com/" src={Chevron_logo} height="160px" width="160px" />
			  <SponsorLogo link="http://engineering.ucdavis.edu/" src={COE_logo} height="80px" width="320px" />
			</div>
			<div className="list-sponsor-row">
			  <SponsorLogo link="https://github.com/" src="images/github-logo.png" height="70px" width="200px" />
			  <SponsorLogo link="https://www.bloomberg.com/" src="images/bloomberg-logo.png" height="65px" width="230px" />
			  <SponsorLogo link="https://www.stickermule.com/ " src="images/sticker-mule-logo.png" height="55px" width="270px"/>
			  <SponsorLogo link="https://eatbobos.com/" src="images/bobos.png" height="40px" width="220px"/>
			</div>
			<div className="list-sponsor-row">
			  <SponsorLogo link="https://www.sketch.com/" src="images/sketch.png" width="215px"/>
			  <SponsorLogo link="https://guayaki.com/yerba-mate/" src="images/yerba mate-01.png" height="160px" width="160px" />
			</div>
		  </div>
		)
	}
}

class Partners extends React.Component {
	render() {
		return(
			<div className="sponsor padding-top" id="partners">
			<h1>Partners</h1>
			<h4>
			  Want to partner with SacHacks? Contact us at our email
			  <a href="mailto:team@sachacks.io">team@sachacks.io</a>.
			</h4>
			<div className="list-sponsor">
			  <div className="list-sponsor-row">
				<SponsorLogo link="https://mlh.io" src={MLH_logo} width="280px"/>
			  </div>
			  <div className="list-sponsor-row">
				<SponsorLogo link="https://hackclub.com" src={HC_logo} width="335px"/>
			  </div>
			  <div className="list-sponsor-row">
				<SponsorLogo link="https://hackerlab.org/en" src={HL_logo} height="150px" width="205px"/>
			  </div>
			  <div className="list-sponsor-row">
				<SponsorLogo link="http://losriosccd.acm.org/" src={ACM_logo} height="135px" width="190px"/>
				<SponsorLogo link="https://www.sacdevcollective.org/" src={SDC_logo} height="120px" width="160px"/>
			  </div>
			</div>
		  </div>
		)
	}
}

export {Sponsors, Partners};