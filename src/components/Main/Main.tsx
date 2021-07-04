import React, { ReactNode } from 'react';

type MainProps = {
	children: ReactNode;
};

const Main = ({ children }: MainProps) => {
	return (
		<main>
			<div className="container">
				<div className="todos-wrapper">{children}</div>
			</div>
		</main>
	);
};

export default Main;
