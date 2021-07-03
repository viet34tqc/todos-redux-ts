import React from 'react';
import ActiveTodos from './ActiveTodos/ActiveTodos';
import './Footer.styles.scss';
import FooterButtons from './FooterButtons/FooterButtons';
const Footer = () => {
	return (
		<footer className="footer">
			<FooterButtons />
            <ActiveTodos />
		</footer>
	);
};

export default Footer;
