import { getProduct, getShopDetails } from '@app/api/product/product.api';
import { getFilterWithValue } from '@app/api/product/product.filter.api';
import {
    IRFilter,
    IRGetFilterWithValue,
    IRGetProduct,
    IRGetShopDetail,
    IShop,
} from '@app/api/product/product.interface';
import { NavigationKey } from '@app/navigation/navigation-data';
import BasicHeader from '@app/screens/components/header/HeaderBasic';
import HeaderWithTitleAndSubHeading from '@app/screens/components/header/HeaderWithTitleAndSubHeading';
import Loader from '@app/screens/components/loader/Loader';
import Colors from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { BGCOLOR, FDR, FLEX, FW, JCC } from '@app/utilities/Styles';
import { MHA, MTA, MVA } from '@app/utilities/StyleWrapper';
import * as React from 'react';
import { ToastAndroid, View, ScrollView } from 'react-native';
import ProductCard from '../component/ProductCard';
import FilterUi from '../filter/FilterUi';
import ShopDetails from '../product/component/ShopDetails';

interface ShopItemProps {
    route: {
        params: {
            _id: string;
        };
    };
}

const ShopItem: React.FunctionComponent<ShopItemProps> = ({
    route: {
        params: { _id },
    },
    navigation,
}) => {
    const [shop, setShop] = React.useState<IShop>(undefined as IShop);
    const [product, setProduct] = React.useState([]);

    const [filter, setFilter] = React.useState<IRFilter[]>([]);
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
    const [loader, setLoader] = React.useState(false);

    const loadShopDetails = async () => {
        setLoader(true);
        try {
            const response: IRGetShopDetail = await getShopDetails({ _id });
            setShop(response.payload);
            setLoader(false);
        } catch (error) {
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
            const response: IRGetProduct = await getProduct({ ...filter });

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
        loadShopDetails();
        loadFilter();
        loadProduct({ shop: false });
    }, []);

    return (
        <View style={[FLEX(1), BGCOLOR(Colors.lighter)]}>
            <BasicHeader title={shop ? shop['shopName'] : 'shop name'} />
            <FilterUi setShowShops={setShowShops} showShops={showShops} filters={filter} loadProduct={() => {}} />
            {shop && (
                <ScrollView>
                    <ShopDetails shop={shop} />
                    <View style={[MTA(5)]} />

                    <View style={[MHA(), MVA()]}>
                        <HeaderWithTitleAndSubHeading
                            heading={showShops ? 'SHOPS NEAR YOU' : 'PRODUCTS IN ' + shop.shopName.toLocaleUpperCase()}
                            subHeading="Price and other details may vary based on product size and color."
                            headerStyle={{ fontSize: 12, fontFamily: FontFamily.SemiBold }}
                            subHeaderStyle={{ color: '#7d7d7d', fontSize: 10 }}
                        />
                    </View>
                    {product.length > 0 && (
                        <View style={[FDR(), FW(), JCC('space-between'), FLEX(1)]}>
                            {product.map((item, index) => (
                                <ProductCard
                                    key={index}
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
                </ScrollView>
            )}
            {loader && <Loader />}
        </View>
    );
};

export default ShopItem;
