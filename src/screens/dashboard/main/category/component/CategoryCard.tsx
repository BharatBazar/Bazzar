import * as React from 'react';
import Ripple from 'react-native-material-ripple';
import Colors, { black30 } from '@app/utilities/Colors';
import { AIC, BC, BGCOLOR, BR, BW, FLEX, HP, MT, PH, provideShadow, PV, WP } from '@app/utilities/Styles';

import { FastImageLoaderWithBg } from '@app/screens/components/image/FastImageLoaderWithBg';
import TextBasic from '@app/screens/components/text/TextBasic';
import { catalogueData } from '@app/api/catalogue/catalogue.interface';
import HeaderWithTitleAndSubHeading from '@app/screens/components/header/HeaderWithTitleAndSubHeading';
import { BRA, MLA, MTA } from '@app/utilities/StyleWrapper';

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
            style={[
                WP(4.5),
                AIC(),
                PV(0.1),
                PH(0.2),
                // BC(Colors.borderColorPrimary),
                // { borderLeftWidth: 0.5, borderTopWidth: 0.5 },
                BGCOLOR('#FFFFFF'),
                BRA(),
                provideShadow(3),
                MTA(),
                MLA(),
            ]}
        >
            <FastImageLoaderWithBg source={{ uri: image }} style={[HP(1), WP(2)]} />

            <HeaderWithTitleAndSubHeading
                heading={type.split('_').join(' ')}
                subHeading={description}
                headerStyle={{ textAlign: 'center', fontSize: 12 }}
                subHeaderStyle={{ textAlign: 'center', fontSize: 10 }}
            />
        </Ripple>
    );
};

export default CategoryCard;
