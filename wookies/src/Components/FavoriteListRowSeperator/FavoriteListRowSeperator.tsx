import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@Utils';

export const FavoriteListRowSeperator = () => {
    const theme = useTheme();
    return <View style={[s.seperator, { backgroundColor: theme.text }]} />;
};

const s = StyleSheet.create({
    seperator: {
        width: '90%',
        height: 1,
    },
});
