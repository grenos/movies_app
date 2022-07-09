import React from 'react';
import {
    TransitionPresets,
    createStackNavigator,
} from '@react-navigation/stack';
import { MoviesScreen, MovieDetailScreen, FavoriteList } from '@Screens';
import { IMovie } from '@Types';

export type RootStackParamListMovies = {
    Movies: undefined;
    Movie: { movie: IMovie };
    Favorites: undefined;
};

const Movies = createStackNavigator<RootStackParamListMovies>();

export const MovieStack = () => {
    return (
        <Movies.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
            }}>
            <Movies.Group>
                <Movies.Screen
                    name="Movies"
                    component={MoviesScreen}
                    options={{ headerShown: false }}
                />

                <Movies.Screen
                    name="Movie"
                    component={MovieDetailScreen}
                    options={{ headerShown: false }}
                />

                <Movies.Screen
                    name="Favorites"
                    component={FavoriteList}
                    options={{ headerShown: false }}
                />
            </Movies.Group>
        </Movies.Navigator>
    );
};
