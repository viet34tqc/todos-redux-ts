import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import FormAddTodo from './features/todos/components/FormAddTodo';
import TodoFilter from './features/todos/components/TodoFilter';
import TodoList from './features/todos/components/TodoList';

function App() {
	return (
		<div className="App">
			<Header />
			<Main>
				<FormAddTodo />
				<TodoList />
				<TodoFilter />
			</Main>
		</div>
	);
}

export default App;
