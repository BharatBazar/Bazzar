import TextBasic from '@app/screens/components/text/TextBasic';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, BGCOLOR, FDR, FLEX, MH, MT, PH, provideShadow } from '@app/utilities/Styles';
import * as React from 'react';
import { Image, View } from 'react-native';

interface ShopCardProps {}

const ShopCard: React.FunctionComponent<ShopCardProps> = () => {
    return (
        <View
            style={[
                { padding: 10, borderRadius: 10 },
                BGCOLOR('#FFFFFF'),
                provideShadow(2),
                MH(0.3),
                FDR(),
                AIC(),
                MT(0.1),
            ]}
        >
            <Image
                source={{ uri: 'https://source.unsplash.com/user/c_v_r' }}
                style={{ height: 100, width: 100, borderRadius: 10 }}
            />
            <View style={{ marginLeft: 10, alignSelf: 'flex-start', flex: 1 }}>
                <TextBasic text="Rush in mens wear" fontSize={16} fontFamily={FontFamily.Regular} />
                <TextBasic text="We provide best jeans in the town latest fashion at best price and quality" />
                <View style={{ marginTop: 5 }} />
                <TextBasic text="Owned By" fontSize={8} />
                <TextBasic text="Aashish Bothra" />
                <View style={{ marginTop: 5 }} />
                <TextBasic text="Co-Owned By" fontSize={8} />

                <TextBasic text="Cherry Bothra, Kailash Kotak" />
                <View style={{ marginTop: 5 }} />
                <TextBasic text="144 products..." />
            </View>
        </View>
    );
};

export default ShopCard;
