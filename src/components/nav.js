import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import main from "../images/icons/mainicon.svg";
import icon from "../images/icons/icon1.svg";
import search from "../images/icons/searchicon.svg";
import menu from "../images/icons/menu.svg";
import background from "../images/icons/backB.svg";
import "./nav.css";

const Navbar = () => {
	const [clicked, setClicked] = useState(false);
	const clickHandler = () => {
		setClicked(!clicked);
	};
	const phone = useMediaQuery("(max-width:800px)");
	return (
		<>
			<div
				className='nav'
				style={
					clicked && phone
						? {
								overflowY: "auto",
						  }
						: {
								overflowY: "hidden",
						  }
				}>
				<div className='iconBar'>
					<img
						src={icon}
						style={{
							transformOrigin: "center",
							transform: "scale(0.65)",
						}}
						alt='default img'></img>
					<img src={main} alt='default img'></img>
					<img
						src={search}
						alt='default img'
						onClick={clickHandler}></img>
					{clicked ? <input className='search'></input> : null}
					{phone ? (
						<img
							src={menu}
							style={{
								position: "absolute",
								right: "1em",
								transformOrigin: "center",
								transform: "scale(0.8)",
							}}
							alt='default'></img>
					) : null}
				</div>
				{!phone ? (
					<div className='list'>
						<ul className='list-items'>
							<Link to='/' className='li'>
								<li>
									About us<span></span>
								</li>
							</Link>
							<Link to='/company' className='li'>
								<li>
									Company<span></span>
								</li>
							</Link>
							<Link to='/' className='li'>
								<li>
									Reviews<span></span>
								</li>
							</Link>
							<Link to='/' className='li'>
								<li>
									Add Cart<span></span>
								</li>
							</Link>
						</ul>
					</div>
				) : null}
			</div>
			<img src={background} className='back' alt='back'></img>
		</>
	);
};
/*
const Overview = () => {
	return (
		<div className='over-view'>
			<div className='cross'>x</div>
			<div className='list'>
				<ul className='list-items'>
					<li>
						About us<span></span>
					</li>
					<li>
						Models<span></span>
					</li>
					<li>
						Reviews<span></span>
					</li>
					<li>
						Add Cart<span></span>
					</li>
				</ul>
			</div>
		</div>
	);
};
*/

export default Navbar;
