import React, { ReactElement } from 'react';
import { CustomIcon } from '@Components';

export const getStarRating = (rating: number, mode: string): ReactElement[] => {
    const starValue = rating / 2;
    const showHalf = starValue % 1 !== 0;

    let starElements = [];
    for (let i = 0; i < starValue; i++) {
        starElements.push(
            <CustomIcon
                size={28}
                name={
                    showHalf && i === Math.floor(starValue)
                        ? 'star-half'
                        : 'star'
                }
                key={i}
                color={mode === 'light' ? 'black' : 'yellow'}
            />,
        );
    }
    return starElements;
};
