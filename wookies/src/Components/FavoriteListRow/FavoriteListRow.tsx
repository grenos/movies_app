import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RMovie, realmContext } from '@Storage/Realm';
import { CustomIcon, CustomText, CustomView, Spacer } from '@Components';
import { Constants, timeSince, useTheme } from '@Utils';
import { RootStackParamListMovies } from '@Navigation/Stacks';
const { useRealm } = realmContext;

type Props = {
    item: RMovie;
};

type NavProps = StackNavigationProp<RootStackParamListMovies, 'Movie'>;

export const FavoriteListRow: FC<Props> = ({ item }) => {
    const theme = useTheme();
    const nav = useNavigation<NavProps>();
    const realm = useRealm();

    const onMoviePress = (movie: RMovie) => {
        nav.navigate(Constants.selectedMovie, { movie });
    };

    const onDelete = (_movie: RMovie) => {
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey(RMovie.name, _movie.id));
        });
    };

    return (
        <>
            <CustomView
                dir="row"
                ph={35}
                pv={25}
                bg={theme.constants.transparent}>
                <TouchableOpacity
                    onPress={() => onMoviePress(item)}
                    style={s.row}>
                    <FastImage
                        source={{
                            uri: item.poster,
                            cache: FastImage.cacheControl.immutable,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                        style={s.imageContainer}
                    />
                    <CustomView w={75} ph={10} bg={theme.constants.transparent}>
                        <CustomText font="body" bold>
                            {item.title}
                        </CustomText>
                        <Spacer height={10} />
                        <CustomText font="body" italic>
                            {timeSince(item.timeAdded!)}
                        </CustomText>
                    </CustomView>

                    <CustomIcon
                        size={26}
                        name={'trash-outline'}
                        pressable
                        absolute
                        b={0}
                        r={0}
                        action={() => onDelete(item)}
                    />
                </TouchableOpacity>
            </CustomView>
        </>
    );
};

const s = StyleSheet.create({
    imageContainer: {
        width: 80,
        height: 120,
    },
    row: { flexDirection: 'row' },
});
