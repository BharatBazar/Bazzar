import { setBaseUrl } from '@app/api/apiLayer';
import { getProductAfterFilterAPI } from '@app/api/product/product.api';
import { getFilterWithValueAPI } from '@app/api/product/product.filter.api';
import {
    FilterAndValues,
    GetProductListResponse,
    IProduct,
    IRGetFilterWithValue,
    IRGetProduct,
    IShop,
    ProductData,
    productStatus,
} from '@app/api/product/product.interface';

import HeaderWithTitleAndSubHeading from '@app/screens/components/header/HeaderWithTitleAndSubHeading';
import Colors from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, BGCOLOR, FDR, FLEX, FW, JCC, MT, provideShadow } from '@app/utilities/Styles';

import * as React from 'react';
import {
    StatusBar,
    View,
    SafeAreaView,
    ScrollView,
    ToastAndroid,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import FilterUi from './filter/FilterUi';
import ProductCard from './component/ProductCard';
import ShopCard from './component/ShopCard';
import HeaderLI from './component/ListItemHeader';
import Loader from '@app/screens/components/loader/Loader';
import { MVA, PA, PVA } from '@app/utilities/StyleWrapper';
import { NavigationKey } from '@app/navigation/navigation-data';
import { NavigationProp } from '@react-navigation/native';
import { catalogueData } from '@app/api/catalogue/catalogue.interface';

interface ProductsProps {
    navigation: NavigationProp;
    route: { params: { parent: catalogueData } };
}

const Products: React.FunctionComponent<ProductsProps> = ({ navigation, route }) => {
    if (!route.params) {
        throw new Error('Parameter not found');
    }

    if (!route.params.parent) {
        throw new Error('parent parameter not found');
    }
    const [loader, setLoader] = React.useState(false);
    const [selectedFilter, setSelectedFilter] = React.useState<{ [key: string]: catalogueData[] }>({});
    const [paginationConfig, setPaginationConfig] = React.useState<{ lastTime: number | undefined }>({
        lastTime: undefined,
    });

    const [refill, setRefill] = React.useState(false);

    const [filter, setFilter] = React.useState<FilterAndValues[]>([]);
    const [product, setProduct] = React.useState<ProductData[]>([]);
    const [showShops, setShowShops] = React.useState(false);
    const [allLoaded, setAllLoaded] = React.useState(false);

    const [shops, setShops] = React.useState([]);

    const loadFilter = async () => {
        try {
            const response: IRGetFilterWithValue = await getFilterWithValueAPI({ parent: route.params.parent._id });
            console.log('Response', response);
            if (response.status == 1) {
                setFilter([...response.payload]);
            }
        } catch (error) {
            console.log('error', error);
            ToastAndroid.show('Network error!! Could not connect server', 1000);
        }
    };

    const loadProduct = async (filter: { [key: string]: { $in: string[] } }, lastTime: number | undefined) => {
        try {
            const response: GetProductListResponse = await getProductAfterFilterAPI({
                listToShow: showShops ? 'shop' : 'product',
                lastTime: lastTime,
                query: {
                    status: productStatus.INVENTORY,
                    parentId: route.params.parent._id,
                    ...filter,
                },
            });

            console.log('res', response);
            if (response.payload.lastTime) {
                setPaginationConfig({ lastTime: response.payload.lastTime });
            } else {
                setAllLoaded(true);
            }
            return response.payload.data;
        } catch (error) {
            console.log('error', error);
            ToastAndroid.show('Network error!! Could not connect server', 1000);
            return undefined;
        }
    };

    const onLoadFirstTime = async () => {
        try {
            setLoader(true);
            const response = await loadProduct({}, undefined);
            if (response) {
                setLoader(false);
                setProduct([...response]);
            } else {
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
        }
    };

    const getFilterConvertedToQuery = () => {
        let filterToSend: { [key: string]: { $in: string[] } } = {};
        Object.keys(selectedFilter).map((item) => {
            filterToSend[item] = { $in: selectedFilter[item].map((a) => a._id) };
        });
        return filterToSend;
    };
    const onLoadAfterApplyingFilter = async () => {
        try {
            setLoader(true);
            setAllLoaded(false);
            setProduct(() => []);
            setPaginationConfig({ lastTime: undefined });

            const response = await loadProduct(getFilterConvertedToQuery(), undefined);
            if (response) {
                setLoader(false);
                setProduct([...response]);
            } else {
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
        }
    };

    const onLoadEndReached = async () => {
        try {
            setRefill(true);

            const response = await loadProduct(getFilterConvertedToQuery(), paginationConfig.lastTime);
            if (response) {
                if (response.length == 0) {
                    setAllLoaded(true);
                    setRefill(false);
                } else {
                    setRefill(false);
                    setProduct([...product, ...response]);
                }
            } else {
                setRefill(false);
            }
        } catch (error) {
            setRefill(false);
        }
    };

    React.useEffect(() => {
        setTimeout(() => {
            //axios.defaults.baseURL = Envar.APIENDPOINT + '/catalogue/jeans/';
            loadFilter();
            onLoadFirstTime();
        }, 100);
        StatusBar.setBarStyle('light-content');
        return () => {
            setBaseUrl();
        };
    }, []);
    console.log('product', product.length);
    return (
        <SafeAreaView style={[FLEX(1), BGCOLOR(Colors.white)]}>
            <HeaderLI item={route.params.parent} />

            <FilterUi
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                shopSwitch
                setShowShops={setShowShops}
                showShops={showShops}
                filters={filter}
                loadProduct={loadProduct}
                onApplyFilter={onLoadAfterApplyingFilter}
            />

            {/* <ScrollView style={[FLEX(1)]}> */}
            <View style={[PA()]}>
                <HeaderWithTitleAndSubHeading
                    heading={showShops ? 'SHOPS NEAR YOU' : 'PRODUCTS NEAR YOU'}
                    subHeading="Price and other details may vary based on product size and color."
                    headerStyle={{ fontSize: 12, fontFamily: FontFamily.SemiBold }}
                    subHeaderStyle={{ color: '#7d7d7d', fontSize: 10 }}
                />
            </View>
            {product.length > 0 && (
                // <View style={[FDR(), FW(), JCC('space-between'), FLEX(1)]}>
                <FlatList
                    keyExtractor={(item) => item._id}
                    data={product}
                    renderItem={({ item, index }) => (
                        <ProductCard
                            showShopDetails={false}
                            key={index}
                            item={item}
                            onPress={() => {
                                navigation.navigate(NavigationKey.ShowProduct, {
                                    _id: item._id,
                                    item: route.params.parent,
                                });
                            }}
                        />
                    )}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => {
                        if (!refill && !loader && !allLoaded) {
                            onLoadEndReached();
                        }
                    }}
                    ListFooterComponent={
                        !allLoaded ? (
                            <View
                                style={[
                                    { height: 30, width: 30, borderRadius: 300 },
                                    BGCOLOR(Colors.white),
                                    provideShadow(3),

                                    AIC(),
                                    JCC(),
                                    MVA(),
                                    { alignSelf: 'center' },
                                ]}
                            >
                                <ActivityIndicator size={'small'} color={Colors.primary} />
                            </View>
                        ) : (
                            <View style={{ height: 50 }} />
                        )
                    }
                    numColumns={2}
                />
                // </View>
            )}
            {shops.length > 0 && (
                <View style={[]}>
                    {shops.map((item: IShop) => (
                        <ShopCard
                            item={item}
                            onPress={() => {
                                navigation.navigate(NavigationKey.ListItemsInShop, {
                                    _id: item._id,
                                    item: route.params.parent,
                                });
                            }}
                        />
                    ))}
                </View>
            )}
            {/* </ScrollView> */}
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
