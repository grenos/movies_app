import React, { FC, useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamListMovies } from '@Navigation/Stacks';
import { IMovie, IMovies } from '@Types';
import { Constants } from '@Utils';
import { ListPlaceholder } from './ListPlaceholder';
import { MovieListItem } from '@Components';

type Props = { movieCategory: IMovies };
type NavProps = StackNavigationProp<RootStackParamListMovies, 'Movie'>;

export const MovieList: FC<Props> = ({ movieCategory }) => {
    const nav = useNavigation<NavProps>();

    const onMoviePress = useCallback(
        (movie: IMovie) => nav.navigate(Constants.selectedMovie, { movie }),
        [nav],
    );

    return (
        <FlatList
            initialNumToRender={2}
            maxToRenderPerBatch={2}
            windowSize={2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={s.contentContainer}
            ListEmptyComponent={ListPlaceholder}
            horizontal
            data={movieCategory.movies}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <MovieListItem item={item} onMoviePress={onMoviePress} />
            )}
        />
    );
};

const s = StyleSheet.create({
    contentContainer: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 40,
    },
});
