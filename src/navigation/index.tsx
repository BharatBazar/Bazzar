import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RnBootSplash from 'react-native-bootsplash';
import Products from '@app/screens/dashboard/products';
import { colorCode, mainColor } from '@app/utilities/Colors';

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
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <View />,
            title: 'Dome',
            headerStyle: {
                backgroundColor: 'red',
            },

            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        });
    }, [navigation]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Products} />
                <Stack.Screen name="Dome" component={DomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
