import { getProductDetails } from '@app/api/product/product.api';
import Carousel from '@app/screens/components/carousel/PhotoCarousel';
import BasicHeader from '@app/screens/components/header/HeaderBasic';
import Loader from '@app/screens/components/loader/Loader';
import { getHP, getWP } from '@app/utilities/Dimensions';
import { BGCOLOR, FLEX } from '@app/utilities/Styles';
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
    const [productDetails, setProductDetails] = React.useState({});

    const loadProductDetails = async () => {
        setLoader(true);
        try {
            const response = await getProductDetails({ _id });
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
                <View>
                    <Carousel
                        height={getHP(4)}
                        width={getWP(10)}
                        data={[
                            productDetails.colors[0].photos[0],
                            'https://m.media-amazon.com/images/I/71BKJmt+BIL._UL1500_.jpg',
                        ]}
                        renderItem={(item: string) => (
                            <Image
                                source={{ uri: item }}
                                style={{ height: '100%', width: getWP(10) }}
                                resizeMode="contain"
                            />
                        )}
                    />
                </View>
            )}
            {loader && <Loader />}
        </View>
    );
};

export default ProductDetails;
