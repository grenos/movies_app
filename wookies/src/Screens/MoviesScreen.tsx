import React, { useEffect } from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useAppDispatch, useAppSelector } from '@Storage/Redux';
import {
    getCategorizedMovies,
    getMoviesLoadingState,
} from '@Storage/Redux/Selectors';
import { getMovies } from '@Storage/Redux/Actions';
import {
    CustomSafeArea,
    CustomScrollView,
    CustomStatusBar,
    CustomText,
    CustomView,
    MovieList,
    Spacer,
    MainHeader,
    MovieListSkeleton,
} from '@Components';

export const MoviesScreen = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(getCategorizedMovies);
    const moviesLoadingState = useAppSelector(getMoviesLoadingState);
    const bottom = useBottomTabBarHeight();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <>
            <CustomStatusBar translucent />
            <CustomSafeArea />

            <CustomScrollView contentContainerStyle={{ paddingBottom: bottom }}>
                <MainHeader />
                <Spacer height={20} />

                {/* this should probably be in another component */}
                {moviesLoadingState ? (
                    <MovieListSkeleton />
                ) : (
                    movies.map(category => (
                        <CustomView key={category.genre}>
                            <CustomView mh={20}>
                                <CustomText font="subTitle">
                                    {category.genre}
                                </CustomText>
                            </CustomView>

                            <MovieList movieCategory={category} />
                        </CustomView>
                    ))
                )}
            </CustomScrollView>
        </>
    );
};
