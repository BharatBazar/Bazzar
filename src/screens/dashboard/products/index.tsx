import BasicHeader from '@app/screens/components/header/BasicHeader';
import Colors, { mainColor } from '@app/utilities/Colors';
import { STATUS_BAR_HEIGHT } from '@app/utilities/Dimensions';
import { FontFamily } from '@app/utilities/FontFamily';
import { BGCOLOR, FLEX } from '@app/utilities/Styles';

import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { StatusBar, Text, View, NativeModules, SafeAreaView, ScrollView, Platform } from 'react-native';
import FilterPopup from '../filter/FilterPopup';
import FilterUi from '../filter/FilterUi';

interface ProductsProps {
    navigation: StackNavigationProp;
}

const Products: React.FunctionComponent<ProductsProps> = ({ navigation }) => {
    React.useEffect(() => {
        Platform.OS == 'android' && StatusBar.setBackgroundColor(mainColor);
        StatusBar.setBarStyle('dark-content');
    }, []);
    return (
        <SafeAreaView style={[FLEX(1), BGCOLOR(Colors.white)]}>
            <ScrollView>
                <BasicHeader title="Mens Jeans" />
                <FilterUi />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Products;
