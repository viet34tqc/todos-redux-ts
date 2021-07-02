import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import React from 'react';
import { availableColors, capitalize } from 'utils';
import './TodoItem.styles.scss';
const TodoItem = ({ todo }) => {
	const colorOptions = availableColors.map((color) => (
		<option key={color} value={color}>
			{capitalize(color)}
		</option>
	));
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
				<button className="todo-item__delete">
					<DeleteIcon />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
