import React from 'react';
import { useAppDispatch } from '../../../app/hooks';
import {
	clearCompleted,
	markAllCompleted,
} from '../../../features/todos/todos.slice';
import './FooterButtons.styles.scss';
const FooterButtons = () => {
	const dispatch = useAppDispatch();
	return (
		<div className="footer-widget footer-widget--buttons">
			<h3 className="footer-widget__title">Actions</h3>
			<button onClick={() => dispatch(markAllCompleted({}))}>
				Mark All Completed
			</button>
			<button onClick={() => dispatch(clearCompleted({}))}>
				Clear Completed
			</button>
		</div>
	);
};

export default FooterButtons;
