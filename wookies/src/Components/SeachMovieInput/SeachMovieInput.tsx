import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { CustomIcon, CustomView } from '@Components';
import { Constants, useTheme } from '@Utils';

type Props = {
    onChangeText: (text: string) => void;
    onIconPress: () => void;
    text: string;
};

export const SeachMovieInput: FC<Props> = ({
    onChangeText,
    onIconPress,
    text,
}) => {
    const theme = useTheme();

    return (
        <CustomView style={s.containerInner}>
            <TextInput
                style={[s.input, { color: theme.text }]}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search for a movie"
            />

            {text.length > 0 && (
                <CustomIcon
                    style={s.padding}
                    color={theme.text}
                    pressable
                    name={Constants.clean}
                    size={30}
                    action={onIconPress}
                />
            )}
        </CustomView>
    );
};

const s = StyleSheet.create({
    containerInner: {
        height: 50,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    input: {
        position: 'absolute',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 20,
    },
    padding: {
        padding: 10,
    },
});
