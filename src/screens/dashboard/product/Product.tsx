import { getProductDetails } from '@app/api/product/product.api';
import { IProduct, IRGetProductDetails } from '@app/api/product/product.interface';
import Carousel from '@app/screens/components/carousel/PhotoCarousel';
import BasicHeader from '@app/screens/components/header/HeaderBasic';
import { FastImageLoaderWithBg } from '@app/screens/components/image/FastImageLoaderWithBg';
import Loader from '@app/screens/components/loader/Loader';
import Colors from '@app/utilities/Colors';
import { getHP, getWP } from '@app/utilities/Dimensions';
import { BGCOLOR, FLEX } from '@app/utilities/Styles';
import { PBA } from '@app/utilities/StyleWrapper';
import React from 'react';
import { ScrollView, View } from 'react-native';
import HeaderLI from '../listitems/component/ListItemHeader';
import BottomBar from './component/BottomButton';
import ItemDetails from './component/ItemDetails';
import SelectColor from './component/SelectColor';
import ShopDetails from './component/ShopDetails';

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
    const [productDetails, setProductDetails] = React.useState<IProduct>({} as IProduct);
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
        <View style={[FLEX(1), BGCOLOR(Colors.lighter)]}>
            {/* <BasicHeader title="Product details" /> */}
            <HeaderLI />
            {Object.keys(productDetails).length > 0 && (
                <ScrollView contentContainerStyle={[PBA(getHP(1))]}>
                    <Carousel
                        height={getHP(5)}
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

                    <SelectColor
                        colors={productDetails.colors}
                        selectedColorIndex={selectedColorIndex}
                        setSelectedColorIndex={setSelectedColorIndex}
                    />
                    {productDetails.shopId && <ShopDetails shop={productDetails.shopId} />}
                    <ItemDetails />
                </ScrollView>
            )}
            <BottomBar />
            {loader && <Loader />}
        </View>
    );
};

export default ProductDetails;
