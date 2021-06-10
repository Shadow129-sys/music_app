import React from "react";
import fb from "../images/icons/facebook.png";
import insta from "../images/icons/insta.png";
import tw from "../images/icons/twitter.png";
import linkedin from "../images/icons/linkedin.png";
import "./AboutUs.css";
import data from "./data/personData";

const About = () => {
	return (
		<>
			<Cards />
			<Body />
		</>
	);
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

const Body = () => {
	return (
		<div className='company-body'>
			<h1 className='company-title'>Our Company</h1>
			<p className='company-text'>
				We believe a headphone is more than just an instrument for
				sound.It’s the key to a mind-blowing moment of emotion, bringing
				you closer to your music, and yourself.We’ve curated the world’s
				finest headphones and earphones to help you discover the riffs,
				percussions, baselines and solos that were always there but
				never heard.
			</p>
		</div>
	);
};
export default About;
