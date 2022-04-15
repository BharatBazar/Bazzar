/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Colors from '@app/utilities/Colors';
import Navigator from '@app/navigation';
import { initializeAxios } from '@app/api/apiLayer';

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: '#000000',
        flex: 1,
    };

    React.useMemo(() => {
        initializeAxios();
        return () => {};
    }, []);

    return (
        <View style={backgroundStyle}>
            <StatusBar translucent={true} backgroundColor={'#00000000'} barStyle={'dark-content'} />

            <Navigator />
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
