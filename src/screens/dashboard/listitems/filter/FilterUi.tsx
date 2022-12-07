import { catalogueData } from '@app/api/catalogue/catalogue.interface';
import { FilterAndValues, IClassifier, IRFilter } from '@app/api/product/product.interface';
import ButtonMaterialIcons from '@app/screens/components/button/ButtonMaterialIcons';
import ButtonRippleLeftMaterialIconMiddleTextRightChild from '@app/screens/components/button/ButtonRippleLeftMaterialIconMiddleTextRightChild';
import ButtonRippleText from '@app/screens/components/button/ButtonRippleText';
import MaterialIconWrapper from '@app/screens/components/icon/MaterialIconWrapper';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { GENERAL_BOUNDARY_SPACE } from '@app/utilities/Dimensions';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, BGCOLOR, FDR, FLEX, JCC, PL, PR, provideShadow } from '@app/utilities/Styles';
import { PLA, PRA } from '@app/utilities/StyleWrapper';
import * as React from 'react';
import { View, StyleSheet, ScrollView, Switch } from 'react-native';
import ShowAppliedFilterValues from './component/ShowAppliedFilters';
import FilterPopup from './FilterPopup';

interface FilterUiProps {
    filters: FilterAndValues[];
    loadProduct: Function;
    showShops: boolean;
    setShowShops: (a: boolean) => void;
    shopSwitch: boolean;
}

export const FILTER_HEIGHT = 45;

const FilterUi: React.FunctionComponent<FilterUiProps> = ({
    filters,
    loadProduct,
    showShops,
    setShowShops,
    shopSwitch,
}) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const [selectedFilter, setSelectedFilter] = React.useState<{ [key: string]: catalogueData[] }>({});

    const selectFilter = (type: string, value: catalogueData) => {
        let filterss: { [key: string]: catalogueData[] } = { ...selectedFilter };
        if (filterss[type]) {
            filterss[type].push(value);
        } else {
            filterss[type] = [value];
        }
        console.log('fiter select', filterss);
        setSelectedFilter(filterss);
    };

    const deselectFilter = (type: string, value: catalogueData) => {
        let filterss: { [key: string]: catalogueData[] } = { ...selectedFilter };
        if (filterss[type]) {
            filterss[type] = filterss[type].filter((item) => item._id != value._id);
            if (filterss[type].length == 0) {
                delete filterss[type];
            }
        } else {
        }

        setSelectedFilter(filterss);
    };

    const onApplyFilters = () => {
        let filterToSend = {};
        Object.keys(selectedFilter).map((item) => {
            filterToSend[item] = { $in: selectedFilter[item].map((a) => a._id) };
        });
        console.log('filter', filterToSend);
        loadProduct(filterToSend);
        setModalVisible(false);
    };

    const clearAllFilters = () => {
        setSelectedFilter({});
    };

    return (
        <View style={[FDR(), { height: FILTER_HEIGHT, width: '100%' }, provideShadow(2), BGCOLOR(Colors.white)]}>
            <ScrollView
                style={{}}
                // contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                {shopSwitch && (
                    <ButtonRippleLeftMaterialIconMiddleTextRightChild
                        fontSize={12}
                        onPress={() => {
                            if (!showShops) {
                                loadProduct({ shop: true });
                            } else {
                                loadProduct({ shop: false });
                            }
                            setShowShops(!showShops);
                        }}
                        containerStyle={[PLA(GENERAL_BOUNDARY_SPACE - 2)]}
                        iconName={'store'}
                        iconSize={25}
                        iconColor={showShops ? Colors.primary : Colors.primaryLight}
                        children={
                            <Switch
                                trackColor={{ false: '#bcbcbc', true: Colors.primary }}
                                thumbColor={'#ffffff'}
                                ios_backgroundColor="#bcbcbc"
                                onValueChange={(value) => {}}
                                value={showShops}
                                style={{ marginLeft: 0 }}
                            />
                        }
                    />
                )}
                <View style={[FLEX(1), JCC(), AIC(), PRA(GENERAL_BOUNDARY_SPACE), FDR()]}>
                    <ShowAppliedFilterValues selectedFilter={selectedFilter} />
                </View>
            </ScrollView>
            <UtilityButton
                onPress={() => {
                    setModalVisible(true);
                }}
                iconName={'sort'}
                modalVisible={modalVisible}
                buttonText={
                    'Sort' + (Object.keys(selectedFilter).length > 0 ? ` (${Object.keys(selectedFilter).length})` : '')
                }
            />
            <UtilityButton
                onPress={() => {
                    setModalVisible(true);
                }}
                iconName={'filter-list'}
                modalVisible={modalVisible}
                buttonText={
                    'Filter' +
                    (Object.keys(selectedFilter).length > 0 ? ` (${Object.keys(selectedFilter).length})` : '')
                }
            />

            <FilterPopup
                filters={filters}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                selectedFilter={selectedFilter}
                selectFilter={selectFilter}
                deselectFilter={deselectFilter}
                clearAllFilter={clearAllFilters}
                applyFilter={onApplyFilters}
            />
        </View>
    );
};

export default FilterUi;

const styles = StyleSheet.create({
    filterContainer: {
        height: '100%',
        paddingHorizontal: GENERAL_BOUNDARY_SPACE,
        borderStartWidth: 0.2,
        borderColor: Colors.borderColorPrimary,
    },
});

export const UtilityButton = ({ onPress, iconName, buttonText, modalVisible }) => (
    <ButtonRippleLeftMaterialIconMiddleTextRightChild
        fontSize={12}
        containerStyle={[styles.filterContainer]}
        onPress={() => {
            onPress();
        }}
        iconName={iconName}
        iconColor={Colors.primary}
        buttonText={buttonText}
        iconSize={10}
        textStyle={{ fontSize: 13, fontFamily: FontFamily.SemiBold, color: Colors.primary, marginLeft: 5 }}
        children={
            <MaterialIconWrapper
                iconSize={15}
                iconName={modalVisible ? 'expand-less' : 'expand-more'}
                iconColor={Colors.primary}
            />
        }
    />
);
