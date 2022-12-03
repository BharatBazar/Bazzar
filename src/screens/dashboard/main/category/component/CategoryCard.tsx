import * as React from 'react';
import Ripple from 'react-native-material-ripple';
import { black30 } from '@app/utilities/Colors';
import { AIC, BC, BGCOLOR, BR, BW, FLEX, HP, MT, PH, provideShadow, PV, WP } from '@app/utilities/Styles';

import { FastImageLoaderWithBg } from '@app/screens/components/image/FastImageLoaderWithBg';
import TextBasic from '@app/screens/components/text/TextBasic';
import { catalogueData } from '@app/api/catalogue/catalogue.interface';

export interface CategoryCardProps {
    item: catalogueData;
    onPress: Function;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    item: { customer_name: name, customer_description: description, customer_image: image, type },
    onPress,
}) => {
    return (
        <Ripple
            onPress={() => {
                onPress();
            }}
            style={[WP(5), AIC(), PV(0.1), PH(0.2), BC('#eaeaea'), BW(1.5), BR(0), BGCOLOR('#FFFFFF')]}
        >
            <FastImageLoaderWithBg source={{ uri: image }} style={[HP(2), WP(2)]} />
            <TextBasic text={type.split('_').join(' ')} textStyle={{ textAlign: 'center' }} fontSize={14} />
            <TextBasic
                text={description}
                textStyle={{ textAlign: 'center' }}
                fontSize={12}
                textColor={black30}
                numberOfLines={2}
            />
        </Ripple>
    );
};

export default CategoryCard;
