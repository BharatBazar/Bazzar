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
import BasicHeader from '@app/screens/components/header/HeaderBasic';
import HeaderWithTitleAndSubHeading from '@app/screens/components/header/HeaderWithTitleAndSubHeading';

import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, BGCOLOR, FDR, FLEX, JCC } from '@app/utilities/Styles';

import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import * as React from 'react';
import { StatusBar, View, SafeAreaView, ScrollView, ActivityIndicator, ToastAndroid } from 'react-native';

import FilterUi from '../filter/FilterUi';
import ProductCard from './ProductCard';
import ShopCard from './ShopCard';

interface ProductsProps {
    navigation: StackNavigationProp;
}

const Products: React.FunctionComponent<ProductsProps> = ({ navigation }) => {
    const [loader, setLoader] = React.useState(false);
    const [filter, setFilter] = React.useState<IRFilter[]>([]);
    const [distribution, setDistribution] = React.useState<IRFilter[]>([]);
    const [product, setProduct] = React.useState<IProduct[]>([]);
    const [showShops, setShowShops] = React.useState(false);

    const [shops, setShops] = React.useState([]);

    const loadFilter = async () => {
        setLoader(true);
        try {
            const response: IRGetFilterWithValue = await getFilterWithValue({ active: true });
            console.log('Respomnse', response);
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
        axios.defaults.baseURL = Envar.APIENDPOINT + '/catalogue/jeans/';
        loadFilter();
        loadProduct({});
        StatusBar.setBarStyle('light-content');
        return () => {
            setBaseUrl();
        };
    }, []);
    return (
        <SafeAreaView style={[FLEX(1), BGCOLOR('#FFFFFF')]}>
            <BasicHeader title="Mens Jeans" />
            <FilterUi setShowShops={setShowShops} showShops={showShops} filters={filter} loadProduct={loadProduct} />
            <ScrollView style={[FLEX(1)]} contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 5 }}>
                <HeaderWithTitleAndSubHeading
                    heading="RESULTS"
                    subHeading="Price and other details may vary based on product size and color."
                    headerStyle={{ fontSize: 18, fontFamily: FontFamily.SemiBold }}
                    subHeaderStyle={{ color: '#7d7d7d' }}
                />
                {product.length > 0 && (
                    <View
                        style={[{ flexWrap: 'wrap', flexDirection: 'row', flex: 1, justifyContent: 'space-between' }]}
                    >
                        {product.map((item) => (
                            <ProductCard item={item} />
                        ))}
                    </View>
                )}
                {shops.length > 0 && shops.map((item) => <ShopCard />)}
                {/* <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard /> */}
            </ScrollView>
            {loader && (
                <View
                    style={[
                        AIC(),
                        JCC(),
                        { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#ffffff33' },
                    ]}
                >
                    <ActivityIndicator color={'#000000'} size={'large'} />
                </View>
            )}
        </SafeAreaView>
    );
};

export default Products;
