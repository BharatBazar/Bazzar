import { IShop } from '@app/api/product/product.interface';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { GENERAL_BORDER_RADIUS, GENERAL_BOUNDARY_SPACE } from '@app/utilities/Dimensions';
import { FontFamily } from '@app/utilities/FontFamily';
import { BGCOLOR, FDR, provideShadow } from '@app/utilities/Styles';
import * as React from 'react';
import { Image, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

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
                        borderRadius: GENERAL_BORDER_RADIUS,

                        marginTop: GENERAL_BOUNDARY_SPACE,
                        borderWidth: 0.2,
                        borderColor: Colors.light,

                        overflow: 'hidden',
                    },
                    BGCOLOR('#FFFFFF'),
                    provideShadow(1),

                    FDR(),
                    { width: '100%' },
                ]}
                onPress={() => {
                    onPress();
                }}
            >
                <View
                    style={{
                        backgroundColor: '#f8f8f8',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: GENERAL_BOUNDARY_SPACE,
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        height: 130,
                    }}
                >
                    <Image
                        source={{ uri: 'https://source.unsplash.com/user/c_v_r' }}
                        style={{ height: 80, width: 130, borderRadius: 5 }}
                    />
                </View>
                <View style={{ padding: 5 }}>
                    <TextBasic text={item.shopName} fontSize={14} fontFamily={FontFamily.SemiBold} />

                    <View style={{ marginTop: 5 }} />
                    <TextBasic text="Owned By" fontSize={8} />
                    <TextBasic text="Aashish Bothra" />

                    <View style={{ marginTop: 5 }} />
                    <TextBasic text="144 products..." />
                </View>
            </Ripple>
        );
    } else {
        return <View />;
    }
};

export default ShopCard;
