import React, { FC, memo } from 'react';
import FastImage from 'react-native-fast-image';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IMovie } from '@Types';
import { CustomView } from '@Components';

type Props = {
    item: IMovie;
    onMoviePress: (movie: IMovie) => void;
};

export const MovieListItem: FC<Props> = memo(({ item, onMoviePress }) => {
    const onPosterPress = () => {
        onMoviePress(item);
    };

    return (
        <TouchableOpacity onPress={onPosterPress}>
            <CustomView mh={5}>
                <FastImage
                    source={{
                        uri: item.poster,
                        cache: FastImage.cacheControl.immutable,
                    }}
                    style={s.posterContainer}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </CustomView>
        </TouchableOpacity>
    );
});

const s = StyleSheet.create({
    posterContainer: {
        width: 150,
        height: 220,
    },
});
