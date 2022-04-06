import { getProductDetails } from '@app/api/product/product.api';
import { IColor, IProduct, IRGetProductDetails } from '@app/api/product/product.interface';
import ButtonRippleLeftMaterialIconMiddleTextRightChild from '@app/screens/components/button/ButtonRippleLeftMaterialIconMiddleTextRightChild';
import Carousel from '@app/screens/components/carousel/PhotoCarousel';
import BasicHeader from '@app/screens/components/header/HeaderBasic';
import { FastImageLoaderWithBg } from '@app/screens/components/image/FastImageLoaderWithBg';
import Loader from '@app/screens/components/loader/Loader';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { GENERAL_BOUNDARY_SPACE, getHP, getWP } from '@app/utilities/Dimensions';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, BGCOLOR, FDR, FLEX, HP, JCC, MT, provideShadow } from '@app/utilities/Styles';
import { FF, HA, MLA, MTA, PA, PHA, POS } from '@app/utilities/StyleWrapper';
import React from 'react';
import { View, Image, ToastAndroid } from 'react-native';
import SelectColor from './component/SelectColor';

interface ProductDetailsProps {
    route: {
        params: { _id: string };
    };
}

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
    route: {
        params: { _id },
    },
}) => {
    const [loader, setLoader] = React.useState(false);
    const [productDetails, setProductDetails] = React.useState<IProduct | {}>({});
    const [selectedColorIndex, setSelectedColorIndex] = React.useState<number>(0);

    const loadProductDetails = async () => {
        setLoader(true);
        try {
            const response: IRGetProductDetails = await getProductDetails({ _id });
            setProductDetails(response.payload);
            setLoader(false);
        } catch (error) {
            setLoader(false);
        }
    };

    React.useEffect(() => {
        loadProductDetails();
    }, []);

    return (
        <View style={[FLEX(1), BGCOLOR('#FFFFFF')]}>
            <BasicHeader title="Product details" />
            {Object.keys(productDetails).length > 0 && (
                <>
                    <View>
                        <Carousel
                            height={getHP(4)}
                            width={getWP(10)}
                            data={[
                                productDetails?.colors[0]?.photos[0],
                                'https://m.media-amazon.com/images/I/71BKJmt+BIL._UL1500_.jpg',
                            ]}
                            renderItem={(item: string) => (
                                <FastImageLoaderWithBg
                                    source={{ uri: item }}
                                    style={{ height: '100%', width: getWP(10) }}
                                    resizeMode="contain"
                                />
                            )}
                        />
                    </View>

                    <SelectColor
                        colors={productDetails.colors}
                        selectedColorIndex={selectedColorIndex}
                        setSelectedColorIndex={setSelectedColorIndex}
                    />
                </>
            )}
            <View style={[POS('absolute', 0, 0, undefined, 0), FDR(), HP(0.7), BGCOLOR(), provideShadow(10)]}>
                <ButtonRippleLeftMaterialIconMiddleTextRightChild
                    onPress={() => {}}
                    containerStyle={[FLEX(1), BGCOLOR(Colors.white)]}
                    buttonText={'Ask question'.toLocaleUpperCase()}
                    iconName={'chat'}
                    iconSize={20}
                    textStyle={[MLA(5)]}
                    fontSize={13}
                />
                <ButtonRippleLeftMaterialIconMiddleTextRightChild
                    onPress={() => {}}
                    containerStyle={[FLEX(1), BGCOLOR(Colors.primary)]}
                    buttonText={'Add to Favourite'.toLocaleUpperCase()}
                    buttonTextColor={Colors.white}
                    textStyle={[FF('Bold'), MLA(5)]}
                    iconName={'favorite'}
                    iconSize={20}
                    iconColor={Colors.white}
                    fontSize={13}
                />
            </View>
            {loader && <Loader />}
        </View>
    );
};

export default ProductDetails;
