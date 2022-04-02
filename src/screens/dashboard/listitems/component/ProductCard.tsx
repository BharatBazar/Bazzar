import { IProduct } from '@app/api/product/product.interface';
import ButtonRippleText from '@app/screens/components/button/ButtonRippleText';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { GENERAL_BORDER_RADIUS, GENERAL_BOUNDARY_SPACE, getWP } from '@app/utilities/Dimensions';
import { FontFamily } from '@app/utilities/FontFamily';
import { FDR } from '@app/utilities/Styles';
import * as React from 'react';
import { Image, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

interface ProductCardProps {
    item: IProduct;
}

const ProductCard: React.FunctionComponent<ProductCardProps> = ({ item }) => {
    return (
        <Ripple
            style={[
                {
                    borderWidth: 0.5,
                    borderColor: Colors.light,

                    marginTop: GENERAL_BOUNDARY_SPACE,
                    borderRadius: GENERAL_BORDER_RADIUS,
                    overflow: 'hidden',
                },
            ]}
        >
            <View
                style={{
                    height: 200,
                    width: getWP(4.6),
                    backgroundColor: '#f8f8f8',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image
                    style={{ height: 100, width: getWP(4), borderRadius: GENERAL_BORDER_RADIUS }}
                    source={{ uri: item.colors[0].photos[0] }}
                />
            </View>
            <View style={{ padding: 5 }}>
                <TextBasic
                    text={'Available in ' + item.colors.length + ' colors'}
                    fontSize={7}
                    numberOfLines={1}
                    textStyle={{ alignSelf: 'center', marginTop: 5 }}
                    fontFamily={FontFamily.Bold}
                    textColor={Colors.subHeading}
                />
                <View
                    style={[
                        FDR(),
                        { flexWrap: 'wrap', alignSelf: 'center', marginTop: 5, justifyContent: 'space-evenly' },
                    ]}
                >
                    {item.colors.map((color) => (
                        <View
                            style={{
                                height: 22,
                                width: 22,
                                borderRadius: GENERAL_BORDER_RADIUS * 0.7,

                                backgroundColor: color.color.description,
                                marginLeft: 5,
                            }}
                        />
                    ))}
                </View>
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
            </View>
        </Ripple>
    );
};

export default ProductCard;
