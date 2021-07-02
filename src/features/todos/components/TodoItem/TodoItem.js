import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import React from 'react';
import { useDispatch } from 'react-redux';
import { availableColors, capitalize } from 'utils';
import { deleteTodo } from '../../todos.slice';
import './TodoItem.styles.scss';
const TodoItem = ({ todo }) => {
	const colorOptions = availableColors.map((color) => (
		<option key={color} value={color}>
			{capitalize(color)}
		</option>
	));
	const dispatch = useDispatch();
	const handleDelete = () => {
		dispatch(deleteTodo(todo.id));
	};
	return (
		<li className="todo-item">
			<label className="todo-item__label">
				<input className="todo-item__toggle" type="checkbox" />
				<h3 className="todo-item__text">{todo.text}</h3>
			</label>
			<div className="todo-item__actions">
				<select className="todo-item__color-select">
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
