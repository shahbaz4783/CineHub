import { createSlice } from '@reduxjs/toolkit';

interface homeState {
	url: object;
	genres: object;
}

const initialState: homeState = {
	url: {},
	genres: {},
};

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		getApiConfig: (state, action) => {
			state.url = action.payload;
		},
		getGenres: (state, action) => {
			state.genres = action.payload;
		},
	},
});

export const { getApiConfig, getGenres } = homeSlice.actions;
export default homeSlice.reducer;
