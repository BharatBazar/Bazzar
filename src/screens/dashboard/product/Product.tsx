import { getProductDetails } from '@app/api/product/product.api';
import { IColor, IProduct, IRGetProductDetails } from '@app/api/product/product.interface';
import Carousel from '@app/screens/components/carousel/PhotoCarousel';
import BasicHeader from '@app/screens/components/header/HeaderBasic';
import { FastImageLoaderWithBg } from '@app/screens/components/image/FastImageLoaderWithBg';
import Loader from '@app/screens/components/loader/Loader';
import TextBasic from '@app/screens/components/text/TextBasic';
import { GENERAL_BOUNDARY_SPACE, getHP, getWP } from '@app/utilities/Dimensions';
import { AIC, BGCOLOR, FDR, FLEX, JCC } from '@app/utilities/Styles';
import { PHA } from '@app/utilities/StyleWrapper';
import React from 'react';
import { View, Image, ToastAndroid } from 'react-native';

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
                    <View style={[FDR(), AIC(), JCC('space-between'), PHA(GENERAL_BOUNDARY_SPACE)]}>
                        <TextBasic text={`Available Colors: ${productDetails.colors.length}`} />
                    </View>
                    <View style={[FDR(), AIC(), PHA(GENERAL_BOUNDARY_SPACE)]}>
                        {productDetails.colors.map((item: IColor) => (
                            <View>
                                <View
                                    style={{
                                        height: 40,
                                        width: 40,
                                        borderRadius: 10,
                                        borderWidth: 2,
                                        borderColor: item.color.description,
                                        padding: 2,
                                        marginRight: 5,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Image
                                        source={{ uri: item.photos[0] }}
                                        style={{ height: 30, width: 30, borderRadius: 10 }}
                                    />
                                </View>

                                <TextBasic text={item.color.name} />
                            </View>
                        ))}
                    </View>
                </>
            )}
            {loader && <Loader />}
        </View>
    );
};

export default ProductDetails;
