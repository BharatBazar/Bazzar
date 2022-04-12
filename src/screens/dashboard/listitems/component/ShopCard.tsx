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
            <ShopDetails shop={item} />
            // <Ripple
            //     style={[
            //         {
            //             borderWidth: 0.2,
            //             borderColor: Colors.light,

            //             overflow: 'hidden',
            //         },
            //         BGCOLOR('#FFFFFF'),

            //         FDR(),
            //         { width: '100%' },
            //     ]}
            //     onPress={() => {
            //         onPress();
            //     }}
            // >
            //     <View
            //         style={{
            //             backgroundColor: '#f8f8f8',
            //             alignItems: 'center',
            //             justifyContent: 'center',
            //             paddingHorizontal: GENERAL_BOUNDARY_SPACE,

            //             height: 130,
            //         }}
            //     >
            //         <Image
            //             source={{ uri: 'https://source.unsplash.com/user/c_v_r' }}
            //             style={{ height: 80, width: 130, borderRadius: 5 }}
            //         />
            //     </View>
            //     <View style={[PA()]}>
            //         <TextBasic
            //             text={item.shopName}
            //             fontSize={14}
            //             fontFamily={FontFamily.Light}
            //             textColor={Colors.primary}
            //         />

            //         <View style={{ marginTop: 5 }} />
            //         <TextBasic text="Owned By" fontSize={8} fontFamily={FontFamily.Light} />
            //         <TextBasic text="Mr. Aashish Bothra" fontFamily={FontFamily.Regular} />

            //         <View style={{ marginTop: 5 }} />
            //         <TextBasic text="144 products..." />
            //     </View>
            // </Ripple>
        );
    } else {
        return <View />;
    }
};

export default ShopCard;
