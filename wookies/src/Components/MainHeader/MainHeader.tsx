import React, { memo, useCallback } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamListMovies } from '@Navigation/Stacks';
import { CustomIcon, CustomText, CustomView, Spacer } from '@Components';
import { Constants, useGetFavoritesStatus, useTheme } from '@Utils';

type NavProps = StackNavigationProp<RootStackParamListMovies, 'Favorites'>;

export const MainHeader = memo(() => {
    const theme = useTheme();
    const nav = useNavigation<NavProps>();
    const hasFavorites = useGetFavoritesStatus();

    const onIconPress = useCallback(() => {
        nav.navigate(Constants.favorites);
    }, [nav]);

    return (
        <>
            <Spacer height={Platform.OS === 'android' ? 40 : 0} />

            <View style={s.container}>
                <CustomView w={50} style={theme.constants.centered}>
                    <CustomText bold font="title" align="center">
                        WOOKIE MOVIES
                    </CustomText>
                </CustomView>

                <CustomIcon
                    absolute
                    r={20}
                    pressable
                    color={theme.constants.heart}
                    name={
                        hasFavorites
                            ? Constants.heartFilled
                            : Constants.heartEmpty
                    }
                    size={30}
                    action={onIconPress}
                />
            </View>
        </>
    );
});

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative',
    },
});
