import BasicHeader from '@app/screens/components/header/BasicHeader';
import Colors, { mainColor } from '@app/utilities/Colors';
import { STATUS_BAR_HEIGHT } from '@app/utilities/Dimensions';
import { FontFamily } from '@app/utilities/FontFamily';
import { BGCOLOR, FLEX } from '@app/utilities/Styles';

import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { StatusBar, Text, View, NativeModules } from 'react-native';

interface ProductsProps {
    navigation: StackNavigationProp;
}

const Products: React.FunctionComponent<ProductsProps> = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <View />,
            title: 'My home',
            headerStyle: {
                backgroundColor: mainColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        });
    }, [navigation]);
    return (
        <View style={[FLEX(1), BGCOLOR(Colors.white)]}>
            <BasicHeader title="Jeans" />
            <Text
                style={{ color: '#000' }}
                onPress={() => {
                    navigation.navigate('Dome');
                }}
            >
                {'navigati'}
            </Text>
        </View>
    );
};

export default Products;
