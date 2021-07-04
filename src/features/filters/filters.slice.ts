import { createSlice } from '@reduxjs/toolkit';

export const FilterStatus = {
	All: 'All',
	Active: 'Active',
	Completed: 'Completed',
};

interface FiltersState {
	status: string;
	colors: string[];
}

const initialState: FiltersState = {
	status: FilterStatus.All,
	colors: [],
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		filterByColor: (state, action) => {
			state.colors = action.payload;
		},
		filterByStatus: (state, action) => {
			state.status = action.payload;
		},
	},
});

export const { filterByColor, filterByStatus } = filtersSlice.actions;
export default filtersSlice.reducer;
