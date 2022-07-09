import React, { FC, useCallback } from 'react';
import { Dimensions, FlatList, Platform, StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { RootStackParamListMovies } from '@Navigation/Stacks';
import { SearchMovieProposal, MovieListItem } from '@Components';
import { Constants } from '@Utils';
import { IMovie } from '@Types';

const windowWidth = Dimensions.get('window').width;
type NavProps = StackNavigationProp<RootStackParamListMovies, 'Movie'>;

type Props = {
    data: IMovie[] | undefined;
    text: string;
};

export const SearchMovieList: FC<Props> = ({ data, text }) => {
    const bottom = useBottomTabBarHeight();
    const nav = useNavigation<NavProps>();

    const onMoviePress = useCallback(
        (movie: IMovie) => nav.navigate(Constants.selectedMovie, { movie }),
        [nav],
    );

    return (
        <FlatList
            data={data}
            numColumns={2}
            columnWrapperStyle={[
                s.columnWrapper,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                    paddingLeft: data && data?.length === 1 ? 20 : 0,
                    justifyContent:
                        data && data?.length > 1
                            ? 'space-evenly'
                            : 'flex-start',
                },
            ]}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <SearchMovieProposal text={text} action={onMoviePress} />
            )}
            contentContainerStyle={[
                s.contentContainer,
                // eslint-disable-next-line react-native/no-inline-styles
                { paddingBottom: Platform.OS === 'ios' ? bottom : 0 },
            ]}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View style={s.pb}>
                    <MovieListItem item={item} onMoviePress={onMoviePress} />
                </View>
            )}
        />
    );
};

const s = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        alignItems: 'center',
    },
    columnWrapper: {
        width: windowWidth,
        alignItems: 'center',
    },
    pb: {
        paddingBottom: 30,
    },
});
