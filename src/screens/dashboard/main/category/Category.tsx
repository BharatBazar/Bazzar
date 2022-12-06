import { getCatalogueDetailsAPI } from '@app/api/catalogue/catalogue.api';
import { catalogueData } from '@app/api/catalogue/catalogue.interface';
import { NavigationKey } from '@app/navigation/navigation-data';
import Border from '@app/screens/components/border/Border';
import Loader from '@app/screens/components/loader/Loader';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors, { black60 } from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { FDR, FLEX, JCC, MV, PH, PV } from '@app/utilities/Styles';
import { MLA, MTA, PA } from '@app/utilities/StyleWrapper';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ToastAndroid, View } from 'react-native';

import CategoryCard from './component/CategoryCard';

export interface CategoryProps {}

const Category: React.FC<CategoryProps> = () => {
    const [category, setCategory] = useState<catalogueData[]>([]);
    const [loader, setLoader] = useState<boolean>(false);

    const fetchProduct = async () => {
        try {
            setLoader(true);
            const response = await getCatalogueDetailsAPI();

            setCategory([...response.payload]);
            setLoader(false);
        } catch (error) {
            console.log(error);
            setLoader(false);
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const navigation = useNavigation();

    return (
        <View style={[FLEX(1)]}>
            <Border />
            <TextBasic
                text={'Category'}
                textStyle={[MTA(), MLA()]}
                fontSize={20}
                fontFamily={FontFamily.Medium}
                textColor={Colors.heading}
            />
            <View style={[FLEX(1), FDR(), JCC('space-evenly'), { flexWrap: 'wrap' }]}>
                {category.map((item: catalogueData, index: number) => {
                    return (
                        <CategoryCard
                            item={item}
                            key={index}
                            onPress={() => {
                                navigation.navigate(NavigationKey.ListItems, { parent: item });
                            }}
                        />
                    );
                })}
            </View>
            {loader && <ActivityIndicator />}
        </View>
    );
};

export default Category;
