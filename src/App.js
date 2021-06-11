import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav";
import Home from "./components/Homepage";
import Error from "./components/Error";
import Company from "./components/AboutUs";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/music_app'>
					<Home />
				</Route>
				<Route path='/music_app/company'>
					<Company />
				</Route>
				<Route path='*'>
					<Error />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
