import React, { useState } from "react";
import "./Homepage.css";
import man from "../images/man.svg";
import pauseImg from "../images/play.svg";
import play from "../images/pause.png";
import source from "../music/sample1.mp3";
import selected from "../images/circlef.svg";
import notselected from "../images/circle.svg";
import data from "./data.js";

const Home = () => {
	return (
		<div className='body'>
			<Intro></Intro>
			<Product />
		</div>
	);
};

const Intro = () => {
	return (
		<section className='introbody'>
			<section className='intro'>
				<p className='choice'>The Best Choice</p>
				<p className='title'>Beats Studio Wireless</p>
				<p className='introMsg'>
					Almost before we knew it, we had left the ground.I watched
					the strom, so beautiful yet terrific.
				</p>
			</section>
			<Music />
		</section>
	);
};

let music = new Audio(source);

const Music = () => {
	const [pause, setPause] = useState(true);
	const playHandler = () => {
		pause ? music.play() : music.pause();
		setPause(!pause);
	};
	return (
		<section className='introlower'>
			<div className='music'>
				<img
					src={man}
					alt='default'
					className='man'
					onClick={playHandler}
				/>
				<img
					src={pause ? pauseImg : play}
					className={`musicplayer ${pause ? "pause" : "play"}`}
					alt='play'
				/>
			</div>

			<div className='manapp'>
				<p className='app'>Mobile App</p>
				<p className='appdes'>
					Mist enveloped the ship three hours out from port.
				</p>
				<p className='appdownload'>
					Download for iOS and Android
					<div className='dlines'>
						<p>
							~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
							<br />
							~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
						</p>
					</div>
				</p>
			</div>
		</section>
	);
};

const Product = () => {
	const [current, setCurrent] = useState(0);
	const handler = (index) => {
		console.log(index);
		setCurrent(index);
	};
	return (
		<section className='productIntro'>
			{data.map((d, index) => {
				return (
					<div
						className={`Data ${
							index === current ? "active" : "disabled"
						}`}>
						{index === current ? (
							<div className='data-card'>
								<p className='card-head'>{d.head}</p>
								<p className='card-data'>{d.body}</p>
							</div>
						) : null}
					</div>
				);
			})}
			<section className='loader'>
				{data.map((d, index) => {
					return (
						<img
							src={index === current ? selected : notselected}
							alt='default'
							onClick={() => handler(index)}
						/>
					);
				})}
			</section>
		</section>
	);
};

export default Home;