import React from 'react';
import { useSelector } from 'react-redux';
import './TodoList.styles.scss';
import { selectAll } from '../../todos.slice';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
	const loadingStatus = useSelector((state) => state.todos.status);
	const todos = useSelector(selectAll);

	const loader = <div className="loader">dsadsa</div>;
	const todoList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
	return (
		<ul className="todo-list">
			{loadingStatus === 'loading' ? loader : todoList}
		</ul>
	);
};

export default TodoList;
