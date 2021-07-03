import { createSlice } from '@reduxjs/toolkit';

export const FilterStatus = {
	All: 'All',
	Active: 'Active',
	Completed: 'Completed',
};

const initialState = {
	status: FilterStatus.All,
	colors: [],
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {},
});

export default filtersSlice.reducer;
