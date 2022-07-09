import { createSelector } from '@reduxjs/toolkit';
import { shuffle } from 'lodash';
import { RootState } from '../Store';
import { IMovie, IMovies } from '@Types';

const reducer = (state: RootState) => state.moviesSlice;

export const getMovies = createSelector(reducer, state => state.movies);

export const getMoviesLoadingState = createSelector(
    reducer,
    state => state.loading,
);

export const getGenres = createSelector(reducer, state => {
    const { movies } = state;
    let flatten: string[] = [];
    movies.forEach(movie => {
        flatten.push(...movie.genres);
    });
    const uniqueGenres = [...new Set(flatten)];
    return uniqueGenres;
});

export const getCategorizedMovies = createSelector(
    reducer,
    getGenres,
    (state, genres) => {
        const categorizedMovies: IMovies[] = [];
        genres.forEach(genre => {
            const obj = {
                genre,
                movies: shuffle(
                    state.movies.filter(movie => movie.genres.includes(genre)),
                ),
            };
            categorizedMovies.push(obj);
        });

        return categorizedMovies;
    },
);

export const getSuggestedMovie = createSelector(
    [
        (state: RootState) => state.moviesSlice.movies,
        (_, movieTitle) => movieTitle,
    ],
    (movies, movieTitle) => {
        let movie: IMovie | undefined;
        if (movieTitle.length) {
            movie = movies.find((mv: IMovie) => mv.title.includes(movieTitle));
        }
        return movie;
    },
);
