import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../api/client';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
	const response = await client.get('fakeApi/todos');
	return response.todos;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
	const response = await client.post('/fakeApi/todos', { todo: { text } });
	return response.todo;
});

const initialState = {
	status: 'idle',
	entities: {},
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodos.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				action.payload.forEach((todo) => {
					state.entities[todo.id] = todo;
				});
				state.status = 'idle';
			})
			.addCase(addTodo.fulfilled, (state, action) => {
				state.entities[action.payload.id] = action.payload;
			});
	},
});

export const selectAll = (state) => {
	return Object.values(state.todos.entities);
};

export default todosSlice.reducer;
