import { useEffect, useState } from 'react';
import { realmContext, RMovie } from '@Storage/Realm';
const { useQuery } = realmContext;

export const useGetFavoritesStatus = () => {
    const movies = useQuery(RMovie);
    const [hasFavorites, setHasFavorites] = useState(false);

    useEffect(() => {
        setHasFavorites(!!movies.length);
    }, [movies]);

    return hasFavorites;
};
