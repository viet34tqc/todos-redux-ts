import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todos.slice';
export const store = configureStore({
	reducer: {
		todos: todosReducer,
	},
});
