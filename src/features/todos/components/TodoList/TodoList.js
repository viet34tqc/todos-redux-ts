import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import Loader from '../../../../components/Loader/Loader';
import { selectFilterdTodos } from '../../todos.slice';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.styles.scss';

const TodoList = () => {
	const loadingStatus = useAppSelector((state) => state.todos.status);
	const todos = useAppSelector(selectFilterdTodos);

	const todoList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
	return (
		<ul className="todo-list">
			{loadingStatus === 'loading' ? <Loader /> : todoList}
		</ul>
	);
};

export default TodoList;
