import React, { useState } from "react";

function App() {
	const [headingText, setHeadingText] = useState("Hello");
	const [isMouseOver, setIsMouseOver] = useState(false);

	function handleClick() {
		setHeadingText("Submitted");
	}

	function handleMouseOver() {
		setIsMouseOver(true);
	}

	function handleMouseOut() {
		setIsMouseOver(false);
	}

	return (
		<div className="container">
			<h1>{headingText}</h1>
			<input type="text" placeholder="What's your name?" />
			<button
				onClick={handleClick}
				onMouseOver={handleMouseOver} 
				onMouseOut={handleMouseOut}
				style={{ backgroundColor: isMouseOver && "black" }}
			>
				Submit
			</button>
		</div>
	);
}

export default App;
