import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import filtersReducer from '../features/filters/filters.slice';
import todosReducer from '../features/todos/todos.slice';
export const store = configureStore({
	reducer: {
		todos: todosReducer,
		filters: filtersReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
