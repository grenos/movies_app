import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamListMovies } from '@Navigation/Stacks';
import {
    CustomScrollView,
    CustomStatusBar,
    CustomView,
    MovieDetailBody,
    MovieDetailHeader,
    MovieDetailHero,
} from '@Components';
import { useTheme } from '@Utils';

type Props = NativeStackScreenProps<RootStackParamListMovies, 'Movie'>;

export const MovieDetailScreen: FC<Props> = ({ route }) => {
    const { movie: selectedMovie } = route.params;

    const bottom = useBottomTabBarHeight();
    const theme = useTheme();

    return (
        <>
            <CustomStatusBar hero transparent />
            <CustomScrollView contentContainerStyle={{ paddingBottom: bottom }}>
                <CustomView>
                    <MovieDetailHero selectedMovie={selectedMovie} />

                    <CustomView
                        bg={theme.constants.transparent}
                        style={s.headerContainer}>
                        <MovieDetailHeader selectedMovie={selectedMovie} />
                    </CustomView>
                </CustomView>

                <CustomView bg={theme.constants.transparent} style={s.transY40}>
                    <MovieDetailBody selectedMovie={selectedMovie} />
                </CustomView>
            </CustomScrollView>
        </>
    );
};

const s = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        transform: [{ translateY: -80 }, { translateX: 20 }],
    },
    transY40: {
        transform: [{ translateY: -40 }],
    },
});
