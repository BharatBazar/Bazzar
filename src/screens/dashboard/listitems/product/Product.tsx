import { catalogueData } from '@app/api/catalogue/catalogue.interface';
import { getProductDetails } from '@app/api/product/product.api';
import { IProduct, IRGetProductDetails } from '@app/api/product/product.interface';
import Carousel from '@app/screens/components/carousel/PhotoCarousel';

import { FastImageLoaderWithBg } from '@app/screens/components/image/FastImageLoaderWithBg';
import Loader from '@app/screens/components/loader/Loader';
import Colors from '@app/utilities/Colors';
import { getHP, getWP } from '@app/utilities/Dimensions';
import { BGCOLOR, FLEX } from '@app/utilities/Styles';
import { PBA } from '@app/utilities/StyleWrapper';
import React from 'react';
import { ScrollView, View } from 'react-native';
import HeaderLI from '../component/ListItemHeader';
import BottomBar from './component/BottomButton';
import ItemDetails from './component/ItemDetails';
import SelectColor from './component/SelectColor';
import ShopDetails from './component/ShopDetails';
import Testionial from './component/Testimonial';

interface ProductDetailsProps {
    route: {
        params: { _id: string; item: catalogueData };
    };
}

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
    route: {
        params: { _id, item },
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

    console.log('Pro', productDetails);

    return (
        <View style={[FLEX(1), BGCOLOR(Colors.lighter)]}>
            {/* <BasicHeader title="Product details" /> */}
            <HeaderLI item={item} />
            {Object.keys(productDetails).length > 0 && (
                <ScrollView contentContainerStyle={[PBA(getHP(1))]}>
                    <Carousel
                        height={getHP(5)}
                        width={getWP(10)}
                        data={productDetails?.colors[selectedColorIndex]?.photos}
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
                    <Testionial />
                </ScrollView>
            )}
            <BottomBar />
            {loader && <Loader />}
        </View>
    );
};

export default ProductDetails;
