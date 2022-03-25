import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RnBootSplash from 'react-native-bootsplash';
import Products from '@app/screens/dashboard/products';
import { colorCode, mainColor } from '@app/utilities/Colors';
import { NavigationKey } from './navigation-data';

const Stack = createNativeStackNavigator();

function DomeScreen({ navigation }) {
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
            <Stack.Navigator initialRouteName={NavigationKey.ShowProduct} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={NavigationKey.ShowProduct} component={Products} />
                <Stack.Screen name="Dome" component={DomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
