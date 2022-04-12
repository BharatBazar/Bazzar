import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import * as React from 'react';
import { View } from 'react-native';
import { AIC, BC, BGCOLOR, BR, BW, FDR, FLEX, FW, H, HP, JCC, MT, PH, provideShadow } from '@app/utilities/Styles';
import { BRA, FF, HA, MHA, MLA, MRA, MTA, PA, PHA, PVA, WA } from '@app/utilities/StyleWrapper';
import { IShop } from '@app/api/product/product.interface';
import ButtonRippleLeftMaterialIconMiddleTextRightChild from '@app/screens/components/button/ButtonRippleLeftMaterialIconMiddleTextRightChild';
import { FastImageLoaderWithBg } from '@app/screens/components/image/FastImageLoaderWithBg';
import { FontFamily } from '@app/utilities/FontFamily';

interface ItemDetailsProps {}

const ItemDetails: React.FunctionComponent<ItemDetailsProps> = () => {
    return (
        <View style={[BGCOLOR(Colors.white), provideShadow(2), MTA(5), PA()]}>
            <TextBasic text="Product Details" fontFamily={FontFamily.SemiBold} fontSize={16} />
            <View style={[FDR(), AIC(), JCC('space-between'), MTA()]}>
                <TextBasic
                    text="- Brand"
                    textColor={Colors.subHeading}
                    textStyle={{ flex: 1, fontSize: 14 }}
                    fontFamily={FontFamily.Regular}
                />
                <TextBasic
                    text="Adidas"
                    textStyle={{ flex: 1, fontSize: 14 }}
                    textColor={Colors.blackShadePrimary}
                    fontFamily={FontFamily.SemiBold}
                />
            </View>
            <View style={[FDR(), AIC(), JCC('space-between'), MTA()]}>
                <TextBasic
                    text="- Pattern"
                    textColor={Colors.subHeading}
                    textStyle={{ flex: 1, fontSize: 14 }}
                    fontFamily={FontFamily.Regular}
                />
                <TextBasic
                    text="Damaged"
                    textStyle={{ flex: 1, fontSize: 14 }}
                    textColor={Colors.blackShadePrimary}
                    fontFamily={FontFamily.SemiBold}
                />
            </View>
            <View style={[FDR(), AIC(), JCC('space-between'), MTA()]}>
                <TextBasic
                    text="- Fit"
                    textColor={Colors.subHeading}
                    textStyle={{ flex: 1, fontSize: 14 }}
                    fontFamily={FontFamily.Regular}
                />
                <TextBasic
                    text="Slim"
                    textStyle={{ flex: 1, fontSize: 14 }}
                    textColor={Colors.blackShadePrimary}
                    fontFamily={FontFamily.SemiBold}
                />
            </View>
            <View style={[FDR(), AIC(), JCC('space-between'), MTA()]}>
                <TextBasic
                    text="- Washable"
                    textColor={Colors.subHeading}
                    textStyle={{ flex: 1, fontSize: 14 }}
                    fontFamily={FontFamily.Regular}
                />
                <TextBasic
                    text="Yes"
                    textStyle={{ flex: 1, fontSize: 14 }}
                    textColor={Colors.blackShadePrimary}
                    fontFamily={FontFamily.SemiBold}
                />
            </View>
        </View>
    );
};

export default ItemDetails;
