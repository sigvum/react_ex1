import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Navbar from "./components/Navbar";
import "./styles.css";

function App() {

	return (
		<>
			<BrowserRouter>
			<Navbar />
				
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
