import React from "react";

export const Purple = () => {
	return (
		<div className="container">
			<button
				className="btn btn-outline-dark d-flex"
				onClick={() => setColor("purple")}>
				Fancy Purple?
			</button>
		</div>
	);
};
