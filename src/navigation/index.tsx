import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RnBootSplash from 'react-native-bootsplash';
import Products from '@app/screens/dashboard/products-page';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                style={{ color: 'green' }}
                onPress={() => {
                    navigation.navigate('Dome');
                }}
            >
                Home Screen
            </Text>
        </View>
    );
}

function DomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
            <Text
                onPress={() => {
                    navigation.goBack();
                }}
                style={{ color: 'green' }}
            >
                Dome Screen
            </Text>
        </View>
    );
}

export default function Navigator() {
    return (
        <NavigationContainer
            onReady={() => {
                RnBootSplash.hide();
            }}
        >
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Products}
                    options={{
                        headerShown: false,
                        headerSearchBarOptions: { shouldShowHintSearchIcon: true },
                    }}
                />
                <Stack.Screen
                    name="Dome"
                    component={DomeScreen}
                    options={{
                        //headerShown: false,
                        headerSearchBarOptions: { shouldShowHintSearchIcon: true },

                        headerBackVisible: true,
                        headerShown: true,
                        headerBackTitle: 'back',
                        // headerBackTitleStyle: {},
                        headerTitle: 'red',
                        headerRight: () => <Text style={{ color: 'black' }}>Back</Text>,
                        // statusBarStyle: 'inverted',
                        // headerBackground: () => <View style={{ width: '100%', backgroundColor: 'red' }} />,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
