import React, { useState } from "react";

export const TrafficLight = (props) => {
	const [Color, setColor] = useState("red");

	return (
		<div className="container d-flex justify-content-center pt-5">
			<div className="bg-dark rounded-3 p-3">
				<div className=""></div>
				<div
					onClick={() => setColor("red")}
					className={
						"light rounded-circle bg-danger p-5 m-1 " +
						(Color === "red" ? "glow" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"light rounded-circle bg-warning p-5 m-1 " +
						(Color === "yellow" ? "glow" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"light rounded-circle bg-success p-5 m-1 " +
						(Color === "green" ? "glow" : "")
					}></div>
			</div>
		</div>
	);
};
