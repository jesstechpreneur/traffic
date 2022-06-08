import React, { useState } from "react";

//create your first component
const Home = () => {
	const [SelectedColor, SetSelectedColor] = useState("Red");
	return (
		<div className="centered">
			<div className="Pole"></div>
			<div className="Box stack-top">
				<div
					onClick={() => SetSelectedColor("Red")}
					className={
						"Light Red" + (SelectedColor === "Red" ? " Glow " : "")
					}></div>
				<div
					onClick={() => SetSelectedColor("Yellow")}
					className={
						"Light Yellow" +
						(SelectedColor === "Yellow" ? " Glow " : "")
					}></div>
				<div
					onClick={() => SetSelectedColor("Green")}
					className={
						"Light Green" +
						(SelectedColor === "Green" ? " Glow " : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
