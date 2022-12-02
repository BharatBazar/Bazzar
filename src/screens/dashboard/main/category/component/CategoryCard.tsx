import * as React from 'react';
import Ripple from 'react-native-material-ripple';
import { fs12, fs14 } from '../../../../../common';
import { black30 } from '../../../../../common/color';
import { AIC, BC, BGCOLOR, BR, BW, FLEX, HP, MT, PH, provideShadow, PV, WP } from '../../../../../common/styles';
import { productCategory } from '../../../../../server/apis/productCatalogue/productCatalogue.interface';
import { FastImageWrapper } from '../../../../components/FastImage';
import WrappedText from '../../../../components/WrappedText';

export interface CategoryCardProps {
    item: productCategory;
    onPress: Function;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ item: { name, description, image }, onPress }) => {
    return (
        <Ripple
            onPress={() => {
                onPress();
            }}
            style={[WP(5), AIC(), PV(0.1), PH(0.2), BC('#eaeaea'), BW(1.5), BR(0), BGCOLOR('#FFFFFF')]}
        >
            <FastImageWrapper source={{ uri: image }} imageStyle={[HP(1), WP(4)]} />
            <WrappedText text={name} textStyle={{ textAlign: 'center' }} fontSize={fs14} />
            <WrappedText
                text={description}
                textStyle={{ textAlign: 'center' }}
                fontSize={fs12}
                textColor={black30}
                numberOfLines={2}
            />
        </Ripple>
    );
};

export default CategoryCard;
