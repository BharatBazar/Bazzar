import { setBaseUrl } from '@app/api/apiLayer';
import { getFilterWithValue } from '@app/api/product/product.filter';
import { IClassfier, IFilter, IRFilter, IRGetFilterWithValue } from '@app/api/product/product.interface';
import { Envar } from '@app/core/EnvWrapper';
import BasicHeader from '@app/screens/components/header/HeaderBasic';
import HeaderWithTitleAndSubHeading from '@app/screens/components/header/HeaderWithTitleAndSubHeading';
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
    ToastAndroid,
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
    const [selectedFilter, setSelectedFilter] = React.useState({});

    const loadFilter = async () => {
        setLoader(true);
        try {
            const response: IRGetFilterWithValue = await getFilterWithValue({ active: true });
            console.log('Respomnse', response);
            if (response.status == 1) {
                setFilter(response.payload.filter);
                setDistribution(response.payload.distribution);
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
        StatusBar.setBarStyle('light-content');
        return () => {
            setBaseUrl();
        };
    }, []);
    return (
        <SafeAreaView style={[FLEX(1), BGCOLOR('#FFFFFF')]}>
            <BasicHeader title="Mens Jeans" />
            <FilterUi filters={filter} distribution={distribution} />
            <ScrollView style={[FLEX(1)]} contentContainerStyle={{ paddingHorizontal: 5, paddingTop: 5 }}>
                <HeaderWithTitleAndSubHeading
                    heading="RESULTS"
                    subHeading="Price and other details may vary based on product size and color."
                    headerStyle={{ fontSize: 18, fontFamily: FontFamily.SemiBold }}
                    subHeaderStyle={{ color: '#7d7d7d' }}
                />
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
