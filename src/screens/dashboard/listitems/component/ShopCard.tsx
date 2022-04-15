import { IShop } from '@app/api/product/product.interface';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { GENERAL_BORDER_RADIUS, GENERAL_BOUNDARY_SPACE } from '@app/utilities/Dimensions';
import { FontFamily } from '@app/utilities/FontFamily';
import { BGCOLOR, FDR, provideShadow } from '@app/utilities/Styles';
import { PA, PHA } from '@app/utilities/StyleWrapper';
import * as React from 'react';
import { Image, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import ShopDetails from '../product/component/ShopDetails';

interface ShopCardProps {
    item: IShop;
    onPress: Function;
}

const ShopCard: React.FunctionComponent<ShopCardProps> = ({ item, onPress }) => {
    if (item._id) {
        return (
            <Ripple
                style={[
                    {
                        borderWidth: 0.2,
                        borderColor: Colors.light,

                        overflow: 'hidden',
                    },
                    BGCOLOR('#FFFFFF'),

                    FDR(),
                    { width: '100%' },
                ]}
                onPress={() => {
                    onPress();
                }}
            >
                <ShopDetails shop={item} />
            </Ripple>
        );
    } else {
        return <View />;
    }
};

export default ShopCard;
