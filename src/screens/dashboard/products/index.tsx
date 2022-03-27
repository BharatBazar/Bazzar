import { setBaseUrl } from '@app/api/apiLayer';
import { getFilterWithValue } from '@app/api/product/product.filter';
import { IClassfier, IFilter, IRFilter, IRGetFilterWithValue } from '@app/api/product/product.interface';
import BasicHeader from '@app/screens/components/header/BasicHeader';
import Colors, { mainColor } from '@app/utilities/Colors';
import { STATUS_BAR_HEIGHT } from '@app/utilities/Dimensions';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, BGCOLOR, FLEX, JCC } from '@app/utilities/Styles';

import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import * as React from 'react';
import {
    StatusBar,
    Text,
    View,
    NativeModules,
    SafeAreaView,
    ScrollView,
    Platform,
    ActivityIndicator,
} from 'react-native';
import FilterPopup from '../filter/FilterPopup';
import FilterUi from '../filter/FilterUi';
import ShopCard from './ShopCard';

interface ProductsProps {
    navigation: StackNavigationProp;
}

const Products: React.FunctionComponent<ProductsProps> = ({ navigation }) => {
    const [loader, setLoader] = React.useState(false);
    const [filter, setFilter] = React.useState<IRFilter[]>([]);
    const [distribution, setDistribution] = React.useState<IRFilter[]>([]);

    const loadFilter = async () => {
        setLoader(true);
        try {
            const response: IRGetFilterWithValue = await getFilterWithValue({ active: true });

            setLoader(false);
            if (response.status == 1) {
                setFilter(response.payload.filter);
                setDistribution(response.payload.distribution);
            }
        } catch (error) {
            console.log('error', error);
            setLoader(false);
        }
    };

    React.useEffect(() => {
        axios.defaults.baseURL = axios.defaults.baseURL + '/catalogue/jeans/';
        loadFilter();
        StatusBar.setBarStyle('light-content');
        return () => {
            setBaseUrl();
        };
    }, []);
    return (
        <SafeAreaView style={[FLEX(1)]}>
            <BasicHeader title="Mens Jeans" />
            <FilterUi filters={filter} distribution={distribution} />
            <ScrollView style={[]}>
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
            </ScrollView>
            {/* {loader && (
                <View style={[FLEX(1), AIC(), JCC(), { position: 'absolute' }]}>
                    <ActivityIndicator />
                </View>
            )} */}
        </SafeAreaView>
    );
};

export default Products;
