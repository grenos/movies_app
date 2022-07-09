import React from 'react';
import {
    TransitionPresets,
    createStackNavigator,
} from '@react-navigation/stack';
import { SearchMoviesScreen, MovieDetailScreen } from '@Screens';

export type RootStackParamListSearch = {
    SearchMovies: undefined;
    Movie: undefined;
};

const SearchMovies = createStackNavigator<RootStackParamListSearch>();

export const SearchMovieStack = () => {
    return (
        <SearchMovies.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
            }}>
            <SearchMovies.Group>
                <SearchMovies.Screen
                    name="SearchMovies"
                    component={SearchMoviesScreen}
                    options={{ headerShown: false }}
                />

                <SearchMovies.Screen
                    name="Movie"
                    component={MovieDetailScreen}
                    options={{ headerShown: false }}
                />
            </SearchMovies.Group>
        </SearchMovies.Navigator>
    );
};
