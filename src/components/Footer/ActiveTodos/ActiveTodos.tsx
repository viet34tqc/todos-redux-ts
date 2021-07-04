import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectAll } from '../../../features/todos/todos.slice';
import './ActiveTodos.styles.scss';
const ActiveTodos = () => {
	const count = useAppSelector((state) => {
		const allTodos = selectAll(state).filter((todo) => !todo.completed);
		return allTodos.length;
	});
	const suffix = count === 1 ? '' : 's';
	return (
		<div className="footer-widget footer-widget--active-todos">
			<h3 className="footer-widget__title">Active Todos</h3>
			<p>
				<strong>{count}</strong> item{suffix} left
			</p>
		</div>
	);
};

export default ActiveTodos;
