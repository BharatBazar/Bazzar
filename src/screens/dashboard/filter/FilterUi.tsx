import { IClassifier, IRFilter } from '@app/api/product/product.interface';
import ButtonMaterialIcons from '@app/screens/components/button/ButtonMaterialIcons';
import ButtonRippleLeftMaterialIconMiddleTextRightChild from '@app/screens/components/button/ButtonRippleLeftMaterialIconMiddleTextRightChild';
import ButtonRippleText from '@app/screens/components/button/ButtonRippleText';
import MaterialIconWrapper from '@app/screens/components/icon/MaterialIconWrapper';
import TextBasic from '@app/screens/components/text/TextBasic';
import Colors from '@app/utilities/Colors';
import { FontFamily } from '@app/utilities/FontFamily';
import { AIC, BGCOLOR, FDR, FLEX, JCC, PL, provideShadow } from '@app/utilities/Styles';
import * as React from 'react';
import { View, StyleSheet, ScrollView, Switch } from 'react-native';
import ShowAppliedFilterValues from './component/ShowAppliedFilters';
import FilterPopup from './FilterPopup';

interface FilterUiProps {
    filters: IRFilter[];
    loadProduct: Function;
}

const FilterUi: React.FunctionComponent<FilterUiProps> = ({ filters, loadProduct }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [isEnabled, toggleSwitch] = React.useState(false);
    const [selectedFilter, setSelectedFilter] = React.useState<{ [key: string]: IClassifier[] }>({});

    const selectFilter = (type: string, value: IClassifier) => {
        let filterss: { [key: string]: IClassifier[] } = { ...selectedFilter };
        if (filterss[type]) {
            filterss[type].push(value);
        } else {
            filterss[type] = [value];
        }
        console.log('fiter select', filterss);
        setSelectedFilter(filterss);
    };

    const deselectFilter = (type: string, value: IClassifier) => {
        let filterss: { [key: string]: IClassifier[] } = { ...selectedFilter };
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
            filterToSend[item] = selectedFilter[item].map((a) => a._id);
        });
        loadProduct(filterToSend);
        setModalVisible(false);
    };

    const clearAllFilters = () => {
        setSelectedFilter({});
    };

    return (
        <View style={[FDR(), { height: 45, width: '100%' }, provideShadow(2), BGCOLOR('#FFFFFF')]}>
            <ScrollView
                style={{}}
                // contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <ButtonRippleLeftMaterialIconMiddleTextRightChild
                    fontSize={12}
                    onPress={() => {
                        toggleSwitch(!isEnabled);
                    }}
                    containerStyle={{ paddingLeft: 5 }}
                    iconName={'store'}
                    iconSize={25}
                    iconColor={isEnabled ? Colors.primary : Colors.primaryLight}
                    children={
                        <Switch
                            trackColor={{ false: '#bcbcbc', true: Colors.primary }}
                            thumbColor={'#ffffff'}
                            ios_backgroundColor="#bcbcbc"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ marginLeft: 0 }}
                        />
                    }
                />
                <View style={[FLEX(1), JCC(), AIC(), { paddingRight: 10 }, FDR()]}>
                    <ShowAppliedFilterValues selectedFilter={selectedFilter} />
                </View>
            </ScrollView>
            <ButtonRippleLeftMaterialIconMiddleTextRightChild
                fontSize={12}
                containerStyle={[styles.filterContainer]}
                onPress={() => {
                    setModalVisible(true);
                }}
                buttonText={
                    'Filter' +
                    (Object.keys(selectedFilter).length > 0 ? ` (${Object.keys(selectedFilter).length})` : '')
                }
                textStyle={{ fontSize: 13, fontFamily: FontFamily.SemiBold, color: Colors.primary }}
                children={
                    <MaterialIconWrapper
                        iconSize={20}
                        iconName={modalVisible ? 'expand-less' : 'expand-more'}
                        iconColor={Colors.primary}
                    />
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
        paddingHorizontal: '2%',
        borderStartWidth: 0.2,
        borderColor: Colors.borderColorPrimary,
    },
});
