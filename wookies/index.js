import 'react-native-gesture-handler';
import React, { useMemo } from 'react';
import { AppRegistry, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/App';
import { name as appName } from './app.json';
import { realmContext } from '@Storage/Realm';
import { store } from '@Storage/Redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme, useTheme } from '@Utils';

const { RealmProvider } = realmContext;
const queryClient = new QueryClient();

LogBox.ignoreLogs(['The native module for Flipper', 'ViewPropTypes']);

const getTheme = (scheme, colorTheme) => {
    const theme = {
        colors: {
            background: scheme === 'dark' ? colorTheme.dark : colorTheme.light,
            border: scheme === 'dark' ? colorTheme.dark : colorTheme.light,
        },
    };
    return theme;
};

const Main = () => {
    const scheme = useColorScheme();
    const theme = useTheme();
    const colorScheme = useMemo(
        () => getTheme(scheme, theme.constants),
        [scheme, theme],
    );

    return (
        <Provider store={store}>
            <NavigationContainer theme={colorScheme}>
                <RealmProvider>
                    <QueryClientProvider client={queryClient}>
                        <SafeAreaProvider>
                            <App />
                        </SafeAreaProvider>
                    </QueryClientProvider>
                </RealmProvider>
            </NavigationContainer>
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => Main);
