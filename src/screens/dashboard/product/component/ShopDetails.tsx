import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import * as React from 'react';
import { View } from 'react-native';
import { AIC, BC, BGCOLOR, BR, BW, FDR, FLEX, FW, H, HP, JCC, MT, MV, PH, provideShadow } from '@app/utilities/Styles';
import { BRA, FF, HA, MHA, MLA, MRA, MTA, MVA, PA, PHA, PVA, WA } from '@app/utilities/StyleWrapper';
import { IShop } from '@app/api/product/product.interface';
import ButtonRippleLeftMaterialIconMiddleTextRightChild from '@app/screens/components/button/ButtonRippleLeftMaterialIconMiddleTextRightChild';
import { FastImageLoaderWithBg } from '@app/screens/components/image/FastImageLoaderWithBg';
import { FontFamily } from '@app/utilities/FontFamily';

interface ShopDetailsProps {
    shop: IShop;
}

const ShopDetails: React.FunctionComponent<ShopDetailsProps> = ({ shop }) => {
    return (
        <View style={[BGCOLOR(Colors.white), provideShadow(2), MTA(5), PA()]}>
            {/* <TextBasic text="Shop Details" fontFamily={FontFamily.Bold} fontSize={12} textColor={Colors.dark} /> */}
            <TextBasic text={shop.shopName} fontFamily={FontFamily.Regular} fontSize={13} />
            <View style={[FDR(), AIC(), MTA()]}>
                <View style={[AIC()]}>
                    <FastImageLoaderWithBg
                        source={{ uri: 'https://m.media-amazon.com/images/I/71BKJmt+BIL._UL1500_.jpg' }}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: Colors.borderColorPrimary,
                        }}
                        resizeMode="cover"
                    />
                </View>
                <View style={[FLEX(1), PHA()]}>
                    <View style={[FDR(), JCC('space-evenly'), AIC()]}>
                        <View style={[AIC()]}>
                            <TextBasic text={'53'} textAlign="center" fontSize={15} fontFamily={FontFamily.SemiBold} />
                            <TextBasic
                                text={'Listings'}
                                textAlign="center"
                                fontSize={14}
                                fontFamily={FontFamily.Light}
                            />
                        </View>
                        <View style={[AIC()]}>
                            <TextBasic text={'100'} textAlign="center" fontSize={15} fontFamily={FontFamily.SemiBold} />
                            <TextBasic
                                text={'Subscribers'}
                                textAlign="center"
                                fontSize={14}
                                fontFamily={FontFamily.Light}
                            />
                        </View>
                    </View>
                    <View style={[AIC()]}>
                        <TextBasic
                            text={'owner'}
                            fontSize={12}
                            textAlign={'center'}
                            fontFamily={FontFamily.SemiBold}
                            textColor={Colors.primary}
                            textStyle={[MTA()]}
                        />
                        <TextBasic
                            text={(shop.owner.firstName + ' ' + shop.owner.lastName).toLocaleUpperCase()}
                            fontSize={14}
                            textAlign={'center'}
                            fontFamily={FontFamily.Light}
                            textColor={Colors.primary}
                        />
                    </View>
                </View>
            </View>
            <TextBasic
                text={shop.shopDescription}
                fontSize={12}
                textAlign={'center'}
                numberOfLines={2}
                textStyle={[MVA()]}
                fontFamily={FontFamily.Light}
            />
            <TextBasic text={shop.localAddress} fontSize={11} textColor={Colors.subHeading} textAlign={'center'} />
            <View style={[FDR()]}>
                <ButtonRippleLeftMaterialIconMiddleTextRightChild
                    onPress={() => {}}
                    containerStyle={[FLEX(1), BGCOLOR(Colors.primaryLight), BRA(), PVA(), MTA()]}
                    //containerStyle={[BGCOLOR(Colors.primaryLight), BRA(), PVA(), PHA(), MTA(), MLA()]}
                    buttonText={'Follow Shop'.toLocaleUpperCase()}
                    buttonTextColor={Colors.primary}
                    textStyle={[FF('SemiBold'), MLA(5)]}
                    iconName={'how-to-reg'}
                    iconSize={20}
                    iconColor={Colors.primary}
                    fontSize={13}
                />
                <ButtonRippleLeftMaterialIconMiddleTextRightChild
                    onPress={() => {}}
                    iconName={'notifications-active'}
                    containerStyle={[BGCOLOR(Colors.primaryLight), BRA(), PVA(), PHA(), MTA(), MLA()]}
                    iconSize={20}
                    iconColor={Colors.primary}
                    fontSize={13}
                />
                <ButtonRippleLeftMaterialIconMiddleTextRightChild
                    onPress={() => {}}
                    iconName={'location-on'}
                    containerStyle={[BGCOLOR(Colors.primaryLight), BRA(), PVA(), PHA(), MTA(), MLA()]}
                    iconSize={20}
                    iconColor={Colors.primary}
                    fontSize={13}
                />
            </View>
            <TextBasic
                text={'Press the bell icon to get notification of the newest product launched in the shop'}
                fontSize={11}
                textColor={Colors.primary}
                textStyle={[MTA()]}
                fontFamily={FontFamily.Light}
            />
        </View>
    );
};

export default ShopDetails;
