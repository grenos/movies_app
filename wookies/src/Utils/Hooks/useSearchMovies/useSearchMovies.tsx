import { useQuery } from 'react-query';
import { IMovie } from '@Types';
import { searchMovies } from '@Api';

type Result = {
    movies: IMovie[];
};

export const useSearchMovies = (movie: string) => {
    const { data } = useQuery<Result, []>(
        ['SearchMovies', movie],
        async () => await searchMovies(movie),
        {
            refetchOnMount: false,
            enabled: Boolean(movie),
            staleTime: Infinity,
        },
    );

    return { data: data?.movies };
};
