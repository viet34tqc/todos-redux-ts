import {
	createAsyncThunk,
	createSelector,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import { client } from '../../api/client';
import { RootState } from '../../app/store';
import { FilterStatus } from '../filters/filters.slice';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
	const response = await client.get('fakeApi/todos');
	return response.todos;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
	const response = await client.post('/fakeApi/todos', { todo: { text } });
	return response.todo;
});

interface TodosState {
	status: 'idle' | 'loading';
	entities: { [key: string]: TodoState };
}

interface TodoState {
	id: number;
	color: string;
	text: string;
	completed: boolean;
	status: string;
}

const initialState: TodosState = {
	status: 'idle',
	entities: {},
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		toggleTodo(state: TodosState, action: PayloadAction<number>) {
			const todo = state.entities[action.payload];
			todo.completed = !todo.completed;
		},
		deleteTodo(state: TodosState, action: PayloadAction<number>) {
			delete state.entities[action.payload];
		},
		selectTodoColor: {
			reducer: (
				state: TodosState,
				action: PayloadAction<{ todoId: number; color: string }>
			) => {
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
		markAllCompleted: (state: TodosState, action: PayloadAction<any>) => {
			Object.values(state.entities).forEach((todo: TodoState) => {
				todo.completed = true;
			});
		},
		clearCompleted: (state: TodosState, action) => {
			Object.values(state.entities).forEach((todo: TodoState) => {
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
			.addCase(fetchTodos.fulfilled, (state: TodosState, action) => {
				action.payload.forEach((todo: TodoState) => {
					state.entities[todo.id] = todo;
				});
				state.status = 'idle';
			})
			.addCase(addTodo.fulfilled, (state: TodosState, action) => {
				state.entities[action.payload.id] = action.payload;
			});
	},
});

export const selectAll = (state: RootState) => {
	return Object.values(state.todos.entities);
};

export const selectFilterdTodos = createSelector(
	// Input: selectors
	selectAll,
	(state) => state.filters,
	(todos: TodoState[], filters) => {
		const { status, colors } = filters;
		const isAllStatus = status === FilterStatus.All;
		const isCompletedStatus = status === FilterStatus.Completed;

		if (isAllStatus && !colors.length) {
			return todos;
		}

		return todos.filter((todo: TodoState) => {
			const isStatusMatches =
				todo.completed === isCompletedStatus || isAllStatus;
			const isColorsMatches =
				colors.includes(todo.color) || colors.length === 0;
			return isColorsMatches && isStatusMatches;
		});
	}
);

export const {
	toggleTodo,
	deleteTodo,
	selectTodoColor,
	markAllCompleted,
	clearCompleted,
} = todosSlice.actions;

export default todosSlice.reducer;
