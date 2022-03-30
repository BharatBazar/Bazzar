import { IProduct } from '@app/api/product/product.interface';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import * as React from 'react';
import { Image, View } from 'react-native';

interface ProductCardProps {
    item: IProduct;
}

const ProductCard: React.FunctionComponent<ProductCardProps> = ({ item }) => {
    console.log(item.newcolors2, 'item');
    return (
        <View style={[{ borderWidth: 0.2, borderColor: Colors.light, padding: 10, marginTop: 10, borderRadius: 2 }]}>
            {item.newcolors2 && item.newcolors2.name.map((item) => <TextBasic text={item} textColor={Colors.black} />)}
        </View>
    );
};

export default ProductCard;
