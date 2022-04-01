import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { getWP } from '@app/utilities/Dimensions';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, BGCOLOR, FDR, FLEX, MH, MT, PH, provideShadow } from '@app/utilities/Styles';
import * as React from 'react';
import { Image, View } from 'react-native';

interface ShopCardProps {
    item: any;
}

const ShopCard: React.FunctionComponent<ShopCardProps> = ({ item }) => {
    if (item._id) {
        return (
            <View
                style={[
                    {
                        borderRadius: 5,

                        marginTop: 10,
                        borderWidth: 0.2,
                        borderColor: Colors.light,

                        overflow: 'hidden',
                    },
                    BGCOLOR('#FFFFFF'),
                    provideShadow(1),

                    FDR(),
                    { width: '100%' },
                ]}
            >
                <View
                    style={{
                        backgroundColor: '#f8f8f8',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 10,
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
            </View>
        );
    } else {
        return <View />;
    }
};

export default ShopCard;
