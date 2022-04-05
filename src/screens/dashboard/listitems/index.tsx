import { setBaseUrl } from '@app/api/apiLayer';
import { getProduct } from '@app/api/product/product.api';
import { getFilterWithValue } from '@app/api/product/product.filter.api';
import {
    IProduct,
    IRFilter,
    IRGetFilterWithValue,
    IRGetProduct,
    productStatus,
} from '@app/api/product/product.interface';
import { Envar } from '@app/core/EnvWrapper';
import HeaderWithTitleAndSubHeading from '@app/screens/components/header/HeaderWithTitleAndSubHeading';
import Colors from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { BGCOLOR, FDR, FLEX, FW, JCC, provideShadow } from '@app/utilities/Styles';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import * as React from 'react';
import { StatusBar, View, SafeAreaView, ScrollView, ToastAndroid, StyleSheet, Animated } from 'react-native';
import FilterUi from './filter/FilterUi';
import ProductCard from './component/ProductCard';
import ShopCard from './component/ShopCard';
import HeaderLI from './component/ListItemHeader';
import Loader from '@app/screens/components/loader/Loader';
import { PHA, PTA } from '@app/utilities/StyleWrapper';
import { GENERAL_BOUNDARY_SPACE, STATUS_BAR_HEIGHT } from '@app/utilities/Dimensions';
import { HEADER_HEIGHT } from '@app/screens/components/header/HeaderBasic';
import { NavigationKey } from '@app/navigation/navigation-data';

interface ProductsProps {
    navigation: StackNavigationProp;
}

const Products: React.FunctionComponent<ProductsProps> = ({ navigation }) => {
    const [loader, setLoader] = React.useState(false);
    const [filter, setFilter] = React.useState<IRFilter[]>([]);
    const [product, setProduct] = React.useState<IProduct[]>([]);
    const [showShops, setShowShops] = React.useState(false);

    const [shops, setShops] = React.useState([]);

    const loadFilter = async () => {
        setLoader(true);
        try {
            const response: IRGetFilterWithValue = await getFilterWithValue({ active: true });
            console.log('Response', response);
            if (response.status == 1) {
                setFilter([...response.payload.distribution, ...response.payload.filter]);

                setLoader(false);
            }
        } catch (error) {
            console.log('error', error);
            ToastAndroid.show('Network error!! Could not connect server', 1000);
            setLoader(false);
        }
    };

    const loadProduct = async (filter: { [key: string]: string }) => {
        setLoader(true);
        if (shops.length > 0) {
            setShops([]);
        } else {
            setProduct([]);
        }
        try {
            const response: IRGetProduct = await getProduct({ ...filter, status: productStatus.WAITINGFORAPPROVAL });

            if (response.status == 1) {
                if (filter.shop) {
                    setShops(response.payload);
                } else {
                    setProduct(response.payload);
                }
                setLoader(false);
            }
        } catch (error) {
            console.log('error', error);
            ToastAndroid.show('Network error!! Could not connect server', 1000);
            setLoader(false);
        }
    };

    React.useEffect(() => {
        setTimeout(() => {
            axios.defaults.baseURL = Envar.APIENDPOINT + '/catalogue/jeans/';
            loadFilter();
            loadProduct({ shop: showShops });
        }, 500);
        StatusBar.setBarStyle('light-content');
        return () => {
            setBaseUrl();
        };
    }, []);

    return (
        <SafeAreaView style={[FLEX(1), BGCOLOR(Colors.white)]}>
            <HeaderLI />

            <FilterUi setShowShops={setShowShops} showShops={showShops} filters={filter} loadProduct={loadProduct} />

            <ScrollView
                // style={[FLEX(1)]}
                style={[FLEX(1), PTA(GENERAL_BOUNDARY_SPACE), PHA(GENERAL_BOUNDARY_SPACE)]}
            >
                <HeaderWithTitleAndSubHeading
                    heading={showShops ? 'SHOPS NEAR YOU' : 'PRODUCTS NEAR YOU'}
                    subHeading="Price and other details may vary based on product size and color."
                    headerStyle={{ fontSize: 12, fontFamily: FontFamily.SemiBold }}
                    subHeaderStyle={{ color: '#7d7d7d', fontSize: 10 }}
                />
                {product.length > 0 && (
                    <View style={[FDR(), FW(), JCC('space-between'), FLEX(1)]}>
                        {product.map((item) => (
                            <ProductCard
                                item={item}
                                onPress={() => {
                                    navigation.navigate(NavigationKey.ShowProduct, {
                                        _id: item._id,
                                    });
                                }}
                            />
                        ))}
                    </View>
                )}
                {shops.length > 0 && (
                    <View style={[styles.shopCardContainer, BGCOLOR('#FFFFFF'), provideShadow(2)]}>
                        {shops.map((item) => (
                            <ShopCard item={item} />
                        ))}
                    </View>
                )}
            </ScrollView>
            {loader && <Loader />}
        </SafeAreaView>
    );
};

export default Products;

const styles = StyleSheet.create({
    shopCardContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        paddingBottom: 10,
    },
    loaderContainer: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#ffffff33' },
});
