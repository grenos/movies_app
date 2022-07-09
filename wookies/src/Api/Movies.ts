import { headers, endpoints } from '@Utils';

export const fetchMovies = async () => {
    const url = endpoints.base + endpoints.movies;
    const res = await fetch(url, headers);
    return res.json();
};

export const searchMovies = async (movie: String) => {
    const url = endpoints.base + endpoints.movies + endpoints.search + movie;
    var res = await fetch(url, headers);
    return res.json();
};
