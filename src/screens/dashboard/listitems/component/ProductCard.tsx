import { IProduct, ProductData } from '@app/api/product/product.interface';
import ButtonRippleText from '@app/screens/components/button/ButtonRippleText';
import { HEADER_HEIGHT } from '@app/screens/components/header/HeaderBasic';
import { FastImageLoaderWithBg } from '@app/screens/components/image/FastImageLoaderWithBg';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { GENERAL_BORDER_RADIUS, getHP, getWP, STATUS_BAR_HEIGHT } from '@app/utilities/Dimensions';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, FDR, JCC } from '@app/utilities/Styles';
import { PA, PHA, PVA } from '@app/utilities/StyleWrapper';
import * as React from 'react';
import { View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { FILTER_HEIGHT } from '../filter/FilterUi';

interface ProductCardProps {
    item: ProductData;
    onPress: Function;
    showShopDetails: boolean;
}

//const ITEM_WIDTH = (getWP(10) - 2 * GENERAL_BOUNDARY_SPACE) / 2 - GENERAL_BOUNDARY_SPACE / 2;
const ITEM_WIDTH = getWP(4.97);
const ITEM_HEIGHT = (getHP(10) - HEADER_HEIGHT - FILTER_HEIGHT * 2 - STATUS_BAR_HEIGHT) / 2;

const ProductCard: React.FunctionComponent<ProductCardProps> = ({ item, onPress, showShopDetails }) => {
    return (
        <Ripple
            style={[
                {
                    borderWidth: 0.5,
                    borderColor: Colors.light,

                    //marginTop: GENERAL_BOUNDARY_SPACE * 0.9,
                    //borderRadius: GENERAL_BORDER_RADIUS,
                    overflow: 'hidden',
                    //flex: 1,
                },
            ]}
            onPress={() => {
                onPress();
            }}
        >
            <View
                style={{
                    height: ITEM_HEIGHT * 0.6,
                    width: ITEM_WIDTH,
                    backgroundColor: '#f8f8f8',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <FastImageLoaderWithBg
                    style={{ height: ITEM_HEIGHT * 0.4, width: ITEM_WIDTH * 0.8, borderRadius: GENERAL_BORDER_RADIUS }}
                    source={{ uri: item.colors[0].photos[0] }}
                />
            </View>
            <View style={(PHA(), PVA(4))}>
                {/* <TextBasic
                    text={item.shopId.}
                    fontSize={10}
                    numberOfLines={1}
                    textStyle={{ alignSelf: 'center', marginTop: 5 }}
                    fontFamily={FontFamily.Light}
                    textColor={Colors.subHeading}
                /> */}
                <View style={[AIC(), JCC()]}>
                    <View style={[FDR()]}>
                        <TextBasic
                            text={'Rs 1000'}
                            fontSize={10}
                            numberOfLines={1}
                            textStyle={{
                                alignSelf: 'center',
                                marginTop: 3,

                                textDecorationLine: 'line-through',
                            }}
                            fontFamily={FontFamily.Medium}
                            textColor={Colors.dark}
                        />
                        <TextBasic
                            text={'Rs 500-700 '}
                            fontSize={10}
                            numberOfLines={1}
                            textStyle={{ alignSelf: 'center', marginTop: 3, marginLeft: 5 }}
                            fontFamily={FontFamily.Bold}
                            textColor={Colors.darker}
                        />
                    </View>
                    <TextBasic
                        text={'(50-60% OFF)'}
                        fontSize={10}
                        numberOfLines={1}
                        textStyle={{ alignSelf: 'center', marginTop: 3 }}
                        fontFamily={FontFamily.ExtraBold}
                        textColor={Colors.primary}
                    />
                </View>
                <TextBasic
                    text={'Available in ' + item.colors.length + ' color' + (item.colors.length > 1 ? 's' : '')}
                    fontSize={10}
                    numberOfLines={1}
                    textStyle={{ alignSelf: 'center', marginTop: 5 }}
                    fontFamily={FontFamily.Light}
                    textColor={Colors.subHeading}
                />

                <View
                    style={[
                        FDR(),
                        { flexWrap: 'wrap', alignSelf: 'center', marginTop: 5, justifyContent: 'space-evenly' },
                    ]}
                >
                    {item.colors.map((color, index) => (
                        <View
                            style={{
                                borderWidth: index == 0 ? 1 : 0,
                                borderRadius: 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 5,
                                padding: 1,
                            }}
                        >
                            <View
                                style={{
                                    height: 22,
                                    width: 22,
                                    borderRadius: 100,

                                    backgroundColor: color.color.description,
                                }}
                            />
                        </View>
                    ))}
                </View>
                {showShopDetails && (
                    <ButtonRippleText
                        onPress={() => {}}
                        buttonText={item.shopId?.shopName.toUpperCase() + '\n 5 KMS away' || 'No Shop Name'}
                        fontSize={12}
                        textStyle={{ alignSelf: 'center', color: Colors.primary, fontFamily: FontFamily.Bold }}
                        containerStyle={{
                            padding: 3,
                            borderWidth: 0.2,
                            borderRadius: 2,
                            borderColor: Colors.primary,
                            backgroundColor: Colors.primaryLight,
                            marginTop: 5,
                        }}
                    />
                )}
            </View>
        </Ripple>
    );
};

export default ProductCard;
