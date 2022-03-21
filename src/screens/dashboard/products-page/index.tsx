import Colors from '@app/utilities/Colors';
import { BGCOLOR, FLEX } from '@app/utilities/Styles';

import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { Text, View } from 'react-native';

interface ProductsProps {
    navigation: StackNavigationProp;
}

const Products: React.FunctionComponent<ProductsProps> = ({ navigation }) => {
    React.useEffect(() => {
        //navigation.setOptions({ title: `Your Updated Title` });
        console.log('something');
    }, []);
    return (
        <View style={[FLEX(1), BGCOLOR(Colors.white)]}>
            <Text style={{ color: 'red', fontSize: 20, fontFamily: 'OpenSans-Light' }}>{'normal tezt'}</Text>
            <Text style={{ color: 'red', fontSize: 20, fontFamily: 'OpenSans-Bold' }}>{'with font amily'}</Text>
        </View>
    );
};

export default Products;
