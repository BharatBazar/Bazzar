import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RnBootSplash from 'react-native-bootsplash';
import Products from '@app/screens/dashboard/listitems';
import { NavigationKey } from './navigation-data';
import ProductDetails from '@app/screens/dashboard/listitems/product/Product';
import ShopItem from '@app/screens/dashboard/listitems/shop/Shop';
import Dashboard from '@app/screens/dashboard/main/Dashboard';

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer
            onReady={() => {
                RnBootSplash.hide();
            }}
        >
            <Stack.Navigator initialRouteName={NavigationKey.Home} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={NavigationKey.Home} component={Dashboard} />
                <Stack.Screen name={NavigationKey.ListItems} component={Products} />
                <Stack.Screen name={NavigationKey.ShowProduct} component={ProductDetails} />
                <Stack.Screen name={NavigationKey.ListItemsInShop} component={ShopItem} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
