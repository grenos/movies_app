import { createSlice } from '@reduxjs/toolkit';
import { IMovie } from '@Types';
import { getMovies } from '../Actions';

export interface MoviesState {
    movies: IMovie[];
    loading: boolean;
    currentRequestId?: string;
}

const initialState: MoviesState = {
    movies: [],
    loading: false,
    currentRequestId: undefined,
};

export const MoviesSlice = createSlice({
    name: 'Movies',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder.addCase(getMovies.pending, (state, action) => {
            state.loading = true;
            state.currentRequestId = action.meta.requestId;
        });
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.currentRequestId = undefined;
            state.movies = action.payload;
        });
    },
});
