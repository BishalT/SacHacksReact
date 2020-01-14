import React from 'react';

import { Link, animateScroll as scroll } from "react-scroll";

import Rocket_icon from "../images/rocket-color.png";

export default class Navbar extends React.Component {
	scrollToTop = () => {
	  scroll.scrollToTop();
	};
  
	render() {
	  return (
		<nav className="nav" id="navbar">
		  <div className="nav-content">
			<img
			  src={Rocket_icon}
			  className="nav-logo"
			  alt="Logo"
			  onClick={this.scrollToTop}
			/>
			<ul className="nav-items">
			  <li className="nav-item">
				<Link
				  activeClass="active"
				  to="about"
				  spy={true}
				  smooth={true}
				  offset={-70}
				  duration={500}
				>
					About
				</Link>
			  </li>
			  <li className="nav-item">
				<Link
				  activeClass="active"
				  to="faq"
				  spy={true}
				  smooth={true}
				  offset={-70}
				  duration={500}
				>
					FAQ
				</Link>
			  </li>
			  <li className="nav-item">
				<Link
				  activeClass="active"
				  to="sponsors"
				  spy={true}
				  smooth={true}
				  offset={-70}
				  duration={500}
				>
				  Sponsors
				</Link>
			  </li>
			  <li className="nav-item">
				<Link
				  activeClass="active"
				  to="partners"
				  spy={true}
				  smooth={true}
				  offset={-70}
				  duration={500}
				>
				  Partners
				</Link>
			  </li>
			</ul>
		  </div>
		</nav>
	  );
	}
  }