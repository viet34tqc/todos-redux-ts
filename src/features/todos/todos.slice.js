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
	reducers: {
		toggleTodo: (state, action) => {
			const todo = state.entities[action.payload];
			todo.completed = !todo.completed;
		},
		deleteTodo: (state, action) => {
			delete state.entities[action.payload];
		},
		selectTodoColor: {
			reducer: (state, action) => {
				const { todoId, color } = action.payload;
				state.entities[todoId].color = color;
			},
			prepare: (todoId, color) => ({
				payload: {
					todoId,
					color,
				},
			}),
		},
		markAllCompleted: (state, action) => {
			Object.values(state.entities).forEach((todo) => {
				todo.completed = true;
			});
		},
		clearCompleted: (state, action) => {
			Object.values(state.entities).forEach((todo) => {
				if (todo.completed) {
					delete state.entities[todo.id];
				}
			});
		},
	},
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

export const {
	toggleTodo,
	deleteTodo,
	selectTodoColor,
	markAllCompleted,
	clearCompleted,
} = todosSlice.actions;

export default todosSlice.reducer;
