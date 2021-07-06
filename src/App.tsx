import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import FormAddTodo from './features/todos/components/FormAddTodo/FormAddTodo';
import TodoList from './features/todos/components/TodoList/TodoList';

function App() {
	return (
		<div className="App">
			<Header />
			<Main>
				<FormAddTodo />
				<TodoList />
				<Footer />
			</Main>
		</div>
	);
}

export default App;
