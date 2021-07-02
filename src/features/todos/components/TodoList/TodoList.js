import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../../../components/Loader/Loader';
import { selectAll } from '../../todos.slice';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.styles.scss';

const TodoList = () => {
	const loadingStatus = useSelector((state) => state.todos.status);
	const todos = useSelector(selectAll);

	const todoList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
	return (
		<ul className="todo-list">
			{loadingStatus === 'loading' ? <Loader /> : todoList}
		</ul>
	);
};

export default TodoList;
