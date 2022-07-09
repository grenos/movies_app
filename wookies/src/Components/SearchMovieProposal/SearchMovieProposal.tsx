import React, { FC, useMemo } from 'react';
import { isUndefined } from 'lodash';
import { useAppSelector } from '@Storage/Redux';
import { getSuggestedMovie } from '@Storage/Redux/Selectors';
import { getMovieProposal, useTheme } from '@Utils';
import { CustomView, MovieListItem } from '@Components';
import { IMovie } from '@Types';

type Props = {
    text: string;
    action: (movie: IMovie) => void;
};

export const SearchMovieProposal: FC<Props> = ({ text, action }) => {
    const theme = useTheme();

    const movieProposal = useAppSelector(state =>
        getSuggestedMovie(state, text),
    );

    const onMoviePress = (movie: IMovie) => {
        action(movie);
    };

    const getStyle = useMemo(
        () =>
            getMovieProposal(
                isUndefined(movieProposal) ? '' : movieProposal?.genres[0],
            ),
        [movieProposal],
    );

    return (
        <>
            <CustomView bg={theme.constants.transparent} pv={20}>
                {getStyle}
            </CustomView>

            {movieProposal && (
                <MovieListItem
                    item={movieProposal}
                    onMoviePress={onMoviePress}
                />
            )}
        </>
    );
};
