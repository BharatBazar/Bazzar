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

interface ShopDetailsProps {
    shop: IShop;
}

const ShopDetails: React.FunctionComponent<ShopDetailsProps> = ({ shop }) => {
    return (
        <View style={[BGCOLOR(Colors.white), provideShadow(2), MTA(), PA()]}>
            <TextBasic text="Shop Details" fontFamily={FontFamily.SemiBold} fontSize={16} />
            <View style={[FDR(), AIC(), MTA()]}>
                <View style={[AIC()]}>
                    <FastImageLoaderWithBg
                        source={{ uri: 'https://m.media-amazon.com/images/I/71BKJmt+BIL._UL1500_.jpg' }}
                        style={{ height: 100, width: 100, borderRadius: 50, borderWidth: 1 }}
                        resizeMode="cover"
                    />
                    <TextBasic text={shop.shopName} fontFamily={FontFamily.Bold} fontSize={12} />
                </View>
                <View style={[FLEX(1)]}>
                    <View style={[FDR(), JCC('space-evenly'), AIC()]}>
                        <View style={[AIC()]}>
                            <TextBasic text={'53'} textAlign="center" fontSize={15} fontFamily={FontFamily.Bold} />
                            <TextBasic text={'Listings'} textAlign="center" fontSize={14} />
                        </View>
                        <View style={[AIC()]}>
                            <TextBasic text={'100'} textAlign="center" fontSize={15} fontFamily={FontFamily.Bold} />
                            <TextBasic text={'Subscribers'} textAlign="center" fontSize={14} />
                        </View>
                        <View style={[AIC()]}>
                            <TextBasic text={'50'} textAlign="center" fontSize={15} fontFamily={FontFamily.Bold} />
                            <TextBasic text={'Notifiers'} textAlign="center" fontSize={14} />
                        </View>
                    </View>
                    <View style={[AIC()]}>
                        <TextBasic text={shop.shopDescription} fontSize={12} />
                        <TextBasic text={shop.localAddress} fontSize={11} textColor={Colors.subHeading} />
                        <TextBasic text={shop.area.name + ', ' + shop.city.name} fontSize={11} />
                        <TextBasic text={shop.coOwner[0].firstName + shop.coOwner[0].lastName} fontSize={14} />
                    </View>
                </View>
            </View>
            <View style={[FDR()]}>
                <ButtonRippleLeftMaterialIconMiddleTextRightChild
                    onPress={() => {}}
                    containerStyle={[FLEX(1), BGCOLOR(Colors.primary), BRA(2), PVA(5), MTA()]}
                    buttonText={'Subscribe'.toLocaleUpperCase()}
                    buttonTextColor={Colors.white}
                    textStyle={[FF('SemiBold'), MLA(5)]}
                    iconName={'subscriptions'}
                    iconSize={20}
                    iconColor={Colors.white}
                    fontSize={13}
                />
                <ButtonRippleLeftMaterialIconMiddleTextRightChild
                    onPress={() => {}}
                    containerStyle={[BGCOLOR(Colors.primaryLight), BRA(2), PVA(5), PHA(), MTA(), MLA()]}
                    iconName={'notifications-active'}
                    iconSize={20}
                    iconColor={Colors.primary}
                    fontSize={13}
                />
            </View>
            <TextBasic
                text={'Press the bell icon to get notification of the newest product launched in the shop'}
                fontSize={11}
                textColor={Colors.dark}
                textStyle={{ marginTop: 5 }}
            />
        </View>
    );
};

export default ShopDetails;
