import { realmContext, RMovie } from '@Storage/Realm';
const { useQuery } = realmContext;

export const useFavorites = () => {
    const movies = useQuery(RMovie);
    return movies;
};
