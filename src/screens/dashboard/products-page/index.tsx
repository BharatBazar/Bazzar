import Navigator from '@app/navigation';
import Colors from '@app/utilities/Colors';
import { BGCOLOR, FLEX } from '@app/utilities/Styles';

import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { FlatList, Platform, Text, View, TouchableHighlight } from 'react-native';

interface ProductsProps {
    navigation: StackNavigationProp;
}

const Products: React.FunctionComponent<ProductsProps> = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({ title: `Your Updated Title` });
    }, []);
    return <View style={[FLEX(1), BGCOLOR(Colors.white)]}></View>;
};

export default Products;
