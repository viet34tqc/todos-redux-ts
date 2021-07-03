import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCompleted, markAllCompleted } from '../../../features/todos/todos.slice';
import './FooterButtons.styles.scss';
const FooterButtons = () => {
	const dispatch = useDispatch();
	return (
		<div className="footer-widget footer-widget--buttons">
			<h3 className="footer-widget__title">Actions</h3>
			<button onClick={() => dispatch(markAllCompleted())}>
				Mark All Completed
			</button>
			<button onClick={() => dispatch(clearCompleted())}>
				Clear Completed
			</button>
		</div>
	);
};

export default FooterButtons;
