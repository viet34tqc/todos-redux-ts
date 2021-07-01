import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../api/client';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
	const response = await client.get('fakeApi/todos');
	return response.todos;
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
				action.payload.forEach( todo => {
					state.entities[todo.id] = todo;
				})
				state.status = 'idle';
			});
	},
});

export default todosSlice.reducer;
