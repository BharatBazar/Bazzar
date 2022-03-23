import Colors from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { BGCOLOR, FLEX } from '@app/utilities/Styles';

import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { StatusBar, Text, View, NativeModules } from 'react-native';

const { StatusBarManager } = NativeModules;

interface ProductsProps {
    navigation: StackNavigationProp;
}

const Products: React.FunctionComponent<ProductsProps> = ({ navigation }) => {
    React.useEffect(() => {
        //navigation.setOptions({ title: `Your Updated Title` });
        console.log('something', StatusBar.currentHeight, StatusBarManager.HEIGHT);
    }, []);
    return <View style={[FLEX(1), BGCOLOR(Colors.white), { paddingTop: StatusBarManager.HEIGHT }]}></View>;
};

export default Products;
