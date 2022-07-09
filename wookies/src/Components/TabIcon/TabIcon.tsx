import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@Utils';

type Props = {
    focused: boolean;
    size: number;
    title: string;
};

export const TabIcon: FC<Props> = ({ focused, size, title }) => {
    const theme = useTheme();
    return (
        <Icon
            name={
                focused
                    ? `${title.toLocaleLowerCase()}-sharp`
                    : `${title.toLocaleLowerCase()}-outline`
            }
            size={size}
            color={theme.tabicon}
        />
    );
};
