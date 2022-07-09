/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { isEmpty } from 'lodash';
import { CustomText } from '@Components';

export const getMovieProposal = (genre: string) => {
    const styles = [
        'a classic',
        'a thriller',
        'a comedy',
        'some action',
        'some romance',
        'science fiction',
        'a blockbuster',
    ];

    let index = Math.floor(Math.random() * 7);

    return (
        <CustomText font="body" italic style={{ textAlign: 'center' }}>
            In the mood for{' '}
            <Text
                style={{
                    color: getProposalColor(index),
                }}>
                {isEmpty(genre) ? styles[index] : genre}?
            </Text>
        </CustomText>
    );
};

export const getProposalColor = (index: number) => {
    const styles = ['red', 'lime', 'yellow', 'green', 'pink', 'teal', 'purple'];
    return styles[index];
};
