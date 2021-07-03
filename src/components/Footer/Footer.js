import React from 'react';
import ColorFilter from '../../features/filters/components/ColorFilter/ColorFilter';
import StatusFilter from '../../features/filters/components/StatusFilter/StatusFilter';
import ActiveTodos from './ActiveTodos/ActiveTodos';
import './Footer.styles.scss';
import FooterButtons from './FooterButtons/FooterButtons';
const Footer = () => {
	return (
		<footer className="footer">
			<FooterButtons />
            <ActiveTodos />
			<ColorFilter />
			<StatusFilter />
		</footer>
	);
};

export default Footer;
