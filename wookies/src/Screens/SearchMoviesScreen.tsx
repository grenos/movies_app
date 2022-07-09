import React, { useCallback, useState } from 'react';
import { Platform } from 'react-native';
import {
    CustomSafeArea,
    CustomStatusBar,
    CustomText,
    CustomView,
    SeachMovieInput,
    SearchMovieList,
    Spacer,
} from '@Components';
import { useSearchMovies } from '@Utils';

export const SearchMoviesScreen = () => {
    const [text, onChangeText] = useState('');
    const { data } = useSearchMovies(text);

    const onIconPress = useCallback(() => onChangeText(''), []);

    return (
        <>
            <CustomStatusBar translucent />
            <CustomSafeArea />
            <Spacer height={Platform.OS === 'android' ? 40 : 0} />

            <CustomView ph={20}>
                <CustomText font="title" bold>
                    Search Movies
                </CustomText>

                <SeachMovieInput
                    onChangeText={onChangeText}
                    onIconPress={onIconPress}
                    text={text}
                />
            </CustomView>

            <SearchMovieList data={data} text={text} />
        </>
    );
};
