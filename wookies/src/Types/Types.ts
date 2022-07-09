export interface IMovie {
    poster: string;
    title: string;
    released_on: string;
    length: string;
    imdb_rating: number;
    classification: string;
    cast: string[];
    slug: string;
    genres: string[];
    director: string[];
    backdrop: string;
    overview: string;
    id: string;
    timeAdded?: string;
}

export interface IMovies {
    genre: string;
    movies: IMovie[];
}

export type TMovieListSkeleton = {
    genre: '';
    movies: [{ poster: '' }, { poster: '' }, { poster: '' }];
};
