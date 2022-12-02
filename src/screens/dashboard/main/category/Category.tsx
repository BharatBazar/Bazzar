import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { fs20, fs24 } from '../../../../common';
import { applyColorCode, black60, black70, generalColor } from '../../../../common/color';
import { BGCOLOR, FDR, FLEX, JCC, PH, PV } from '../../../../common/styles';
import { getProductCatalogueAPI } from '../../../../server/apis/productCatalogue/productCatalogue.api';
import { categoryType, productCategory } from '../../../../server/apis/productCatalogue/productCatalogue.interface';
import WrappedText from '../../../components/WrappedText';
import CategoryCard from './component/CategoryCard';

export interface CategoryProps {}

const Category: React.SFC<CategoryProps> = () => {
    const [category, setCategory] = useState<productCategory[]>([]);

    const fetchProduct = async () => {
        try {
            const response = await getProductCatalogueAPI({ categoryType: categoryType.Category });

            setCategory(response.payload);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <View style={[FLEX(1)]}>
            <WrappedText text={'Category'} containerStyle={[PH(0.4), PV(0.1)]} fontSize={fs24} textColor={black60} />
            <View style={[FLEX(1), FDR(), JCC('space-evenly'), { flexWrap: 'wrap' }]}>
                {category.map((item: productCategory, index: number) => {
                    return (
                        <CategoryCard
                            item={item}
                            key={index}
                            onPress={() => {
                                if (item.subCategoryExist) {
                                }
                            }}
                        />
                    );
                })}
            </View>
        </View>
    );
};

export default Category;
