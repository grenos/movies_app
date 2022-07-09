import React, { FC, memo, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { CustomText, CustomView, Spacer } from '@Components';
import { IMovie } from '@Types';
import { getYear } from '@Utils';

type Props = {
    selectedMovie: IMovie;
};

export const MovieDetailBody: FC<Props> = memo(({ selectedMovie }) => {
    const realeaseDate = useMemo(() => {
        return getYear(selectedMovie.released_on);
    }, [selectedMovie]);

    return (
        <>
            <CustomView style={s.infoContainer}>
                <CustomText font="body">
                    {realeaseDate} | {selectedMovie.length} |{' '}
                    {selectedMovie.director}
                </CustomText>
            </CustomView>

            <Spacer height={20} />

            <CustomView style={s.ph}>
                <CustomText font="body" bold>
                    Cast
                </CustomText>
                <CustomText font="body" italic>
                    {selectedMovie.cast}
                </CustomText>

                <Spacer height={20} />

                <CustomText font="body" bold>
                    Movie Description
                </CustomText>

                <CustomText font="body" italic>
                    {selectedMovie.overview}
                </CustomText>
            </CustomView>
        </>
    );
});

const s = StyleSheet.create({
    ph: {
        paddingHorizontal: 20,
    },
    infoContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        width: '90%',
    },
});
