import { getCatalogueDetailsAPI } from '@app/api/catalogue/catalogue.api';
import { catalogueData } from '@app/api/catalogue/catalogue.interface';
import Border from '@app/screens/components/border/Border';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors, { black60 } from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { FDR, FLEX, JCC, MV, PH, PV } from '@app/utilities/Styles';
import { MLA, MTA, PA } from '@app/utilities/StyleWrapper';
import React, { useEffect, useState } from 'react';
import { ToastAndroid, View } from 'react-native';

import CategoryCard from './component/CategoryCard';

export interface CategoryProps {}

const Category: React.FC<CategoryProps> = () => {
    const [category, setCategory] = useState<catalogueData[]>([]);

    const fetchProduct = async () => {
        try {
            const response = await getCatalogueDetailsAPI();

            setCategory(response.payload);
        } catch (error) {
            console.log(error);
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

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
                    return <CategoryCard item={item} key={index} onPress={() => {}} />;
                })}
            </View>
        </View>
    );
};

export default Category;
