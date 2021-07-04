import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import React from 'react';
import { availableColors, capitalize } from 'utils';
import { useAppDispatch } from '../../../../app/hooks';
import { deleteTodo, selectTodoColor, toggleTodo } from '../../todos.slice';
import './TodoItem.styles.scss';
const TodoItem = ({ todo }) => {
	const colorOptions = availableColors.map((color) => (
		<option key={color} value={color}>
			{capitalize(color)}
		</option>
	));
	const dispatch = useAppDispatch();
	const handleDelete = () => {
		dispatch(deleteTodo(todo.id));
	};
	const handleSelectColor = ({ target: { value } }) => {
		dispatch(selectTodoColor(todo.id, value));
	};
	const handleToggle = () => {
		dispatch(toggleTodo(todo.id));
	};
	return (
		<li className="todo-item">
			<label className="todo-item__label">
				<input
					className="todo-item__toggle"
					type="checkbox"
					checked={todo.completed}
					onChange={handleToggle}
				/>
				<h3 className="todo-item__text">{todo.text}</h3>
			</label>
			<div className="todo-item__actions">
				<select
					className="todo-item__color-select"
					onChange={handleSelectColor}
					value={todo.color}
				>
					<option value=""></option>
					{colorOptions}
				</select>
				<button className="todo-item__delete" onClick={handleDelete}>
					<DeleteIcon />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
