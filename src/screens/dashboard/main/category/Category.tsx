import { getCatalogueDetailsAPI } from '@app/api/catalogue/catalogue.api';
import { catalogueData } from '@app/api/catalogue/catalogue.interface';
import TextBasic from '@app/screens/components/text/TextBasic';
import { black60 } from '@app/utilities/Colors';
import { FDR, FLEX, JCC, PH, PV } from '@app/utilities/Styles';
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
            <TextBasic text={'Category'} containerStyle={[PH(0.4), PV(0.1)]} fontSize={24} textColor={black60} />
            <View style={[FLEX(1), FDR(), JCC('space-evenly'), { flexWrap: 'wrap' }]}>
                {category.map((item: catalogueData, index: number) => {
                    return <CategoryCard item={item} key={index} onPress={() => {}} />;
                })}
            </View>
        </View>
    );
};

export default Category;
