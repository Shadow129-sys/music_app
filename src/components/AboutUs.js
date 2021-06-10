import React from "react";
import fb from "../images/icons/facebook.png";
import insta from "../images/icons/insta.png";
import tw from "../images/icons/twitter.png";
import linkedin from "../images/icons/linkedin.png";
import "./AboutUs.css";
import data from "./data/personData";

const About = () => {
	return <Cards />;
};

const Cards = () => {
	return (
		<div className='profile-card-holder'>
			{data.map((person, index) => {
				return <Card key={index} {...person} />;
			})}
		</div>
	);
};

const Card = ({ name, role, img }) => {
	return (
		<div className='profile-card'>
			<div className='person'>
				<img src={img} alt='' />
			</div>
			<div className='profile-details'>
				<p className='person-name'>{name}</p>
				<p className='person-role'>{role}</p>
			</div>
			<div className='social-media-links'>
				<img src={fb} alt='facebook' className='social-links fb'></img>
				<img
					src={linkedin}
					alt='linkedin'
					className='social-links linkedin'></img>
				<img
					src={insta}
					alt='insta'
					className='social-links insta'></img>
				<img src={tw} alt='twitter' className='social-links tw'></img>
			</div>
		</div>
	);
};

export default About;
