import React from 'react';
import Slide from 'react-reveal/Slide';

import SH_logo from "../images/sachack_3.png";
import Kings_logo from "../images/sac_kings_logo.png"

export default class Homepage extends React.Component {
	render() {
		return(
			<div className="homepage padding-top" id="homepage">
				<Slide bottom cascade>
				<img src={SH_logo} alt="" />
				<div className="detail">
					<h3 id="space">Allegiant Innovation Center @ Sacramento, CA</h3>
					<h5 className="yellow">February 22-23, 2020</h5>
					<div className="host">
						<h3 className="hostTitle">Co-Hosted By</h3>
						<a
						href="https://www.nba.com/kings/news/sacramento-kings-sachacks-and-major-league-hacking-host-sacramentos-first-extensive"
						><img src={Kings_logo} alt=""/></a>
					</div>
                    <div className="mainButtons">
                        <a href="https://sachacks.typeform.com/to/EGB5L5"
                        ><button className="btn btn-active">
                        APPLY
                        </button>
                        </a>
                        <a href="https://sachacks.typeform.com/to/kBf1gN">
                        <button className="btn btn-home">BE A MENTOR</button>
                        </a>
                    </div>
				</div>
				</Slide>
			</div>
		)
	}
}