import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { CustomText, CustomView } from '@Components';
import { moviesMock } from './Mocks/MovieListMock';

export const MovieListSkeleton = () => {
    return (
        <>
            {moviesMock.map((category, index) => (
                <CustomView key={index.toString()}>
                    <CustomView style={s.genre}>
                        <CustomText font="subTitle">
                            {category.genre}
                        </CustomText>
                    </CustomView>

                    <FlatList
                        contentContainerStyle={s.contentContainer}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={category.movies}
                        keyExtractor={(item: { poster: string }, i: number) =>
                            i.toString()
                        }
                        renderItem={() => (
                            <CustomView mh={5} style={s.posterContainer} />
                        )}
                    />
                </CustomView>
            ))}
        </>
    );
};

const s = StyleSheet.create({
    genre: {
        width: 120,
        marginLeft: 20,
        height: 32,
        backgroundColor: 'gray',
    },
    contentContainer: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 40,
    },
    posterContainer: {
        backgroundColor: 'gray',
        width: 150,
        height: 220,
    },
});
