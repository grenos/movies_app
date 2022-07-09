import React, { useCallback } from 'react';
import { FlatList, Platform, StyleSheet } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Constants, useFavorites, useTheme } from '@Utils';
import {
    CustomIcon,
    CustomSafeArea,
    CustomStatusBar,
    CustomText,
    CustomView,
    FavoriteListEmptyState,
    FavoriteListRow,
    FavoriteListRowSeperator,
    Spacer,
} from '@Components';

export const FavoriteList = () => {
    const bottom = useBottomTabBarHeight();
    const theme = useTheme();
    const favorites = useFavorites();
    const nav = useNavigation();

    const onBackPress = useCallback(() => {
        nav.goBack();
    }, [nav]);

    return (
        <>
            <CustomStatusBar translucent />
            <CustomSafeArea />

            <Spacer height={Platform.OS === 'android' ? 40 : 0} />

            <CustomView style={s.centered}>
                <CustomIcon
                    color={theme.text}
                    pressable
                    name={Constants.back}
                    size={35}
                    action={onBackPress}
                />
                <CustomText font="title" bold>
                    My Favorites
                </CustomText>
            </CustomView>

            <Spacer height={20} />

            <FlatList
                contentContainerStyle={{ paddingBottom: bottom }}
                showsVerticalScrollIndicator={false}
                data={favorites.toJSON()}
                keyExtractor={movie => movie.id}
                renderItem={({ item }) => <FavoriteListRow item={item} />}
                ItemSeparatorComponent={FavoriteListRowSeperator}
                ListEmptyComponent={FavoriteListEmptyState}
            />
        </>
    );
};

const s = StyleSheet.create({
    centered: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
