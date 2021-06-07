import React from "react";
import sample from "./sample.mp3";

let paused = true;
let song = new Audio(sample);

const App = () => {
	const handler = () => {
		paused = !paused;
		paused ? song.pause() : song.play();
	};
	return (
		<>
			<div
				style={{
					height: "100px",
					width: "100px",
					border: "2px solid white",
				}}
				onClick={handler}></div>
		</>
	);
};

export default App;
