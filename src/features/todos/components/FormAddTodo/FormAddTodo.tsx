import React, { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import Loader from '../../../../components/Loader/Loader';
import { addTodo } from '../../todos.slice';
import './FormAddTodo.styles.scss';
const FormAddTodo = () => {
	const [text, setText] = useState('');
	const [status, setStatus] = useState('idle');
	const dispatch = useAppDispatch();
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus('loading');
		const trimmedText = text.trim();
		await dispatch(addTodo(trimmedText));
		setText('');
		setStatus('idle');
	};
	return (
		<form className="todo-form-add" onSubmit={handleSubmit}>
			<input
				type="text"
				value={text}
				placeholder="Add your new todo"
				onChange={(e) => setText(e.target.value)}
			/>
			{status === 'loading' && <Loader />}
		</form>
	);
};

export default FormAddTodo;
