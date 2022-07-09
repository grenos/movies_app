import React, { memo, FC, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { IMovie } from '@Types';
import { CustomIcon } from '@Components';
import { Constants, useTheme, useFavorite } from '@Utils';

type Props = {
    selectedMovie: IMovie;
};

export const MovieDetailHero: FC<Props> = memo(({ selectedMovie }) => {
    const theme = useTheme();
    const nav = useNavigation();

    const { isFavorite, onFavoritePress } = useFavorite(selectedMovie.id);

    const onBackPress = useCallback(() => {
        nav.goBack();
    }, [nav]);

    return (
        <>
            <FastImage
                source={{
                    uri: selectedMovie.backdrop,
                    cache: FastImage.cacheControl.immutable,
                }}
                resizeMode={FastImage.resizeMode.cover}
                style={s.hero}
            />
            <View style={s.overlay} />

            <CustomIcon
                absolute
                color={theme.constants.light}
                l={20}
                t={60}
                pressable
                name={Constants.back}
                size={30}
                action={onBackPress}
            />

            <CustomIcon
                absolute
                r={20}
                t={60}
                pressable
                name={isFavorite ? Constants.heartFilled : Constants.heartEmpty}
                color={theme.constants.heart}
                size={30}
                action={() => onFavoritePress(selectedMovie)}
            />
        </>
    );
});

const s = StyleSheet.create({
    hero: { height: 280, width: '100%' },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        height: 280,
        width: '100%',
    },
});
