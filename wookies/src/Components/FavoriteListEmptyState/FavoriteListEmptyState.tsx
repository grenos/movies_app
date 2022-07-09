import React from 'react';
import { StyleSheet } from 'react-native';
import { CustomText, CustomView } from '@Components';

export const FavoriteListEmptyState = () => {
    return (
        <CustomView style={s.container}>
            <CustomText font="body" bold>
                No favorites yet
            </CustomText>
        </CustomView>
    );
};

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});
