import React from 'react';

const Main = ({ children }) => {
	return (
		<main>
			<div className="container">
				<div className="todos-wrapper">{children}</div>
			</div>
		</main>
	);
};

export default Main;
