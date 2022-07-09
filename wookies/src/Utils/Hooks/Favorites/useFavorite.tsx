import { useCallback, useEffect, useState } from 'react';
import { IMovie } from '@Types';
import { setState } from '@Utils/Helpers';
import { realmContext, RMovie } from '@Storage/Realm';
const { useRealm, useObject } = realmContext;

export const useFavorite = (movieId: string) => {
    const realm = useRealm();
    const Rmovie = useObject(RMovie, movieId);

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        setIsFavorite(!!Rmovie);
    }, [Rmovie]);

    const add = useCallback(
        (movie: IMovie) => {
            /*
                This should be regarded as a temporary fix/hack because we don't always
                recieve the same types from the api
            */
            let obj = { ...movie };
            obj.timeAdded = new Date().toISOString();
            obj.director =
                typeof obj.director === 'object'
                    ? obj.director
                    : [obj.director];

            realm.write(() => {
                realm.create(RMovie.name, obj);
            });
        },
        [realm],
    );

    const remove = useCallback(() => {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey(RMovie.name, movieId));
        });
    }, [realm, movieId]);

    const onFavoritePress = useCallback(
        movie => {
            try {
                isFavorite ? remove() : add(movie);

                setIsFavorite(prev => setState(prev, !prev));
            } catch (error) {
                console.log(error);
            }
        },
        [isFavorite, add, remove],
    );

    return { isFavorite, onFavoritePress };
};
