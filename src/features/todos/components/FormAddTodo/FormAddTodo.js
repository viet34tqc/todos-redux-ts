import React from 'react';
import'./FormAddTodo.styles.scss'
const FormAddTodo = () => {
	return (
		<form className="todo-form-add">
			<input type="text" placeholder="Add your new todo" />
		</form>
	);
};

export default FormAddTodo;
