import React, { memo, useMemo, FC } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { CustomText, CustomView, Spacer } from '@Components';
import { getStarRating, useColorScheme, useTheme } from '@Utils';
import { IMovie } from '@Types';

type Props = {
    selectedMovie: IMovie;
};

export const MovieDetailHeader: FC<Props> = memo(({ selectedMovie }) => {
    const theme = useTheme();
    const mode = useColorScheme();

    const starRating = useMemo(
        () => getStarRating(selectedMovie.imdb_rating, mode),
        [selectedMovie, mode],
    );

    return (
        <>
            <FastImage
                source={{
                    uri: selectedMovie.poster,
                    cache: FastImage.cacheControl.immutable,
                }}
                resizeMode={FastImage.resizeMode.cover}
                style={s.poster}
            />

            <CustomView style={s.container} bg={theme.constants.transparent}>
                <CustomText font="body" bold color={theme.constants.light}>
                    {selectedMovie.title}
                </CustomText>

                <Spacer height={5} />
                <CustomText font="body" bold color={theme.constants.light}>
                    Rating: {selectedMovie.imdb_rating.toFixed(1)}
                </CustomText>

                <Spacer height={10} />
                <CustomView
                    style={s.starRatingOuter}
                    bg={theme.constants.transparent}>
                    <CustomView
                        style={s.starRatingContainer}
                        bg={theme.constants.transparent}>
                        {starRating}
                    </CustomView>
                </CustomView>
            </CustomView>
        </>
    );
});

const s = StyleSheet.create({
    poster: {
        width: 120,
        height: 170,
        marginRight: 20,
    },
    container: {
        width: '50%',
        position: 'relative',
    },
    starRatingOuter: {
        position: 'absolute',
        bottom: 0,
    },
    starRatingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
});
