import { getShopDetails } from '@app/api/product/product.api';
import { IRGetShopDetail, IShop } from '@app/api/product/product.interface';
import BasicHeader from '@app/screens/components/header/HeaderBasic';
import Loader from '@app/screens/components/loader/Loader';
import Colors from '@app/utilities/Colors';
import { BGCOLOR, FLEX } from '@app/utilities/Styles';
import * as React from 'react';
import { View } from 'react-native';
import HeaderLI from '../listitems/component/ListItemHeader';
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
}) => {
    const [shop, setShop] = React.useState<IShop>(undefined as IShop);

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

    React.useEffect(() => {
        loadShopDetails();
    }, []);

    return (
        <View style={[FLEX(1), BGCOLOR(Colors.lighter)]}>
            <BasicHeader title="Heels & Shoes" />
            {shop && <ShopDetails shop={shop} />}
            {loader && <Loader />}
        </View>
    );
};

export default ShopItem;
